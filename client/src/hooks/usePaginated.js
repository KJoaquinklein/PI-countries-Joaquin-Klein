import { useState } from "react";
import { useSelector } from "react-redux";

const usePaginated = () => {
    const countries = useSelector((state) => state.countries);

    const itemsPage = 10;
    const [dataCountries, setDataCountries] = useState(countries);
    const [items, setItems] = useState([...countries].splice(0, itemsPage));
    const [pageNum, sePageNum] = useState(0);

    const handlerNext = () => {
        const totalCountries = dataCountries.length;
        const nextPage = pageNum + 1;
        const firstIndex = nextPage * itemsPage;
        if (firstIndex === totalCountries) return;
        setItems([...dataCountries].splice(firstIndex, itemsPage));
        sePageNum(nextPage);
    };

    const handlerPrev = () => {
        const prevPage = pageNum - 1;
        if (prevPage < 0) return;
        const firstIndex = prevPage * itemsPage;
        setItems([...dataCountries].splice(firstIndex, itemsPage));
        sePageNum(prevPage);
    };

    return {
        items,
        handlerPrev,
        handlerNext,
        countries,
    };
};

export default usePaginated;
