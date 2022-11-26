var today = new Date();
console.log(today.getDay())
switch(today.getDay()) {
  case 0:
    document.getElementById("DayOfWeek").innerHTML = "S U N D A Y"
    break;
  case 1:
    document.getElementById("DayOfWeek").innerHTML = "M O N D A Y"
    break;
    case 2:
    document.getElementById("DayOfWeek").innerHTML = "T U E S D A Y"
    break;
   case 3:
    document.getElementById("DayOfWeek").innerHTML = "W E D N E S D A Y"
    break;
   case 4:
    document.getElementById("DayOfWeek").innerHTML = "T H U R S D A Y"
    break;
  case 5:
    document.getElementById("DayOfWeek").innerHTML = "F R I D A Y"
    break;
  default:
    document.getElementById("DayOfWeek").innerHTML = "S A T U R D A Y"
}
var apikey = "YOUR API";
fetch("https://api.openweathermap.org/data/2.5/weather?lat=52.1433306&lon=5.5581492&units=metric&appid=" + apikey).then(function(response) {
  return response.json();
}).then(function(data) {
    var weatherlistinfo = data["main"]["temp_min"] + "°C / " + data["main"]["temp_max"] + "°C";
  document.getElementById("WeatherList").innerHTML = weatherlistinfo;
});

