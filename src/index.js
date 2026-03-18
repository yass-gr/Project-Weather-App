import './styles.css'
import { getWeatherIcon, getMainWeatherIcon } from './icons.js'

const elSearchBtn = document.querySelector('[data-btn]')
const elForm = document.querySelector('.search-form')
const elSearchInput = document.querySelector('[data-search]')
const elInputError = document.getElementById('inputError')
const elCityName = document.querySelector('[data-city]')
const elCurrentMain = document.querySelector('.current-main')
const elHourItems = document.querySelectorAll('[data-hour]')
const elFeelsLike = document.querySelector('[data-feels-like]')
const elHumidity = document.querySelector('[data-humidity]')
const elWindSpeed = document.querySelector('[data-wind]')
const elUvIndex = document.querySelector('[data-uv]')
const elWeeklyItems = document.querySelectorAll('[data-day]')
const elLoading = document.getElementById('loading')
const elErrorOverlay = document.getElementById('errorOverlay')
const elErrorClose = document.getElementById('errorClose')
const elErrorMessage = document.getElementById('errorMessage')
const elUnitBtnF = document.querySelector('[data-f]')
const elUnitBtnC = document.querySelector('[data-c]')

let unit = 'metric'
let currentCity
const defaultCity = 'paris'

elForm.addEventListener('submit', (e) => {
  e.preventDefault()
  update()
})

elSearchBtn.addEventListener('click', () => update())

elSearchInput.addEventListener('input', () => {
  elSearchInput.classList.remove('error')
  elInputError.classList.remove('show')
})

elErrorClose.addEventListener('click', () => {
  elErrorOverlay.classList.remove('active')
})

async function update() {
  if (!elSearchInput.value.trim()) {
    elSearchInput.classList.add('error')
    elInputError.classList.add('show')
    return
  }
  elLoading.classList.add('active')
  const city = elSearchInput.value.toLowerCase() || defaultCity
  currentCity = city
  const weatherData = await getWeatherData(city)
  elLoading.classList.remove('active')
  if (weatherData) updateUI(weatherData)
}

async function getWeatherData(Cname) {
  try {
    const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${Cname}?unitGroup=${unit}&include=hours&key=SAB3LYXQ2QYZXCMPXJ6GENDW9&contentType=json`)
    
    if (!response.ok) {
      elErrorMessage.textContent = response.status === 400 
        ? `City "${Cname}" not found. Please check the spelling.`
        : `Error: ${response.status} - Something went wrong.`
      elErrorOverlay.classList.add('active')
      return null
    }
    
    const d = await response.json()
    
    return {
      cityName: d.address,
      currTemp: d.days[0].temp,
      condition: d.days[0].conditions,
      description: d.days[0].description,
      h0: d.days[0].hours[0].temp,
      h3: d.days[0].hours[3].temp,
      h9: d.days[0].hours[9].temp,
      h12: d.days[0].hours[12].temp,
      h15: d.days[0].hours[15].temp,
      h18: d.days[0].hours[18].temp,
      h21: d.days[0].hours[21].temp,
      feelsLike: d.days[0].feelslike,
      humidity: d.days[0].humidity,
      windSpeed: d.days[0].windspeed,
      uvIndex: d.days[0].uvindex,
      today: { tempMax: d.days[0].tempmax, tempMin: d.days[0].tempmin, datetime: d.days[0].datetime, icon: d.days[0].icon },
      day2: { tempMax: d.days[1].tempmax, tempMin: d.days[1].tempmin, datetime: d.days[1].datetime, icon: d.days[1].icon },
      day3: { tempMax: d.days[2].tempmax, tempMin: d.days[2].tempmin, datetime: d.days[2].datetime, icon: d.days[2].icon },
      day4: { tempMax: d.days[3].tempmax, tempMin: d.days[3].tempmin, datetime: d.days[3].datetime, icon: d.days[3].icon },
      day5: { tempMax: d.days[4].tempmax, tempMin: d.days[4].tempmin, datetime: d.days[4].datetime, icon: d.days[4].icon },
      day6: { tempMax: d.days[5].tempmax, tempMin: d.days[5].tempmin, datetime: d.days[5].datetime, icon: d.days[5].icon },
      day7: { tempMax: d.days[6].tempmax, tempMin: d.days[6].tempmin, datetime: d.days[6].datetime, icon: d.days[6].icon },
    }
  } catch (err) {
    console.log(err)
    elErrorMessage.textContent = 'Network error. Please check your connection.'
    elErrorOverlay.classList.add('active')
    return null
  }
}

function updateUI(data) {
  elCityName.textContent = data.cityName.toUpperCase()
  elCurrentMain.innerHTML = `
    <div class="temp-large" data-temp>${data.currTemp}°</div>
    <div class="main-icn">${getMainWeatherIcon(data.today.icon)}</div>
    <div class="current-info">
      <span class="current-condition">${data.condition}</span>
      <span class="current-detail">${data.description}</span>
    </div>
  `
  
  elHumidity.textContent = data.humidity
  elFeelsLike.textContent = data.feelsLike
  elWindSpeed.textContent = data.windSpeed
  elUvIndex.textContent = data.uvIndex
  
  elHourItems.forEach(h => h.children[2].textContent = data[h.dataset.hour] + '°')
  
  elWeeklyItems.forEach(d => {
    const date = new Date(data[d.dataset.day].datetime)
    const day = date.toLocaleDateString('en-US', { weekday: 'short' })
    d.children[0].textContent = d.dataset.day === 'today' ? 'Today' : day
    d.children[2].children[0].textContent = data[d.dataset.day].tempMax + '°'
    d.children[2].children[1].textContent = data[d.dataset.day].tempMin + '°'
    d.children[1].outerHTML = getWeatherIcon(data[d.dataset.day].icon)
  })
}

elUnitBtnC.addEventListener('click', () => {
  elUnitBtnC.classList.add('active')
  elUnitBtnF.classList.remove('active')
  unit = 'metric'
  update()
})

elUnitBtnF.addEventListener('click', () => {
  elUnitBtnF.classList.add('active')
  elUnitBtnC.classList.remove('active')
  unit = 'us'
  update()
})

elLoading.classList.add('active')
getWeatherData(defaultCity).then(weatherData => {
  elLoading.classList.remove('active')
  if (weatherData) updateUI(weatherData)
})
