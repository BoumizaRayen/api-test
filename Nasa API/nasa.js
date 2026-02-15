require("dotenv").config();

const START_DATE = "2026-02-10";
const END_DATE = "2026-02-15";
const API_KEY = process.env.NASA_API_KEY || "DEMO_KEY";

const url = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${START_DATE}&end_date=${END_DATE}&api_key=${API_KEY}`;

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    console.log("Periode :", `${START_DATE} -> ${END_DATE}`);
    console.log("Nombre total d'objets :", data.element_count);

    const firstDate = Object.keys(data.near_earth_objects || {})[0];
    if (!firstDate || !data.near_earth_objects[firstDate]?.length) {
      console.log("Aucun objet trouve pour cette periode.");
      return;
    }

    const neo = data.near_earth_objects[firstDate][0];
    console.log("Date :", firstDate);
    console.log("Nom :", neo.name);
    console.log(
      "Danger potentiel :",
      neo.is_potentially_hazardous_asteroid ? "Oui" : "Non"
    );
  })
  .catch((err) => {
    console.error("Erreur :", err.message);
  });
