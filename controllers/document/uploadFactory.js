const multer = require('multer');

// store destination image
const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/docs');
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + `.pdf`)
    }
});

const multerFilter = (req, file, cb) => {

    if (file.mimetype === 'application/pdf') {
        cb(null, true);
    } else {
        cb(new AppError('Not an pdf! Please upload pdf', 400), false);
    }
}

const upload = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});
exports.uploadFileDoc = upload.single('contenu');