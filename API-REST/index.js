// Définition des constantes des différentes dependencies
const Express = require("express");
const Mongoose = require("mongoose");
const BodyParser = require("body-parser");

// Connection à la database en utilisant Mongoose et Atlas
const connectionString = 'mongodb+srv://Dorian:HKsTCfZoAd2KNytn@cluster0.1ety6.mongodb.net/poliglot?retryWrites=true&w=majority'
Mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true });

var app = Express();
app.use(BodyParser.json());

// Définition du Schéma de donnée de notre collection "phoneProduct"
const PhoneModel = Mongoose.model("phoneProduct", {
    _id: Number,
    name: String,
    type: String,
    price: Number,
    rating: Number,
    warrantly_years: Number,
    available: Boolean
});

// Ajout d'un téléphone
app.post("/addPhone", async (request, response) => {
   try {
        var person = new PhoneModel(request.body);
        var result = await person.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
    console.log(request.body)
});

// Récupération de tous les téléphones
app.get("/phones", async (request, response) => {
    try {
        var result = await PhoneModel.find().exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Récupération d'un téléphone
app.get("/phone/:id", async (request, response) => {
    try {
        var result = await PhoneModel.findById(request.params.id).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Modification d'un téléphone
app.put("/phone/:id", async (request, response) => {
    try {
        var phone = await PhoneModel.findById(request.params.id).exec();
        phone.set(request.body);
        var result = await phone.save();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Suppression d'un téléphone
app.delete("/phone/:id", async (request, response) => {
    try {
        var result = await PhoneModel.deleteOne({ _id: request.params.id }).exec();
        response.send(result);
    } catch (error) {
        response.status(500).send(error);
    }
});

// Permet de lancer l'API
app.listen(5000, () => {
    console.log("Listening at :3000...");
});