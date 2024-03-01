import { useDispatch } from "react-redux";
import { useState } from "react";
import { getCountryByName } from "../redux/actions";

const useSearch = () => {
    const dispatch = useDispatch();

    const [searchState, setSearchState] = useState("");

    const handlerChange = (event) => {
        setSearchState(event.target.value);
        dispatch(getCountryByName(event.target.value));
    };

    const handlerClick = () => {
        dispatch(getCountryByName(""));
        setSearchState("");
    };

    return {
        searchState,
        handlerChange,
        handlerClick,
    };
};

export default useSearch;
