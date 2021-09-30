const Niveau = require('../../models/niveau/Niveau')
const ErrorFormatter = require('../../utils/errorFormatter')
const NiveauService= require('../../services/niveau/Niveau')


exports.createNiveau =  async (req, res) => {
    
    try{
            
        const isNiveauAlredyExist = await NiveauService.findNiveauAlreadyExist(req)
        if(isNiveauAlredyExist.data){
            return res.status(400).json({
                status: 'fail',
                message: 'niveau already exist'
        })

        }else{
            const newNiveau = await Niveau.create(req.body,function(err,newNiveau){

                if (err) {
                    return res.status(400).json({
                        status: 'something went wrong',
                        debugInfo: ErrorFormatter(err.message)
                    })
                }
                return res.status(201).json({
                    status: 'success',
                    data:{
                        Niveau: newNiveau
                    }
                })
            });

        }
        
    }
    catch(err){
        
        return res.status(400).json({
            status: 'fail',
            debugInfo: err.message

        })
    }

}

exports.getAllNiveau= async (req, res) => {

    try{
        const newNiveau= await Niveau.find({}).exec((err,listNiveau) =>{

            if(err){
                return res.status(400).json({
                    status:'something went wrong',
                    message:'can not get listNiveau'
                });
            }
            return res.status(200).json({
                status:'succes',
                data:{
                    Niveau: listNiveau
                }
            })

        })

        

    }catch(err){
        return res.status(400).json({
            status:'fail',
            message:'err'
        });


    }
}

exports.updateNiveau = async (req, res) => {

    try{

        const  idNiveauIsExist = await Niveau.find({
            _id: req.params.id
        })

        if(idNiveauIsExist.length <= 0){
           return res.status(400).json({
               status:'something went wrong',
               message:'no niveau found with ID '+req.params.id 
           });
        }

        const isNiveauAlredyExist = await NiveauService.findNiveauAlreadyExist(req)
        if(isNiveauAlredyExist.data){
            return res.status(400).json({
                status: 'fail',
                message: 'niveau already exist'
            })
        }   
        else{
            const newNiveau = await Niveau.findByIdAndUpdate(req.params.id, req.body , {new: true , runValidators: true}, function(err, Niveau)  {
                if (err) {
                    return res.status(400).json({
                        status: 'something went wrong',
                        debugInfo: errorFormatter(err.message)
                    })
                }
                return res.status(200).json({
                    status:'success',
                    data: Niveau
        
                });
            });
            
            
        }

    }   catch(err){
            return res.status(400).json({
                status: 'fail',
                message: 'err'

             })
        }

}


exports.deleteNiveau = async (req, res) => {

    try{
        const newNiveau = await Niveau.findByIdAndDelete(req.params.id ,function(err, Niveau){
            if(err){
                return res.status(400).json({
                    status:'something went wrong',
                    message:'can not delete Niveau with ID '+ req.params.id
                });
            }
            return res.status(200).json({
                status:'success',
                data: Niveau
            })

        });
       

    }   catch(err){
            return res.status(404).json({
                status: 'fail',
                message: err.message
    
            })
        }


}


