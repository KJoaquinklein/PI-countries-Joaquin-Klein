import axios from "axios";

export const getCountries = () => {
    return async (dispatch) => {
        const result = await axios.get("http://localhost:3001/countries");
        return dispatch({
            type: "GET_COUNTRIES",
            payload: result.data,
        });
    };
};

export const getFilterContinent = (continent) => {
    return {
        type: "GET_FILTER_CONTINENT",
        payload: continent,
    };
};

export const getCountryByName = (name) => {
    return async (dispatch) => {
        const result = await axios.get(`http://localhost:3001/countries/name?name=${name}`);
        return dispatch({
            type: "GET_COUNTRY_BY_NAME",
            payload: result.data,
        });
    };
};

export const getActivities = () => {
    return async (dispatch) => {
        const result = await axios.get("http://localhost:3001/activities");
        return dispatch({
            type: "GET_ACTIVITIES",
            payload: result.data,
        });
    };
};

export const getFilterActivities = (actName) => {
    return {
        type: "GET_FILTER_ACTIVETIES",
        payload: actName,
    };
};
