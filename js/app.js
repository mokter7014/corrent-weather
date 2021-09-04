const API_KEYS = `2fbebce5b3c55f535a1c37d53fedb28d`;
const searchTemperature = () => {
    const cityNameField = document.getElementById('city-name');
    const cityName = cityNameField.value
    cityNameField.value = ""
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEYS}&units=metric`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayCity(data));

}




const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayCity = temperature => {
    setInnerText("city", temperature.name)
    setInnerText("temperature", temperature.main.temp)
    setInnerText("condition", temperature.weather[0].main)
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`
    const imgIcon = document.getElementById("weather-icon")
    imgIcon.setAttribute("ser", url)
    console.log(temperature)
    console.log(url)
}