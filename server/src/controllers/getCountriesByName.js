const { Country } = require("../db");
const { Op } = require("sequelize");

const getCountriesByName = async (req, res) => {
    const { name } = req.query;
    try {
        const findeByName = await Country.findAll({
            where: {
                nombre: {
                    [Op.iLike]: name,
                },
            },
        });
        if (findeByName) {
            return res.status(404).send(`No se ha encontrado el país ${name}`);
        }
        res.status(200).json(findeByName);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getCountriesByName;
