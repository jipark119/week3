
let map, infoWindow, map2;
let long,lati,fenway;
let coor;
let sunrTxt;
let sunsTxt;

window.addEventListener('DOMContentLoaded',function(){
  getLocation();

})




 function getLocation() {
  if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position){
      long=position.coords.longitude;
      lati=position.coords.latitude ;
      loader();

      fenway = {lat: lati, lng: long};
      const headerLocation= document.getElementById("location");
      headerLocation.innerHTML = `<h1>${fenway.lat},${fenway.lng}</h1>`;
      mapBg(fenway)
    });
  } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
  }
 }

 function getVal() {
  if (event.keyCode == 13) {
    let val = document.querySelector('input').value;
    search(val);
  }
}

function mapBg(x){
  dayleng(x);
  var panorama = new google.maps.StreetViewPanorama(
   document.getElementById('pano'), 
   {
      position: x,
      zoomControl: false,
      mapTypeControl: false,
      scaleControl: false,
      zoom: 0,
      streetViewControl: false,
      rotateControl:false,
      fullscreenControl: false,
      pov: {
        heading:90,
        pitch: 90
      }
    });
  map.setStreetView(panorama);


}


// async/await get coordinate
async function search(val){
    let url = "https://locationiq.com/v1/search.php?key=0c962c6661224e&q="+val+"&format=json"; 
    const response = await fetch(url);
    const result = await response.json();
    let lon= Number(result[0].lon);
    let lat= Number(result[0].lat);
    coor = {lat: lat, lng: lon};
    const headerLocation= document.getElementById("location");
    headerLocation.innerHTML = `<h1>${result[0].display_name}</h1>`;
    mapBg(coor);
}


// async/await daylength
async function dayleng(x){
  let long=x.lng;
  let lati=x.lat;
  let dUrl = "https://api.ipgeolocation.io/astronomy?apiKey=e4c2609b318b4d42b5f8da6d8a67f80a&lat="+lati+"&long="+long; 

  const response = await fetch(dUrl);
  const result = await response.json();
  let date= result.date;
  let sunrise=result.sunrise;
  let sunset=result.sunset;
  let dayLength=result.day_length;
  sunr= document.getElementById("sunrise");
  sunrTxt= `<p>${sunrise}</p>`;
  sunr.innerHTML = sunrTxt;

  suns= document.getElementById("sunset");
  sunsTxt= `<p>${sunset}</p>`;
  suns.innerHTML = sunsTxt;


  const dLeng= document.getElementById("length");
  dLeng.innerHTML = `<p>Day Length<br>${dayLength.slice(0, 2)} Hours, ${dayLength.slice(3, 6)} minutes</p>`;
 
  const todayD= document.getElementById("date");
  todayD.innerHTML = `<p>${date}</p>`;


}


function loader() {
  const myVar = setTimeout(showPage, 5000);
 }
 
 function showPage() {
   document.getElementById("loader").style.display = "none";
 }



 function  showTxt() {
  var x = document.getElementById("info-txt");

  if (x.style.display=== "none") {
    x.style.display = "block";
    document.querySelector('.glyphicon').style.color="#00ff22";
 
  } else {
      x.style.display="none"
    document.querySelector('.glyphicon').style.color="black";
  }
}

