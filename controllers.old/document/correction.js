const Correction = require('../../models/document/correction')
const ErrorFormatter = require('../../utils/errorFormatter')
const DocumentService = require('../../services/document/Document')



exports.createCorrection = async (req, res) => {

    try {
        const isTypeExist = await DocumentService.findTypeExist(req)
        console.log("type", isTypeExist)
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

        const isDocumentExist = await DocumentService.findDocumentExist(req)
        if (!isDocumentExist.data) {
            return res.status(400).json({
                status: 'fail',
                message: 'Document not exist in DB'
            })
        }

        let newCorrection = new Correction({
            titre: req.body.titre,
            description: req.body.description,
            type: req.body.type,
            niveau: req.body.niveau,
            categorie: req.body.categorie,
            document: req.body.document,
            contenu: req.file.path
        });

        newSave = await newCorrection.save();

        if (!newSave) {
            return res.status(400).json({
                status: 'something went wrong',
                debugInfo: ErrorFormatter(err.message)
            })
        }


        res.status(201).json({
            status: 'success',
            data: {
                Correction: newSave
            }
        });


    }
    catch (err) {

        return res.status(400).json({
            status: 'fail',
            debugInfo: err.message

        })
    }

}

exports.getAllCorrection = async (req, res) => {

    try {
        const newCorrection = await Correction.find(function (err, listCorrection) {

            if (err) {
                return res.status(400).json({
                    status: 'something went wrong',
                    message: 'can not get listCorrection'
                });
            }
            return res.status(200).json({
                status: 'succes',
                data: {
                    Correction: listCorrection
                }
            })

        })



    } catch (err) {
        return res.status(400).json({
            status: 'fail',
            message: 'err'
        });


    }
}

exports.updateCorrection = async (req, res) => {

    try {

        const idCorrectionIsExist = await Correction.find({
            _id: req.params.id
        })
        if (!idCorrectionIsExist) {
            return res.status(400).json({
                status: 'fail',
                message: 'ID correction not exist in DB'
            })
        }

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

        const isDocumentExist = await DocumentService.findDocumentExist(req)
        if (!isDocumentExist.data) {
            return res.status(400).json({
                status: 'fail',
                message: 'Document not exist in DB'
            })
        }
        else {


            let update = await Correction.findByIdAndUpdate(req.params.id,
                {
                    titre: req.body.titre,
                    description: req.body.description,
                    type: req.body.type,
                    niveau: req.body.niveau,
                    categorie: req.body.categorie,
                    document: req.body.document,
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

            // const newCorrection = await Correction.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }, function (err, Correction) {
            //     if (err) {
            //         return res.status(400).json({
            //             status: 'something went wrong',
            //             debugInfo: errorFormatter(err.message)
            //         })
            //     }
            //     return res.status(200).json({
            //         status: 'success',
            //         data: Correction

            //     });
            // });


        }

    } catch (err) {
        return res.status(400).json({
            status: 'fail',
            message: err.message

        })
    }

}


exports.deleteCorrection = async (req, res) => {

    try {
        const newCorrection = await Correction.findByIdAndDelete(req.params.id, function (err, Correction) {
            if (err) {
                return res.status(400).json({
                    status: 'something went wrong',
                    message: 'can not delete Correction with ID ' + req.params.id
                });
            }
            return res.status(200).json({
                status: 'success',
                data: Correction
            })

        });


    } catch (err) {
        return res.status(404).json({
            status: 'fail',
            message: err.message

        })
    }


}


