const mongoose = require('mongoose')

const TypeSchema = mongoose.Schema({
    type:{
        type:String,
        required:[true,"A type must have a value"]
    }
},
    {timestamps: true}

)

const type = mongoose.model('type',TypeSchema)
module.exports = type
