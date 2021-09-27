const mongoose = require('mongoose')

const NiveauSchema = mongoose.Schema({
    niveau:{
        type: String,
        required:[true,"A niveau must have a value"]
    }
},
    {timestamps: true}
)

const niveau = mongoose.model('niveau', NiveauSchema)

module.exports = niveau