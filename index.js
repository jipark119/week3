function renderIndex(googleKey) {
  return `
  <!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Day Length</title>
    <link href="https://fonts.googleapis.com/css?family=Archivo+Black&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="style.css">
  
  </head>
  <body onload="loader()">  
    <div id="loader">
      <h1>This website needs permission to use your location.<br>Please enable geolocation tracking. Thank you!</h1>

      <div class="spin"></div>

    </div>
    <div class="info" onclick="showTxt()"><span class="glyphicon">&#x2a;</span></div> 
    <div id="info-txt">
      <p class="txt">This website shows real time sunrise, sunset and day length time. 
       <br><br><strong>What exactly are the SUNRISE & SUNSET?</strong><br>
        It's important to note that both sunrise and sunset are 'instants'. 
        The time range during which the day becomes night or vice versa is called twilight.
        The sunrise is the exact instant at which the upper edge of the Sun becomes visible over the eastern horizon, 
        in the morning. It's also called sun up.With sunset we refer to the instant when the trailing edge of the 
        Sun stops being visible and disappears below the western horizon in the evening.<br>
        <br> <strong>What is DAYLENGTH?</strong> <br>
        As you may have noticed, daylength or length of daytime varies over the year. 
        In the north hemisphere, summer days are longer while winter days are shorter 
        and dusk happens very early. Daylength also changes depending on latitude and, 
        during winter, the higher the latitude, the shorter the days.<br>
        <br> <strong>API</strong> <br>
        <a href="https://cloud.google.com/maps-platform/?utm_source=google&utm_medium=cpc&utm_campaign=FY18-Q2-global-demandgen-paidsearchonnetworkhouseads-cs-maps_contactsal_saf&utm_content=text-ad-none-none-DEV_c-CRE_289918047742-ADGP_Hybrid+%7C+AW+SEM+%7C+BKWS+~+Google+Maps-KWID_43700036076725537-kwd-21146301231-userloc_1022762&utm_term=KW_%2Bgoogle%20%2Bmap-ST_%2Bgoogle+%2Bmap&gclid=Cj0KCQiAv8PyBRDMARIsAFo4wK28QdxbtwH5Si5yeEk0fAMxBSyX02_HUUk4vALytCZbtfWQb61lf5gaAtyCEALw_wcB">Google Map API</a><br>
        <a href="https://ipgeolocation.io/">IP geolocation</a>
      </p>
    </div> 

    <header>    
      <div id="location"></div>
      <div class="input-container">
        <input type="text"  placeholder="Search" onkeypress="getVal()" />
      </div>
    </header>
    <div class = "vertical">
      <div id="length"></div>
      <div class = "innerv"></div> 
      <div id="date"></div>
    </div> 

    <div class = "horizontal">
      <div class="wrap-center">
        <div id="sunrise"></div>
        <div class = "inner"></div> 
        <div id="sunset"></div> 
      </div>
    </div> 


    <div id="sunriseAnother"></div>
     <div id="pano"></div> 
     <div id="sunsetAnother"></div>
 
<!-- <script>
let mykey = config.MY_KEY;
</script> -->
  <script async defer
    src="https://maps.googleapis.com/maps/api/js?key=${googleKey}&callback=initialize">

    </script>
  <script src="scripts.js"></script>
  </body>
</html>
  `;
}
module.exports = renderIndex;
