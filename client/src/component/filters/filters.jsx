import { useSelector } from "react-redux";

const Filters = (props) => {
    const activities = useSelector((state) => state.activities);

    const { handlerFilter, handlerActivities } = props;

    return (
        <>
            <div>
                <select onChange={handlerFilter}>
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
                <select onChange={handlerActivities}>
                    <option value="All">Todos</option>
                    {activities.map((act) => (
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
