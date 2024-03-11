import { useState } from "react";
import useSorted from "./useSorted";

const usePaginated = (countries) => {
    const itemsPage = 10;
    const [pageNum, setPageNum] = useState(0);

    const startIndex = pageNum * itemsPage;
    const endIndex = startIndex + itemsPage;

    const { orderAlpha, setOrderAlpha, orderPop, setOrderPop, sortAlphaCounties, sortPopCounties } =
        useSorted(countries);

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

    const handlerOrderAlpha = () => {
        if (orderAlpha) {
            setOrderAlpha(false);
            setPageNum(0);
        } else {
            setOrderAlpha(true);
            setPageNum(0);
        }
    };

    const handlerOrderPop = () => {
        if (orderPop === 0) {
            setOrderPop(1);
            setPageNum(0);
        } else if (orderPop === 1) {
            setOrderPop(2);
            setPageNum(0);
        } else if (orderPop === 2) {
            setOrderPop(0);
            setPageNum(0);
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
