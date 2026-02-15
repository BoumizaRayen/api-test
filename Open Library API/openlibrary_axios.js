const axios = require("axios");

const query = "harry potter";
const url = `https://openlibrary.org/search.json?q=${encodeURIComponent(query)}`;

axios
  .get(url)
  .then((res) => {
    const data = res.data;
    console.log("Recherche :", query);
    console.log("Nombre de resultats :", data.numFound);

    if (!data.docs || data.docs.length === 0) {
      console.log("Aucun livre trouve.");
      return;
    }

    const book = data.docs[0];
    console.log("Premier titre :", book.title);
    console.log("Auteur :", (book.author_name && book.author_name[0]) || "Inconnu");
    console.log("Annee :", book.first_publish_year || "Inconnue");
  })
  .catch((err) => {
    console.error("Erreur :", err.message);
  });
