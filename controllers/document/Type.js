const Type = require('../../models/document/Type')
const ErrorFormatter = require('../../utils/errorFormatter')
const TypeService= require('../../services/document/Type')


exports.createType =  async (req, res) => {
    
    try{
            
        const isTypeAlredyExist = await TypeService.findTypeAlreadyExist(req)
        if(isTypeAlredyExist.data){
            return res.status(400).json({
                status: 'fail',
                message: 'Type already exist'
        })

        }else{
            const newType = await Type.create(req.body,function(err,newType){

                if (err) {
                    return res.status(400).json({
                        status: 'something went wrong',
                        debugInfo: ErrorFormatter(err.message)
                    })
                }
                return res.status(201).json({
                    status: 'success',
                    data:{
                        Type: newType
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

exports.getAllType= async (req, res) => {

    try{
   
        const type = await Type.find({}).exec((err, listType) => {
              if(err){
                return res.status(400).json({
                    status:'something went wrong',
                    message:'can not get listType'
                });
            }
            return res.status(200).json({
                status:'succes',
                data:{
                    Type: listType
                }
            })
        })


    }catch(err){
        return res.status(400).json({
            status:'fail',
            message:err.message
        });


    }
}

exports.updateType = async (req, res) => {

    try{

        const  idTypeIsExist = await Type.find({
            _id: req.params.id
        })

        if(idTypeIsExist.length <= 0){
           return res.status(400).json({
               status:'something went wrong',
               message:'no Type found with ID '+req.params.id 
           });
        }

        const isTypeAlredyExist = await TypeService.findTypeAlreadyExist(req)
        if(isTypeAlredyExist.data){
            return res.status(400).json({
                status: 'fail',
                message: 'Type already exist'
            })
        }   
        else{
            const newType = await Type.findByIdAndUpdate(req.params.id, req.body , {new: true , runValidators: true}, function(err, Type)  {
                if (err) {
                    return res.status(400).json({
                        status: 'something went wrong',
                        debugInfo: errorFormatter(err.message)
                    })
                }
                return res.status(200).json({
                    status:'success',
                    data: Type
        
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


exports.deleteType = async (req, res) => {

    try{
        const newType = await Type.findByIdAndDelete(req.params.id ,function(err, Type){
            if(err){
                return res.status(400).json({
                    status:'something went wrong',
                    message:'can not delete Type with ID '+ req.params.id
                });
            }
            return res.status(200).json({
                status:'success',
                data: Type
            })

        });
       

    }   catch(err){
            return res.status(404).json({
                status: 'fail',
                message: err.message
    
            })
        }


}


