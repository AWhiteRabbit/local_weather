
//button to get geo location.
$(".getWeather").click(function () {
    console.log("clicky");
    //check for geolocaion in browser
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (pos) {
            //get latitude and longitude
            var lat = pos.coords.latitude;
            var long = pos.coords.longitude;
            var fccapi = "https://fcc-weather-api.glitch.me/api/current?lon="+long+"&lat="+lat+"";
            console.log(fccapi);

        })
    } else {
        console.log("nope wut why?!?");
    }
});