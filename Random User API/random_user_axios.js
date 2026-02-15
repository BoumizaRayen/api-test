const axios = require('axios');
const url = 'https://randomuser.me/api/';

axios
    .get(url)
    .then((res) => {
        const user = res.data.results[0];
        console.log("Nom :", `${user.name.first} ${user.name.last}`);
        console.log("Email :", user.email);
        console.log("Pays :", user.location.country);
    })
    .catch((err) => {
        console.error("Erreur :", err.message);
    });