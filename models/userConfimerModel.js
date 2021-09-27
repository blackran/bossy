const mongoose = require('mongoose');

const codeSchema = new mongoose.Schema({
    confirmationCode: {
        type: String
    },
    UserId: {
        type: String
    }
},
    { timestamps: true }
);



const UserConfirmer = mongoose.model('UserConfirmer', codeSchema);

module.exports = UserConfirmer;

