const express = require('express');
const DocumentController = require('../controllers/document/document');
const UploadFactory = require('../controllers/document/uploadFactory')


const router = express.Router();

router
    .route('/document')
    .get(DocumentController.getAllDocument)
    .post(UploadFactory.uploadFileDoc, DocumentController.createDocument)

router
    .route('/document/:id')
    .get(DocumentController.getDocument)
    .patch(UploadFactory.uploadFileDoc, DocumentController.updateDocument)
    .delete(DocumentController.deleteDocument)

// router
//     .route('/documentMemeCategorieEtNiveau')
//     .get(DocumentController.getMemeCategorieEtNiveau)

router
  // .route('/documentMemeCategorie/:categorie/:type/:niveau')
  .route('/documentMemeCategorie/:categorie')
    .get(DocumentController.getAllDocumentMemeCategorie)

router
  .route('/documentMemeCategorie/:categorie/:type')
    .get(DocumentController.getAllDocumentMemeCategorie)

router
  .route('/documentMemeCategorie/:categorie/:type')
    .get(DocumentController.getAllDocumentMemeCategorie)


module.exports = router;
