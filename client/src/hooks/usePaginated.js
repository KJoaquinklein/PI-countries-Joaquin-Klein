import { useState } from "react";
import useSorted from "./useSorted";

const usePaginated = (countries) => {
    const itemsPage = 10;
    const [pageNum, setPageNum] = useState(0);

    const startIndex = pageNum * itemsPage;
    const endIndex = startIndex + itemsPage;

    const {
        orderAlpha,
        setOrderAlpha,
        orderPop,
        setOrderPop,
        sortAlphaCounties,
        sortPopCounties,
        handlerOrderAlpha,
        handlerOrderPop,
    } = useSorted(countries, setPageNum);

    let orderCountries = [...countries];
    let validationOrder;
    if (orderAlpha) {
        orderCountries = sortAlphaCounties();
        validationOrder = "alpha";
    }
    if (orderPop) {
        orderCountries = sortPopCounties();
        validationOrder = "pop";
    }

    const items = orderCountries.slice(startIndex, endIndex);

    //! -- HANDLERS ↓ ------------------------------------------

    const handlerNext = () => {
        const totalCountries = countries.length;
        const nextPage = pageNum + 1;
        if (nextPage * itemsPage < totalCountries) {
            setPageNum(nextPage);
        }
    };

    const handlerPrev = () => {
        const prevPage = pageNum - 1;
        if (prevPage >= 0) {
            setPageNum(prevPage);
        }
    };

    //! -- HANDLERS ↑ ------------------------------------------

    return {
        items,
        handlerNext,
        handlerPrev,
        handlerOrderAlpha,
        handlerOrderPop,
        validationOrder,
        pageNum,
    };
};

export default usePaginated;
