import { useDispatch, useSelector } from "react-redux";
import { getFilterActivities, getFilterContinent } from "../redux/actions";

const useFilter = () => {
    const dispatch = useDispatch();

    const activities = useSelector((state) => state.activities);

    const handlerActivities = (event) => {
        const acitivityName = event.target.value;

        if (acitivityName === "All") {
            return dispatch(getFilterActivities(acitivityName));
        }

        let actFilterCount = [];
        const countriesAct = [];
        const countriesActNames = [];

        activities.map((act) => {
            if (acitivityName === act.name) {
                actFilterCount = [...actFilterCount, ...act.Countries];
            }
        });

        actFilterCount.map((country) => {
            if (!countriesActNames.includes(country.name)) {
                countriesActNames.push(country.name);
                countriesAct.push(country);
            }
        });

        dispatch(getFilterActivities(countriesAct));
    };

    const handlerFilter = (event) => {
        const continent = event.target.value;
        dispatch(getFilterContinent(continent));
    };

    return {
        handlerActivities,
        handlerFilter,
    };
};

export default useFilter;
