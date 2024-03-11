import { useSelector } from "react-redux";
import style from "./filters.module.css";

const Filters = (props) => {
    const activities = useSelector((state) => state.activities);

    const { handlerFilter, handlerActivities } = props;

    const activitiesNoRepeat = [];
    const activitiesCopy = [];
    activities.map((act) => {
        if (!activitiesNoRepeat.includes(act.name)) {
            activitiesNoRepeat.push(act.name);
            activitiesCopy.push(act);
        }
    });

    return (
        <>
            <p className={style.optionTitle}>Filtrar por:</p>
            <div>
                <p className={style.subtitle}>Contiente</p>
                <select className={style.options} onChange={handlerFilter}>
                    <option value="All">Todos</option>
                    <option value="Africa">Africa</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            <div>
                <p className={style.subtitle}>Actividad turistica</p>
                <select className={style.options} onChange={handlerActivities}>
                    <option value="All">Todos</option>
                    {activitiesCopy.map((act) => (
                        <option key={act.id} value={act.name}>
                            {act.name}
                        </option>
                    ))}
                </select>
            </div>
        </>
    );
};

export default Filters;
