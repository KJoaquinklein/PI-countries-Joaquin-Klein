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
        const result = await axios.get(
            `http://localhost:3001/countries/name?name=${name}`
        );
        return dispatch({
            type: "GET_COUNTRY_BY_NAME",
            payload: result.data,
        });
    };
};

//! probar hacer sin redux
// export const getCountryByID = (id) => {
//     return async (dispatch) => {
//         const result = await axios.get(
//             `http://localhost:3001/countries/country/${id}`
//         );
//         return dispatch({
//             type: "GET_BY_ID",
//             payload: result.data,
//         });
//     };
// };

export const getActivities = () => {
    return async (dispatch) => {
        const result = await axios.get("http://localhost:3001/activities");
        return dispatch({
            type: "GET_ACTIVITIES",
            payload: result.data,
        });
    };
};

//! probar hacer sin redux
// export const addActivity = (activity) => {
//     return async (dispatch) => {
//         const result = await axios.post(
//             "http://localhost:3001/activities",
//             activity
//         );
//         return dispatch({
//             type: "POST_ACTIVITIES",
//             payload: result.data,
//         });
//     };
// };
