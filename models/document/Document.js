const { text } = require('body-parser')
const mongoose = require('mongoose')
const Type = require('./Type')
const Niveau = require('../niveau/Niveau')

const DocumentSchema = new mongoose.Schema({
    titre: {
        type: String,
        required: [true, "A title must have a value"]
    },

    description: {
        type: String,
        required: [true, "A description must have a value"]

    },

    type: {
        type: mongoose.Schema.ObjectId,
        ref: Type,
        required: [true, "A type must have a value"]

    },

    niveau: {
        type: mongoose.Schema.ObjectId,
        ref: Niveau,
        required: [true, "A niveau must have a value"]
    },
    categorie: {
        type: String,
        required: [true, "A categorie must have a value"]
    },

    contenu: {
        type: String,
        required: [true, "A contenu must have a value"]
    }

},
    { timestamps: true }
)


const document = mongoose.model('document', DocumentSchema)

module.exports = document