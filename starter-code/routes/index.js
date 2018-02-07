var express = require("express");
var router = express.Router();
const Place = require("../models/Place");

/*======== CRUD => READ ========*/
// GET HOME PAGE
router.get("/", function(req, res, next) {
  Place.find().exec((err, places) => {
    res.render("index", { title: "Places", places: places });
  });
});
/*========== FIN READ ==========*/

/*======== CRUD => CREATE ========*/
/* GET NEW PAGE */
router.get("/new", (req, res, next) => {
  res.render("places/new");
});

// POST NEW PAGE
router.post("/new", (req, res, next) => {
  
  console.log("entramos en new");
  console.log(req.body);
  const place = new Place({ 
      // OBTENEMOS LA INFORMACIÓN DEL FORM UBICADO EN ./views/places/new.ejs
      // Y LA ASIGNAMOS A LAS PROPIEDADES DE place
      name: req.body.name,
      descriptiopn: req.body.descriptiopn, 
      type: req.body.type, 
      location: { lat: req.body.latitude, lng: req.body.longitude}
  });
  place.save(err => {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});
/*========== FIN CREATE ==========*/

module.exports = router;
