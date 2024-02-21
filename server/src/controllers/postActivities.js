const { Activity } = require("../db");

const postActivities = async (req, res) => {
    const { nombre, dificultad, duracion, temporada, paisesId } = req.body;
    try {
        if (!Array.isArray(paisesId)) {
            return res
                .status(404)
                .send(
                    "Error en la informacion: paisesId debe ser un arreglo de paises"
                );
        }
        const newActivity = await Activity.create({
            nombre,
            dificultad,
            duracion,
            temporada,
        });
        newActivity.addCountries(paisesId);
        res.status(200).send("La actividad se creo correctamente");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = postActivities;
