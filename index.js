// Constantes
const express = require('express')
const app = express()
const BodyParser = require("body-parser")

app.use(BodyParser.json());
app.use(express.static('./client/build'))
    
const path = require('path')
const Mongoose = require("mongoose");
const PhoneModel = require('./phoneModel');

// Connection à la database en utilisant Mongoose et Atlas
const connectionString = 'mongodb+srv://Dorian:HKsTCfZoAd2KNytn@cluster0.1ety6.mongodb.net/DorianSauvage?retryWrites=true&w=majority'
Mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false});


// Récupération de tous les téléphones
app.get("/api/phones", (_, res) => {
    
    const allPhones = PhoneModel.find();
    allPhones.exec().then(phones=>res.json(phones))
    .catch(err=>{
        res.sendStatus(500).send(err);
    })
});

// Ajout d'un téléphone
app.post("/api/addPhone", async (req, res) => {
    try {
        var person = new PhoneModel(req.body);
        var result = await person.save();
        res.send(result);
    } catch (error) {
        res.status(500).send(error);
    }
    console.log(req.body)
});

// Modification d'un téléphone
app.put("/api/phone",  (req, res) => {
    const {id, name, type, price, rating, warranty_years, available} = req.body
    PhoneModel.findOne({id})
    .then(phone=>{
        phone.id = id;
        phone.name = name;
        phone.type = type;
        phone.price = price;
        phone.rating = rating;
        phone.warrantly_years = warranty_years;
        phone.available = available;
        phone.save().then(res.json(phone));
    })
    .catch(err=>{
        res.sendStatus(500).send(err);
    })  
});

// Suppression d'un téléphone
// app.delete("/api/phone/:id", async (req, res) => {
//   const {id} = req.params;
//   PhoneModel.findOneAndRemove({id}).then(phone=>{
//       res.json(phone);
//   }).catch(err=>{
//       res.sendStatus(500).send(err)
//   })
// });

// Autres
app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'))
})

app.listen(3001, ()=>{
    console.log(`Le serveur a bien été lancé sur le port : 3001`)
})