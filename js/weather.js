
var weather = "";
var temp = 0;
var location = "";

if ("geolocation" in navigator) {

    navigator.geolocation.getCurrentPosition(function getLoc(pos) {
        var lat = pos.coords.latitude;
        var long = pos.coords.longitude;
        var yourLoc = "https://fcc-weather-api.glitch.me/api/current?lon="+long+"&lat="+lat+"";

    })
}