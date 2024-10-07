const searchInput = document.getElementById("search_input");
const searchBtn = document.getElementById("search_btn");
const cityName = document.getElementById("mycity");

async function chechWeather(city) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=aa49f28b2153ee91584d15b85a4b0aeb&units=metric`
  );

  const data = await response.json();

  console.log(data);
  cityName.innerHTML = data.name;
  document.getElementById("temp").innerHTML = Math.round(data.main.temp);
  document.getElementById("humidity").innerHTML = data.main.humidity;
  document.getElementById("wind").innerHTML = data.wind.speed;
}
searchBtn.addEventListener("click", () => {
  chechWeather(searchInput.value);
  searchInput.value = "";
});
