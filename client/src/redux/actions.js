import axios from "axios";

export const getCountries = () => {
    return async (dispatch) => {
        try {
            const result = await axios.get("http://localhost:3001/countries");
            return dispatch({
                type: "GET_COUNTRIES",
                payload: result.data,
            });
        } catch (error) {
            console.log(error);
        }
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
        try {
            const result = await axios.get(`http://localhost:3001/countries/name?name=${name}`);
            return dispatch({
                type: "GET_COUNTRY_BY_NAME",
                payload: result.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getActivities = () => {
    return async (dispatch) => {
        try {
            const result = await axios.get("http://localhost:3001/activities");
            return dispatch({
                type: "GET_ACTIVITIES",
                payload: result.data,
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const getFilterActivities = (countriesAct) => {
    return {
        type: "GET_FILTER_ACTIVETIES",
        payload: countriesAct,
    };
};

export const getFilterKm = () => {
    return {
        type: "FILTER_KM",
    };
};
