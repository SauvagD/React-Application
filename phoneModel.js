//Définition d'un schéma ainsi que d'un model de données
const Mongoose = require('mongoose')

const Schema = Mongoose.Schema;
const phoneProduct = new Schema({
    id: Number,
    name: String,
    type: String,
    price: Number,
    rating: Number,
    warranty_years: Number,
    available: Boolean
})
const PhoneModel = Mongoose.model("PhoneModel", phoneProduct)

module.exports = PhoneModel;