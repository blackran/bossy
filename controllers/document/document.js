const Document = require('../../models/document/Document')
const ErrorFormatter = require('../../utils/errorFormatter')
const DocumentService = require('../../services/document/Document')
const catchAsync = require('../../utils/catchAsync');



exports.createDocument = catchAsync(async (req, res) => {

  const isTypeExist = await DocumentService.findTypeExist(req)
  if (!isTypeExist.data) {
    return res.status(400).json({
      status: 'fail',
      message: 'Type not exist in DB'
    })
  }

  const isNiveauExist = await DocumentService.findNiveauExist(req)
  if (!isNiveauExist.data) {
    return res.status(400).json({
      status: 'fail',
      message: 'Niveau not exist in DB'
    })
  }

  let newDocument = new Document({
    titre: req.body.titre,
    description: req.body.description,
    type: req.body.type,
    niveau: req.body.niveau,
    categorie: req.body.categorie,
    contenu: req.file.path
  });

  newSave = await newDocument.save();

  if (!newSave) {
    return res.status(400).json({
      status: 'something went wrong',
      debugInfo: ErrorFormatter(err.message)
    })
  }


  return res.status(201).json({
    status: 'success',
    data: {
      Document: newSave
    }
  });



})


exports.updateDocument = catchAsync(async (req, res) => {

  const idDocumentIsExist = await Document.find({
    _id: req.params.id
  })

  if (idDocumentIsExist.length <= 0) {
    return res.status(400).json({
      status: 'something went wrong',
      message: 'no Document found with ID ' + req.params.id
    });
  }

  else {
    let update = await Document.findByIdAndUpdate(req.params.id,
      {
        titre: req.body.titre,
        description: req.body.description,
        type: req.body.type,
        niveau: req.body.niveau,
        categorie: req.body.categorie,
        contenu: req.file.path
      }
      , {
        new: true,
        runValidators: true
      });

    if (!update) {
      return next(new AppError('No Product found with that ID', 404))
    }

    res.status(201).json({
      status: 'success',
      data: {
        update
      }
    });


  }
})

exports.deleteDocument = catchAsync(async (req, res) => {

  const idDocument = await Document.find({
    _id: req.params.id
  }).populate(['type', 'niveau']).exec()

  if (idDocument.length <= 0) {
    return res.status(400).json({
      status: 'something went wrong',
      message: 'no Document found with ID ' + req.params.id
    });
  }

  Document.findByIdAndDelete(req.params.id).exec((err, Document) => {
    if (err) {
      return res.status(400).json({
        status: 'something went wrong',
        message: 'can not delete Document with ID ' + req.params.id
      });
    }
    return res.status(200).json({
      status: 'success',
      data: Document
    })
  });
})


//find documentElement

exports.getAllDocumentMemeCategorie = catchAsync(async (req, res) => {

  if (!req.params.categorie) {
    return res.status(400).json({
      status: 'fail',
      message: 'categorie must have value'
    })
  }
  const document = await DocumentService.getMemeCategorieEtNiveau(req)

  return res.status(200).json({
    status: 'success',
    data: document
  })

})

exports.getAllDocument = catchAsync(async (req, res) => {

  const documents = await DocumentService.getAllDocument(req)
  return res.status(200).json({
    status: 'succes',
    data: {
      Document: documents
    }
  })
})


exports.getDocument = catchAsync(async (req, res) => {

  const idDocument = await Document.find({
    _id: req.params.id
  }).populate(['type', 'niveau']).exec()

  if (idDocument.length <= 0) {
    return res.status(400).json({
      status: 'something went wrong',
      message: 'no Document found with ID ' + req.params.id
    });
  }

  const document = await DocumentService.getDocument(req)

  return res.status(200).json({
    status: 'success',
    data: document
  })
})

// exports.getMemeCategorieEtNiveau = catchAsync(async (req, res) => {

//     if (!req.body.categorie) {
//         return res.status(400).json({
//             status: 'fail',
//             message: 'categorie must have value'
//         })
//     }
//     if (!req.body.Niveau) {
//         return res.status(400).json({
//             status: 'fail',
//             message: 'Niveau must have value'
//         })
//     }
//     if (!req.body.type) {
//         return res.status(400).json({
//             status: 'fail',
//             message: 'type must have value'
//         })
//     }

//     const document = await DocumentService.getAllDocumentMemeCategorie(req)
//     return res.status(200).json({
//         status: 'success',
//         data: document
//     })

// })




