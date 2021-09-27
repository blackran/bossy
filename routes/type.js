var express = require('express');
const TypeController = require('../controllers/document/Type');


const router = express.Router();

router
    .route('/type')
    .get(TypeController.getAllType)
    .post(TypeController.createType)

// router.get('/type', TypeController.getAllType);

router
    .route('/type/:id')
    // .get(TypeController.getActe)
    .patch(TypeController.updateType)
    .delete(TypeController.deleteType)




module.exports = router;