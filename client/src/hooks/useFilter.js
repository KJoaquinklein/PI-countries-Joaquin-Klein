import { useDispatch, useSelector } from "react-redux";
import { getFilterActivities, getFilterContinent } from "../redux/actions";

const useFilter = () => {
    const dispatch = useDispatch();

    const activities = useSelector((state) => state.activities);

    const handlerActivities = (event) => {
        const acitivityName = event.target.value;
        if (acitivityName === "All") {
            dispatch(getFilterActivities(acitivityName));
        }
        activities.map((act) => {
            if (acitivityName === act.name) {
                dispatch(getFilterActivities(act));
            }
        });
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
