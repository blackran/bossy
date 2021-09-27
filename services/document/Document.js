const Type = require('../../models/document/Type');
const Niveau = require('../../models/niveau/Niveau');
const Document = require('../../models/document/Document');
const Correction = require('../../models/document/correction');


exports.findTypeExist = async (req) => {
  try {
    const type = await Type.find()
    const typeIsExist = type.find(e => {
      return JSON.stringify(e._id) === JSON.stringify(req.body.type)
    })
    return typeIsExist;
  } catch (err) {
    return { status: 'fail', data: err }
  }
}

exports.findNiveauExist = async (req) => {

  try {
    const niveau = await Niveau.find()
    const niveauIsExist = niveau.find(e => {
      return JSON.stringify(e._id) === JSON.stringify(req.body.niveau)
    })

    return niveauIsExist;

  } catch (err) {
    return { status: 'fail', data: err }
  }


}

exports.findDocumentExist = async (req) => {

  try {
    const document = await Document.find()
    const documentIsExist = document.find(e => {
      return JSON.stringify(e._id) === JSON.stringify(req.body.document)
    })

    return documentIsExist;

  } catch (err) {
    return { status: 'fail', data: err }
  }

}

exports.getMemeCategorieEtNiveau = async (req) => {

  try {

    let documentResponse = []
    const document = await Document.find().populate(['type', 'niveau']).sort('niveau -niveau')

    documentResponse = document.filter(e => {
      return (
        (JSON.stringify(e.categorie) === JSON.stringify(req.params.categorie)) &&
        (JSON.stringify(e.type._id) === JSON.stringify(req.params.type) || !req.params.type) &&
        (JSON.stringify(e.niveau._id) === JSON.stringify(req.params.niveau) || !req.params.niveau)
      )
    })

    return documentResponse;
  } catch (err) {
    return { status: 'fail', data: err }
  }

}

// find  document

exports.getAllDocumentMemeCategorie = async (req) => {

  try {
    let documentReponse = []

    const documents = await Document.find().populate(['type', 'niveau']).exec()

    const newdocuments = documents.filter(e => {
      return (JSON.stringify(e.categorie) === JSON.stringify(req.body.categorie))
    })
    if (req.body.categorie = "exercice") {
      documentReponse = await Promise.all(newdocuments.map(async (document) => {
        const newDoc = JSON.parse(JSON.stringify(document))
        const corection = await Correction.find({ document: document._id });
        newDoc.corection = corection;
        return newDoc;
      }))
    }

    return documentReponse;
  } catch (err) {
    return { status: 'fail', data: err }
  }
}

exports.getDocument = async (req) => {
  try {

    const documents = await Document.find({ _id: req.params.id }).populate(['type', 'niveau']).exec()

    documentReponse = await Promise.all(documents.map(async (document) => {
      const newDoc = JSON.parse(JSON.stringify(document))
      const corection = await Correction.find({ document: document._id });
      newDoc.corection = corection;
      // console.log("newDoc",newDoc)
      return newDoc;
    }))

    return documentReponse[0];
  } catch (err) {
    return { status: 'fail', data: err.message }
  }
}


exports.getAllDocument = async (req) => {
  try {
    let documentReponse = []

    const documents = await Document.find().populate(['type', 'niveau']).exec()
    documentReponse = await Promise.all(documents.map(async (document) => {
      const newDoc = JSON.parse(JSON.stringify(document))
      const corection = await Correction.find({ document: document._id });
      newDoc.corection = corection;
      return newDoc;
    }))

    return documentReponse

  } catch (err) {
    return { status: 'fail', data: err }
  }
}

