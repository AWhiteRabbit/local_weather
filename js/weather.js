
//button to get geo location.
$(".getWeather").click(function () {
    console.log("clicky");
    //check for geolocaion in browser
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (pos) {
            //get latitude and longitude
            var lat = pos.coords.latitude;
            var long = pos.coords.longitude;
            var fccApiJson = "https://fcc-weather-api.glitch.me/api/current?lon="+long+"&lat="+lat+"";
            // get JSON data from fccapi and use it
            $.getJSON (fccApiJson, function (data) {
                var temperature = data.main.temp;
                var temperatureMin = data.main.temp_min;
                var temperatureMax = data.main.temp_max;
                $(".temp").html("temperature "+temperature);
                $(".temp").append("<span>Min "+temperatureMin+"</span>");
                $(".temp").append("<span>Max "+temperatureMax+"</span>");
            })
        })
    } else {
        console.log("nope wut why?!?");
    }
});