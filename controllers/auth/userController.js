const catchAsync = require('../../utils/catchAsync')
const User = require('../../models/userModels')
const AppError = require('../../utils/appError')
const multer = require('multer')
const sharp = require('sharp')
const UserConfirmer = require('../../models/userConfimerModel')
const sendEmail = require('../../utils/email')


const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new AppError('Not an image! Please upload only images', 400), false);
  }
}

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter
})

exports.uploadUserPhoto = upload.single('photo');


exports.resizeUserPhoto = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.file.filename = `user-${req.user.id}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(500, 500)
    .toFormat('jpeg')
    .jpeg({ quality: 90 })
    .toFile(`public/image/${req.file.filename}`);

  next();
});

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};
  Object.keys(obj).forEach(el => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
}


exports.updateMe = catchAsync(async (req, res, next) => {


  //  1) Create errot if user Post password data
  if (req.body.password) {
    return next(new AppError('This route is not for password updates , please use route /passwordUpdate'), 400);
  }

  // Filtered out unwanted field names that are not allowed to be updated
  const filteredBody = filterObj(req.body, 'firstname', 'lastname', 'email');
  if (req.file) filteredBody.photo = req.file.filename;

  // 2) Update user document
  const updatedUser = await User.findByIdAndUpdate(req.user.id, filteredBody, {
    new: true,
    runValidators: true
  });

  // If user update email
  if (filteredBody.email) {
    const codeCofirmation = Math.floor(100000 + Math.random() * 900000);

    let userCode = new UserConfirmer({
      confirmationCode: codeCofirmation,
      UserId: updatedUser._id
    })
    const urlConfirm = `${req.protocol}://${req.get('host')}/api/user/verificationUser`
    const html = `<html>\n\
                  <body>\n\
                   <b>Votre code confirmation est : ${codeCofirmation}</b>
                   <p>Veuillez cliquer sur le lien ci-dessous pour vérifier votre code confirmation</p>
                   <a href='${urlConfirm}'>${urlConfirm}</a>
                  </body>
                  </html>
                 `;
    try {
      await sendEmail({
        email: updatedUser.email,
        subject: 'Code de confirmation valider ',
        html
      });
      saveCode = await userCode.save()

      res.status(201).json({
        status: 'success',
        saveCode

      });

    } catch (err) {
      return res.status(500).send(
        { message: "Une erreur s'est produite lors de l'envoi de l'e-mail. Réessayez plus tard" }
      );
    }

  } else {
    res.status(200).json({
      status: 'success',
      updatedUser

    })
  }


});

exports.myProfile = catchAsync(async (req, res, next) => {
  const userProfile = await User.findById(req.params.id)

  res.status(200).json({
    status: 'success',
    data: userProfile,
  })
})



exports.userProfile = catchAsync(async (req, res, next) => {

  res.status(200).json({
    status: 'User profile test'
  });

});

