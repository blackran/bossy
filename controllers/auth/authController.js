const User = require('../../models/userModels');
const UserConfirmer = require('../../models/userConfimerModel');
const sendEmail = require('../../utils/email');
const catchAsync = require('../../utils/catchAsync');
const AppError = require('../../utils/appError');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');
const crypto = require('crypto');




const signToken = id => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
}

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user._id);

  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),

    // secure: true,
    httpOnly: true
  }
  if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
  res.cookie('jwt', token, cookieOptions);

  // Remove password from output
  user.password = undefined;

  res.status(statusCode).json({
    status: 'success',
    token,
    data: {
      user
    }
  });
}




exports.signup = catchAsync(async (req, res, next) => {

  const codeCofirmation = Math.floor(100000 + Math.random() * 900000);

  let newUser = new User({
    firstname: req.body.firstname,
    email: req.body.email,
    password: req.body.password,
  });

  const token = signToken(newUser._id, newUser.email);

  let userCode = new UserConfirmer({
    confirmationCode: codeCofirmation,
    UserId: newUser._id
  })


  // const urlConfirm = `${req.protocol}://${req.get('host')}/api/user/verificationUser`
  const resetURL = `http://localhost:3000/Confirmation?email=${req.body.email}`;

  const html = `<html>\n\
                  <body>\n\
                   <b>Votre code confirmation est : ${codeCofirmation}</b>
                   <p>Veuillez cliquer sur le lien ci-dessous pour vérifier votre code confirmation</p>
                   <a href='${resetURL}'>${resetURL}</a>
                   <p>ou</p>
                   <a href='${resetURL + `&code=${codeCofirmation}`}'>cliquer ici</a>
                  </body>
                  </html>
                 `;

  try {
    await sendEmail({
      email: newUser.email,
      subject: 'Code de confirmation valider ',
      html

    });

    saveUser = await newUser.save();

    saveCode = await userCode.save()

    res.status(201).json({
      status: 'success',
      email: req.body.email,
    });



  } catch (err) {
    return res.status(500).send(
      { message: "Une erreur s'est produite lors de l'envoi de l'e-mail. Réessayez plus tard" }
    );
  }

});

exports.verifyUser = catchAsync(async (req, res, next) => {



  UserConfirmer.findOneAndDelete({ confirmationCode: req.body.confirmationCode }).exec((err, code) => {
    if (err) return res.status(400).json({ success: false, err });
    if (!code) {
      return res.status(404).send(
        { message: "Code confirmation Invalide! Veuillez verifier votre code de confirmation dans votre email" }
      );
    }

    const token = signToken(code.UserId);
    return res.status(200).json({
      status: 'success',
      token
    })

  })



})

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1)Check if email and password exit
  if (!email || !password) {
    return res.status(401).send(
      { message: "Veuillez entrer l'email et le mot de passe" }
    );
  }

  // 2)CHECK IF USER $ Password exits
  const user = await User.findOne({ email }).select('+password');

  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(400).send(
      {
        message: "email ou mot de passe incorrect"
      }
    );

  }

  const UserID = user._id

  const isCodeExist = await UserConfirmer.findOne({ UserId: UserID });

  if (isCodeExist) {
    return res.status(401).send(
      { message: "Veuillez Valider votre compte a l'aide de confirmation dans votre email" }
    );
  } else {
    const token = signToken(user._id);
    res.status(200).json({
      status: 'success',
      token
    });
  }


});


exports.protect = catchAsync(async (req, res, next) => {
  // 1) Getting token and check of it\s there 
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    token = req.headers.authorization.split(' ')[1];
  }

  if (!token) {
    return res.status(401).send(
      { message: "Vous n'êtes pas connecté ! veuillez vous connecter pour accéder" }
    );
  }
  // 2) Verification Token 
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);
  // console.log(decoded);

  // 3) Check if user changed password
  // permet de supprimer le token si un utilisateur a ete supprimer
  const currentUser = await User.findById(decoded.id);
  if (!currentUser) {

    return res.status(401).send(
      { message: "L'utilisateur de cet utilisateur n'existe plus" }
    );
  }

  // 4) Check if user changed password after the token was issued
  if (currentUser.changedPasswordAfter(decoded.iat)) {
    return res.status(401).send(
      { message: "L'utilisateur a changé le mot de passe! Veuillez vous reconnecter" }
    );
  }

  // Grantt access to protected route
  req.user = currentUser;

  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    // roles ['adim','lead-guide']
    if (!roles.includes(req.user.role)) {
      return res.status(403).send(
        {
          message: "Vous n'êtes pas autorisé à effectuer cette action"
        }
      );
    }

    next();
  }
}

exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get user from collection
  const user = await User.findById(req.user.id).select('+password');

  // 2) Check if Posted current password is corret
  if (!(user.correctPassword(req.body.password, user.password))) {
    return res.status(401).send(
      {
        message: "Votre mot de passe actuel est erroné"
      }
    );
  }

  // 3) If so , update password
  user.password = req.body.password;
  await user.save();
  // User.findByIdAndUpdate will notwork as intended!


  // 4) Log user in, send JWT
  createSendToken(user, 200, res);

});

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on Posted Email
  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    return res.status(404).send(
      {
        message: "Il n'y a pas d'adresse e-mail d'utilisateur"
      }
    );
  }

  // 2) Generate the random number
  const resetToken = user.createPasswordResetToken();
  await user.save({ validateBeforeSave: false });
  const codeCofirmation = Math.floor(100000 + Math.random() * 900000);


  let userCode = new UserConfirmer({
    confirmationCode: codeCofirmation,
    UserId: user._id
  })

  // Send it to user's email
  const resetURL = `${req.protocol}://${req.get('host')}/api/user/resetPassword/${resetToken}`;

  const html = `<html>\n\
                  <body>\n\
                   <b>Votre code confirmation est : ${codeCofirmation}</b>
                   <p>Veuillez cliquer sur le lien ci-dessous pour vérifier votre code confirmation</p>
                   <a href='${resetURL}'>${resetURL}</a>
                  </body>
                  </html>
                 `;


  try {
    await sendEmail({
      email: user.email,
      subject: 'Code de confirmation valider ',
      html

    });

    saveCode = await userCode.save()

    res.status(201).json({
      status: 'success',
      resetToken,
      data: {
        saveCode
      }
    });

  } catch (err) {
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    await user.save({ validateBeforeSave: false });

    return res.status(500).send(
      { message: "Une erreur s'est produite lors de l'envoi de l'e-mail. Réessayez plus tard" }
    );
  }
});
exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get User based on the Token
  const hashedToken =
    crypto
      .createHash('sha256')
      .update(req.params.token)
      .digest('hex');

  const user = await User.findOne({ createPasswordResetToken: hashedToken, createPasswordResetExpires: { $gt: Date.now() } });

  // 2) If token has not expired, and there is user, set the new password
  if (!user) {
    return res.status(400).send(
      { message: "Token n'est pas valide ou a expiré" }
    );
  }


  user.password = req.body.password;
  user.passwordResetToken = undefined;
  user.passwordResetExpires = undefined;
  await user.save();


  const token = signToken(user._id);
  res.status(200).json({
    status: 'success',
    token
  });


});

exports.logout = (req, res) => {
  res.clearCookie('jwt', 'loggedout', {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true
  });
  res.status(200).json({ status: 'success' });
};


