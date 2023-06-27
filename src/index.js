function displayTemperature(response){
    console.log(response.data.main.temp);
}

let apiKey = "31a5ab4293ffcc0ceb714915bd65251f";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Lisbon&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
