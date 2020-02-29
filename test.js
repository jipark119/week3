

    const hourHand = document.querySelector('.hourHand');
    const hourHand2 = document.querySelector('.hourHand2');
    const hourHand3 = document.querySelector('.hourHand3');
    const hourHand4 = document.querySelector('.hourHand4');
    const hourHand5 = document.querySelector('.hourHand5');
    const hourHand6 = document.querySelector('.hourHand6');
    const hourHand7 = document.querySelector('.hourHand7');
    const hourHand8 = document.querySelector('.hourHand8');
    const hourHand9 = document.querySelector('.hourHand9');

    const time = document.querySelector('.time');
    const clock = document.querySelector('.clock');
    setDate();
        function setDate(){
            const today = new Date();
            
            

            const minute = 17;

    
            const hourDeg2 = ((8 / 12) * 360); 
            hourHand2.style.transform = `rotate(${hourDeg2}deg)`;
            const hourDeg3 = ((9 / 12) * 360); 
            hourHand3.style.transform = `rotate(${hourDeg3}deg)`;
            const hourDeg4 =((10/ 12) * 360); 
            hourHand4.style.transform = `rotate(${hourDeg4}deg)`;
            const hourDeg5 = ((11 / 12) * 360); 
            hourHand5.style.transform = `rotate(${hourDeg5}deg)`;
            const hourDeg6 =((12 / 12) * 360); 
            hourHand6.style.transform = `rotate(${hourDeg6}deg)`;
            const hourDeg7 =((13 / 12) * 360); 
            hourHand7.style.transform = `rotate(${hourDeg7}deg)`;
            const hourDeg8 =((14 / 12) * 360); 
            hourHand8.style.transform = `rotate(${hourDeg8}deg)`;
            const hourDeg9 =((17 / 12) * 360); 
            hourHand9.style.transform = `rotate(${hourDeg9}deg)`;

         
    
            // const hour = today.getHours();
            const hour = 7;
 
            const hourDeg = ((hour / 12 ) * 360 ); 
            hourHand.style.transform = `rotate(${hourDeg}deg)`;

            
            // time.innerHTML = '<span>' + '<strong>' + hour + '</strong>' + ' : ' + minute + ' : ' + '<small>' + second +'</small>'+ '</span>';
    
            }
      

     


let map, infoWindow, map2;
let long,lati,fenway

getLocation();
// initialize();
// function initialize() {
//     var test = {lat: 42.345573, lng: -71.098326};

//     var panorama = new google.maps.StreetViewPanorama(
//         document.getElementById('map'), {
//           position: test,
//           zoomControl: false,
//           mapTypeControl: false,
//           scaleControl: false,
//           streetViewControl: false,
//           rotateControl:false,
//           fullscreenControl: false,
//           pov: {
//             heading: 90,
//             pitch: 90
//           }
//         });
//     map.setStreetView(panorama);
//   }


 function getLocation() {
 if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(function(position){
     long=position.coords.longitude;
     lati=position.coords.latitude ;
     fenway = {lat: lati, lng: long};


     var panorama = new google.maps.StreetViewPanorama(
         document.getElementById('pano'), {
           position: fenway,
           zoomControl: false,
           mapTypeControl: false,
           scaleControl: false,
           zoom: 0,
           streetViewControl: false,
           rotateControl:false,
           fullscreenControl: false,
           pov: {
             heading: 90,
             pitch: 90
           }
         });
     map.setStreetView(panorama);


     });

 } else { 
     x.innerHTML = "Geolocation is not supported by this browser.";
 }


 }

//API EXAMPLE

// window.addEventListener('DOMContentLoaded',function(){
//     const funButton = document.getElementById("fun-button");
//     funButton.onclick = handleButtonPress;

// })

// async/await

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


// *{
//     padding: 0;
//     margin: 0;
// }

// html, body {
//     height: 100%;
//     width:100%;
//   }
//   #map, #pano {
//     height: 100%;
//     width: 100%;
//     z-index:5;
//   }

// .clock{
//     /* clip-path: ellipse(50% 35%); */
//     margin:auto;
//     padding-top:80px;
//     z-index:9999;
//     position: absolute;
//     width:500px;
//     height:500px;
// }

// .hourHand7{
//     z-index:998;
//     width: 5px;
//       height: 250px;
//       background-color: white;
//       transform-origin: bottom center;
//       border-radius: 4px;
//       position: absolute;
//       left: calc(130% - 10px);
//       top: calc(10% - 10px);
//       transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
//         transform: rotate(90deg);
//   }
  
//   .hourHand8{
//     z-index:997;
//     width: 5px;
//       height: 250px;
//       background-color: white;
//       transform-origin: bottom center;
//       border-radius: 4px;
//       position: absolute;
//       left: calc(130% - 10px);
//       top: calc(10% - 10px);
//       z-index: 9;
//       transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
//         transform: rotate(90deg);
//   }
//   .hourHand9{
//     width: 5px;
//       height: 250px;
//       background-color: white;
//       transform-origin: bottom center;
//       border-radius: 4px;
//       position: absolute;
//       left: calc(130% - 10px);
//       top: calc(10% - 10px);
//       z-index: 9;
//       transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
//         transform: rotate(90deg);
//   }
// .hourHand6{
//     width: 5px;
//       height: 250px;
//     background-color: white;
//     transform-origin: bottom center;
//     border-radius: 4px;
//     position: absolute;
//     left: calc(130% - 10px);
//     top: calc(10% - 10px);
//     z-index: 9;
//     transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
//       transform: rotate(90deg);
// }
// .hourHand5{
//     width: 5px;
//       height: 250px;
//     background-color: white;
//     transform-origin: bottom center;
//     border-radius: 4px;
//     position: absolute;
//     left: calc(130% - 10px);
//     top: calc(10% - 10px);
//     transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
//       transform: rotate(90deg);
// }
// .hourHand4{
//     width: 5px;
//       height: 250px;
//     background-color: white;
//     transform-origin: bottom center;
//     border-radius: 4px;
//     position: absolute;
//     left: calc(130% - 10px);
//     top: calc(10% - 10px);
//     transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
//       transform: rotate(90deg);
// }
// .hourHand3{
//     width: 5px;
//       height: 250px;
//     background-color: white;
//     transform-origin: bottom center;
//     border-radius: 4px;
//     position: absolute;
//     left: calc(130% - 10px);
//     top: calc(10% - 10px);
//     transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
//       transform: rotate(90deg);
// }
// .hourHand2{
//     width: 5px;
//       height: 250px;
//     background-color: white;
//     transform-origin: bottom center;
//     border-radius: 4px;
//     position: absolute;
//     left: calc(130% - 10px);
//     top: calc(10% - 10px);
//     transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
//       transform: rotate(90deg);
// }

// .hourHand{
//     width: 5px;
//       height: 250px;
//     background-color:white;
//     transform-origin: bottom center;
//     border-radius: 4px;
//     position: absolute;
//     left: calc(130% - 10px);
//     top: calc(10% - 10px);
//     transform: rotate(360deg);
// }

// .secondHand{
//     width: 2px;
//     height: 120px;
//     background-color:red;
//     transform-origin: bottom center;
//     position: absolute;
//     top: 30px;
//     left: 149px;
//     transition: all 0.06s;
//     transition-timing-function: cubic-bezier(0.1, 2.7, 0.58, 1);
//     z-index: 8;  
//       transform: rotate(360deg);

// }
