const { Country, Activity, Country_Activity } = require("../db");

const getActivities = async (req, res) => {
    try {
        const findActivities = await Activity.findAll({
            include: [
                {
                    model: Country,
                    through: Country_Activity,
                },
            ],
        });
        res.status(200).json(findActivities);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = getActivities;
