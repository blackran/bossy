
const Niveau = require('../../models/niveau/Niveau')

exports.findNiveauAlreadyExist = async (req) => {

    try{
        const niveau = await Niveau.find()
        const niveauIsExist = niveau.find(e => {
            return JSON.stringify(e.niveau) === JSON.stringify(req.body.niveau)
        })
        return  {status: 'success', data:niveauIsExist}

    }catch(err){
        return {tatus: 'fail', data: err}
    }


}