var express = require('express');
const CorrectionController = require('../controllers/document/correction');
const UploadFactory = require('../controllers/document/uploadFactory')

const router = express.Router();

router
    .route('/correction')
    .get(CorrectionController.getAllCorrection)
    .post(UploadFactory.uploadFileDoc, CorrectionController.createCorrection)

router
    .route('/correction/:id')
    // .get(CorrectionController.getActe)
    .patch(UploadFactory.uploadFileDoc, CorrectionController.updateCorrection)
    .delete(CorrectionController.deleteCorrection)


module.exports = router;