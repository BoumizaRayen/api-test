# API Tests 

Ce projet contient des exemples d'appels d'API en JavaScript avec deux approches:
- `fetch` (natif)
- `axios` (bibliotheque externe)

## APIs utilisees

- OpenWeatherMap: https://openweathermap.org/api
- NASA NEO Feed: https://api.nasa.gov/
- Open Library Search: https://openlibrary.org/developers/api
- Random User: https://randomuser.me/api/

## Prerequis

- Node.js installe
- npm installe

## Installation

```bash
npm install
```

## Configuration des cles API

1. Remplir les valeurs:

```env
NASA_API_KEY=ta_cle_nasa
OPENWEATHER_API_KEY=ta_cle_openweather
```

## Scripts disponibles

### Weather API

- `Weather API/weather.js` (fetch)
- `Weather API/weather_axios.js` (axios)

```bash
node "Weather API/weather.js"
node "Weather API/weather_axios.js"
```

### NASA API

- `Nasa API/nasa.js` (fetch)
- `Nasa API/nasa_axios.js` (axios)

```bash
node "Nasa API/nasa.js"
node "Nasa API/nasa_axios.js"
```

### Open Library API

- `Open Library API/openlibrary.js` (fetch)
- `Open Library API/openlibrary_axios.js` (axios)

```bash
node "Open Library API/openlibrary.js"
node "Open Library API/openlibrary_axios.js"
```

### Random User API

- `Random User API/random_user.js` (fetch)
- `Random User API/random_user_axios.js` (axios)

```bash
node "Random User API/random_user.js"
node "Random User API/random_user_axios.js"
```

## Notes

- Ne pas versionner le fichier `.env`.
- Les dependances sont dans `package.json`.
- Le verrouillage des versions est dans `package-lock.json`.
