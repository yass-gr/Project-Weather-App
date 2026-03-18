import './styles.css'

// DOM Elements (prefixed with el to avoid conflicts)
const elSearchBtn = document.querySelector('[data-btn]')
const elForm = document.querySelector('.search-form')
const elSearchInput = document.querySelector('[data-search]');
const elCityName = document.querySelector('[data-city]');
const elCityDesc = document.querySelector('.city-desc');
const elUnitButtons = document.querySelectorAll('[data-unit]');
const elTemp = document.querySelector('[data-temp]');
const elCurrentCondition = document.querySelector('.current-condition');
const elCurrentDetail = document.querySelector('.current-detail');
const elHourItems = document.querySelectorAll('[data-hour]');
const elFeelsLike = document.querySelector('[data-feels-like]');
const elHumidity = document.querySelector('[data-humidity]');
const elWindSpeed = document.querySelector('[data-wind]');
const elUvIndex = document.querySelector('[data-uv]');
const elWeeklyItems = document.querySelectorAll('[data-day-index]');




elForm.addEventListener("submit", (e) => {
  e.preventDefault();
});

elSearchBtn.addEventListener('click', () => update())

async function update(){
    let inputTxt = elSearchInput.value.toLowerCase()
    let weatherData =  await getWeatherData(inputTxt)
    updateUI(weatherData)
}

//getting data from the api
async function getWeatherData(Cname){
    try{
        let data = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${Cname}?unitGroup=metric&include=hours&key=SAB3LYXQ2QYZXCMPXJ6GENDW9&contentType=json`)
    let d = await data.json()
   

    // Current weather
    const cityName = d.address
    const currTemp = d.days[0].temp
    const condition = d.days[0].conditions
    const description = d.days[0].description

    // Hourly temps
    const h9 = d.days[0].hours[9].temp
    const h12 = d.days[0].hours[12].temp
    const h15 = d.days[0].hours[15].temp
    const h18 = d.days[0].hours[18].temp
    const h21 = d.days[0].hours[21].temp
    const h0 = d.days[0].hours[0].temp
    const h3 = d.days[0].hours[3].temp

    // Air conditions
    const feelsLike = d.days[0].feelslike
    const humidity = d.days[0].humidity
    const windSpeed = d.days[0].windspeed
    const uvIndex = d.days[0].uvindex

    // 7 days forecast
    const today = {
        tempMax: d.days[0].tempmax,
        tempMin: d.days[0].tempmin,
        datetime: d.days[0].datetime,
    }
    const day2 = {
        tempMax: d.days[1].tempmax,
        tempMin: d.days[1].tempmin,
        datetime: d.days[1].datetime,
    }
    const day3 = {
        tempMax: d.days[2].tempmax,
        tempMin: d.days[2].tempmin,
        datetime: d.days[2].datetime,
    }
    const day4 = {
        tempMax: d.days[3].tempmax,
        tempMin: d.days[3].tempmin,
        datetime: d.days[3].datetime,
    }
    const day5 = {
        tempMax: d.days[4].tempmax,
        tempMin: d.days[4].tempmin,
        datetime: d.days[4].datetime,
    }
    const day6 = {
        tempMax: d.days[5].tempmax,
        tempMin: d.days[5].tempmin,
        datetime: d.days[5].datetime,
    }
    const day7 = {
        tempMax: d.days[6].tempmax,
        tempMin: d.days[6].tempmin,
        datetime: d.days[6].datetime,
    }

    return   {
        cityName,
        currTemp,
        condition,
        description,
        h9,
        h12,
        h15,
        h18,
        h21,
        h0,
        h3,
        feelsLike,
        humidity,
        windSpeed,
        uvIndex,
        today,
        day2,
        day3,
        day4,
        day5,
        day6,
        day7,
    }
    }
    catch (err){
        console.log(err);
        
    }
}

function updateUI(data){
 elCityName.textContent = data.cityName.toUpperCase()
 elCurrentCondition.textContent = data.condition
 elCurrentDetail.textContent = data.description
 elTemp.textContent = data.currTemp


 elHumidity.textContent = data.humidity
 elFeelsLike.textContent  = data.feelsLike
 elWindSpeed.textContent  = data.windSpeed
 elUvIndex.textContent  = data.uvIndex



}
