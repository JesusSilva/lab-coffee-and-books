const mongoose = require("mongoose");
const Place = require("../models/Place");

mongoose.connect("mongodb://localhost/place-ironhack");

const places = [
  {
    name: "Hola café",
    description: "Hola café",
    type: "Coffe",
    location: { lat: 40.416937, lng: -3.704513 }
  },
  {
    name: "Ruda",
    description: "Ruda café",
    type: "Coffe",
    location: { lat: 40.416138, lng: -3.704513 }
  },
  {
    name: "Lee",
    description: "Lee Shop",
    type: "BookShop",
    location: { lat: 40.416, lng: -3.704513 }
  },
  {
    name: "Aprende a leer",
    description: "Aprende a leer",
    type: "BookShop",
    location: { lat: 40.41684, lng: -3.704513 }
  }
];

// ELIMINAMOS LA COLECCIÓN PARA NO TENER DUPLICIDAD
Place.collection.drop();
// CREAMOS LA COLLECION places EN NUESTRA BBDD
Place.create(places, (err, docs) => {
  if (err) {
    throw err;
  }
  places.forEach(place => {
    console.log(place.name);
  });
  //CERRAMOS LA CONEXION CON MONGOOSE
  console.log("Cerrando conexion con mongoose...");
  mongoose.connection.close();
});
