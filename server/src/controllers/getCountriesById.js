const { Country, Activity, Country_Activity } = require("../db");

const getCountriesById = async (req, res) => {
    const { id } = req.params;
    try {
        const findById = await Country.findByPk(id, {
            include: [
                {
                    model: Activity,
                    through: Country_Activity,
                },
            ],
        });
        if (!findById) {
            return res.status(404).send(`No se encontro pais con el id ${id}`);
        }
        res.status(200).json(findById);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getCountriesById;

//!---FALTA DE HACER---------
//!   -VERIFICAR SI TRAE LAS ACTIVIDADES
