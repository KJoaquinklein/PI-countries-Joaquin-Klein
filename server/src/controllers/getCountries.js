const { Country } = require("../db");

const getCountries = async (req, res) => {
    try {
        const findAllCountries = await Country.findAll();
        res.status(200).json(findAllCountries);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getCountries;
