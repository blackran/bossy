const mongoose = require("mongoose");
const validator = require('validator');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');
const { ObjectId } = mongoose.Schema;


const UserSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: [true, 'Please tell us your firstname!']
    },

    lastname: {
        type: String
    },

    email: {
        type: String,
        required: [true, 'Please provide your email'],
        lowercase: true,
        validate: [validator.isEmail, 'please provide a valid email']
    },
    photo: {
        type: String,
        default: 'default.jpeg'
    },
    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user'
    },
    password: {
        type: String,
        required: [true, 'please provide a password'],
        minlength: 8,
        select: false
    },

    passwordChangeAt: Date,
    passwordResetToken: String,
    passwordResetExpires: Date


},
    { timestamps: true }
);

UserSchema.pre('save', async function (next) {

    // Only run this function if password was actualy modified
    if (!this.isModified('password')) return next();

    // Hash the password with cost of 12
    this.password = await bcrypt.hash(this.password, 12);

    // Delete passwordConfirm field
    next();
});

// affiche active status pour deleteMe 
// premet de n'est pas affiche celui qui n'a pas active
UserSchema.pre(/^find/, function (next) {
    // this poins to hte current query
    this.find({ active: { $ne: false } });
    next();
});

UserSchema.methods.correctPassword = async function (candidatePassword, userPassword) {
    return await bcrypt.compare(candidatePassword, userPassword);
};

// Si un utilisateur viens de change le mots de passe 


UserSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
    if (this.passwordChangeAt) {
        const changeTimestamp = parseInt(this.passwordChangeAt.getTime() / 1000, 10);
        console.log(changeTimestamp, JWTTimestamp);
        return JWTTimestamp < changeTimestamp; // 100 < 200
    }


    // False means Not chnaged
    return false;
}

// if we didn't modify the password proprety
// alors do not manipulate the passwordChangeAt
UserSchema.pre('save', function (next) {
    if (!this.isModified('password') || this.isNew) return next();

    this.passwordChangeAt = Date.now() - 1000;
    next();
})

// Password reset token should basically be a random string

UserSchema.methods.createPasswordResetToken = function () {
    const resetToken = crypto.randomBytes(32).toString('hex');

    this.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    console.log({ resetToken }, this.passwordResetToken);

    this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    return resetToken;
};


const User = mongoose.model('User', UserSchema);

module.exports = User;

