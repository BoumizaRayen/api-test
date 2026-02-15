require("dotenv").config();

const API_KEY = process.env.OPENWEATHER_API_KEY;
if (!API_KEY) {
  console.error("Erreur : OPENWEATHER_API_KEY manquante dans .env");
  process.exit(1);
}

const lat = 35.8256;
const lon = 10.6084;

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=fr`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log("Description :", data.weather[0].description);
    console.log("Temperature :", data.main.temp, "degC");
    console.log("Humidite :", data.main.humidity, "%");
  })
  .catch((err) => console.error("Erreur :", err.message));
