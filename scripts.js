let map, infoWindow, map2;
let long,lati,fenway

getLocation();
initialize();
function initialize() {
    var test = {lat: 42.345573, lng: -71.098326};

    var panorama = new google.maps.StreetViewPanorama(
        document.getElementById('map'), {
          position: test,
          zoomControl: false,
          mapTypeControl: false,
          scaleControl: false,
          streetViewControl: false,
          rotateControl:false,
          fullscreenControl: false,
          pov: {
            heading: 34,
            pitch: 10
          }
        });
    map.setStreetView(panorama);
  }


 function getLocation() {
 if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position){
     long=position.coords.longitude;
     lati=position.coords.latitude ;
     fenway = {lat: lati, lng: long};


     var panorama = new google.maps.StreetViewPanorama(
         document.getElementById('pano'), {
           position: fenway,
           pov: {
             heading: 34,
             pitch: 10
           }
         });
     map2.setStreetView(panorama);


     });

 } else { 
     x.innerHTML = "Geolocation is not supported by this browser.";
 }


 }


// window.addEventListener('DOMContentLoaded',function(){
//     const funButton = document.getElementById("fun-button");
//     funButton.onclick = handleButtonPress;

// })

// // async/await

// async function handleButtonPress(event){
//     const container= document.getElementById("charc");
//     const url ="https://swapi.co/api/people";

//     const response = await fetch(url);
//     const charJson = await response.json();
//     const charList = charJson.results.map(function(character){
//         return `<li>${character.name}</li>`
//     })
//     const charContainer =`<ul>${charList.join("")}</ul>`;
//     container.innerHTML = charContainer;

//     // fetch(url).then(function(response){
//     //     return response.json()
//     // }).then(function(dogJson){
//     //     img.src=dogJson.message;
//     // });


// }


