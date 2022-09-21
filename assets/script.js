let autocomplete;

function initAutocomplete() {
    autocomplete = new google.maps.places.Autocomplete(
        document.getElementById('autocomplete'),
        {
            fields: ['place_id', 'geometry', 'name']
        });
    
}
window.initAutocomplete = initAutocomplete;



function addCity(newCitySearch) {
    var newCityEl = $('<button>').addClass("list-group-item")
    newCityEl.text(newCityEl);
    //  this hould append new el to city list
    $("city-list").append(newCityEl);
}

var info = {
    URL: "https://api.openweathermap.org/data/2.5/uvi?lat=+latitude+&lon=+longitude+&appid=c10049a3acdd6edc8eb4500188f2fafd;"
};

$.ajax(info).then(function(response) {
    var temperature = response.main.temp + "°C";
    var humidity = response.main.humidity = "%";
    var windSpeed = response.main.wind.speed = "km/h";
    $("#forecast-city-header").text(forecastHeader);
    $("#temperature").text(temperature);
    $("#humidity").text(humidity);
    $("#wind-speed").text(windSpeed);
});