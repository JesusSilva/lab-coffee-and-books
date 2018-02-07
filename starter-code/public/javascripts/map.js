//A esta función se la llama en el callback
//situado en index.ejs, al final de la API KEY.
function startMap() {
  //Creamos la variable map para hacer referencia al div#map de ./views/index.ejs
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 15
    // center: [lat,lng] => En caso de querer centrar el mapa asignar coordenadas.
  });
  const bounds = new google.maps.LatLngBounds();

  //Recorremos el array place obtenido en ./views/index.ejs
  //en el cual tenemos un array de objetos
  place.forEach(p => {
    console.log("entramos en el forEach de map.js");
    console.log(p); //Imprimirá un obejto del array place
    bounds.extend(p.location);
    //Creamos un marcador en el mapa por cada elemento del array
    //y pintamos en el mapa y en la posicion del elemento
    //el nombre de nuestro elemento
    createWindow(map, p.location, `<h2>${p.name}</h2>`);
  });
  map.fitBounds(bounds);
}

function createWindow(map, pos, content) {
  var infowindow = new google.maps.InfoWindow({
    content: content
  });
  var marker = new google.maps.Marker({
    position: pos,
    map: map,
    title: "Place"
  });
  marker.addListener("click", function() {
    infowindow.open(map, marker);
  });
}
