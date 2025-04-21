const apikey = "f9c68136bc16b783068810325a9a4879";
// Mianwali&appid=
const url = "https://api.openweathermap.org/data/2.5/weather?q=";
const searchBox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");
const weathericon = document.querySelector(".weather-icon");
async function checkWeather(city) {
  try {
    // Correct the URL by removing spaces around '='
    const response = await fetch(url +city+ `&APPID=${apikey}&units=metric`);
    console.log(response);
    const data = await response.json();
    console.log(data);
    
    // Make sure an element with class "cityName" exists in your HTML
    document.querySelector(".cityName").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity +"%";
    document.querySelector(".wind").innerHTML = data.wind.speed +" km/h ";
    if(data.weather[0].main == 'Clouds'){
      weathericon.src = "images/clouds.png";
    }
    else if(data.weather[0].main=='Clear'){
      weathericon.src = "images/Clear.png";
    }
    else if(data.weather[0].main=='rain'){
      weathericon.src = "images/rain.png";
    }
    ;
  } catch (e) {
    console.log(e + ' error');
  }
}
searchbtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value);
})
// checkWeather();
