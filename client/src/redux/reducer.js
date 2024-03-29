const initialState = {
    countries: [],
    countriesCopy: [],
    countriesCopyFilter: [],
    activities: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_COUNTRIES":
            return {
                ...state,
                countries: action.payload,
                countriesCopy: action.payload,
            };

        case "GET_FILTER_CONTINENT":
            if (action.payload === "All") {
                return { ...state, countriesCopy: state.countries };
            } else {
                return {
                    ...state,
                    countriesCopy: [...state.countries].filter((country) => country.continent.includes(action.payload)),
                    filterContinent: action.payload,
                };
            }

        case "GET_COUNTRY_BY_NAME":
            return { ...state, countriesCopy: action.payload };

        case "GET_ACTIVITIES":
            return { ...state, activities: action.payload };

        case "GET_FILTER_ACTIVETIES":
            if (action.payload === "All") {
                return { ...state, countriesCopy: state.countries };
            } else {
                return {
                    ...state,
                    countriesCopy: action.payload,
                };
            }

        case "FILTER_KM":
            return {
                ...state,
                countriesCopy: [...state.countries].filter((country) => {
                    return country.area >= 900000;
                }),
            };

        default:
            return { ...state };
    }
};

export default reducer;
