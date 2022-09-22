$(document).ready(function (){

 var apiKey = "c10049a3acdd6edc8eb4500188f2fafd"


 function addCity(newCity) {
      var newCityEl = $("<button>").addClass("list-group-item")
      newCityEl.text(newCity);
     $("#city-list").append(newCityEl);
    }

    function currentWeather(city) {

      var ajaxInfo = {
         URL: "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey + "&units=metric&appid=",
         method: "GET"
        };

        $.ajax(ajaxInfo).then(function(response) {
         var currentDate = new Date();
         var dateString = "(" + (currentDate.getDate() + 1) + "/"
         + currentDate.getMonth() + "/"
         + currentDate.getFullYear() + ")";
         var forecastHeader = response.name + " " + dateString;
         var iconURL = "http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png";
         var temperature = response.main.temp + "°C";
         var humidity = response.main.humidity = "%";
         var windSpeed = response.main.wind.speed = "km/h";
         $("#forecast-city-header").text(forecastHeader);
         $("#current-icon").attr("src", iconURL);
         $("#temperature").text(temperature);
         $("#humidity").text(humidity);
         $("#wind-speed").text(windSpeed);
        });
    }


   function fiveDayForecast(city) {
     var ajaxInfo = { URL: "https://api.openweathermap.org/data/2.5/weather?q=" + city + apiKey + "&units=metric&appid=",
     method: "GET"
     };

        $.ajax(ajaxInfo).then(function (response) {
          var currentDate = new Date();
            for (var day = 1; day < 6; day++) {
             var dateString = "(" + (currentDate.getDate() + 1) + "/"
                + currentDate.getMonth() + "/"
                + currentDate.getFullYear() + ")";
             $("#" + day + "-day-date").text(dateString);
             var index = 2 + ((day - 1) * 8);
             var dayForecast = response.list[index];
             var iconURL = "http://openweathermap.org/img/wn/" + response.weather[0].icon + ".png";
             $("#" + day + "-day-icon").attr("src", iconURL);
             var temp = dayForecast.main.temp + "°C";
             $("#" + day + "-day-temp").text(temp);
             var humidity = dayForecast.main.humidity + "%";
             $("#" + day + "-day-humidity").text(humidity);
            }
        });
    }

  $("#search-submit").on("click", function (event) {
     event.preventDefault();
     var userInput = $("#label").val();
     addCity(userInput);
    });

    $("#city-list").on("click", "button", function() {
        var cityButton = $(this);
        var city = cityButton.text();
        currentWeather(city);
        fiveDayForecast(city);
    });
});    



