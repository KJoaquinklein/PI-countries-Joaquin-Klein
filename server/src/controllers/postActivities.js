const { Activity } = require("../db");

const postActivities = async (req, res) => {
    const { name, difficulty, duration, season, countryId } = req.body;
    try {
        if (!Array.isArray(countryId)) {
            return res
                .status(404)
                .send(
                    "Information error: countriesId must be an array of countries"
                );
        }
        const newActivity = await Activity.create({
            name,
            difficulty,
            duration,
            season,
        });
        newActivity.addCountries(countryId);
        res.status(200).send("The activity was created correctly");
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = postActivities;
