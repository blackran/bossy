var express = require('express');
const NiveauController = require('../controllers/niveau/Niveau');

const router = express.Router();

router
    .route('/niveau')
    .get(NiveauController.getAllNiveau)
    .post(NiveauController.createNiveau)

    router
    .route('/niveau/:id')
    // .get(NiveauController.getActe)
    .patch(NiveauController.updateNiveau)
    .delete(NiveauController.deleteNiveau)


module.exports = router;