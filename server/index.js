const axios = require("axios");
const server = require("./src/server");
const { conn } = require("./src/db.js");
const { Country } = require("./src/db.js");
const PORT = 3001;

conn.sync({ force: true })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
            // const response = await axios("http://localhost:5000/countries");
            // if (response) {
            //     countries = response;
            // }
            getCountriesFromApi();
        });
    })
    .catch((error) => console.error(error));

const getCountriesFromApi = async () => {
    const response = await axios("http://localhost:5000/countries");
    if (response) {
        response.data.map((country) => {
            createCountyInTable(country);
        });
    }
};

//!VER MANEJO DE ERRORES

const createCountyInTable = async (country) => {
    try {
        const newCountry = await Country.create({
            id: country.cca3,
            name: country.name.common,
            img: country.flags.svg,
            continent: country.continents,
            capital: country.capital,
            subregion: country.subregion,
            area: country.area,
            population: country.population,
        });
        return newCountry;
    } catch (error) {
        return { error: error.message };
    }
};
