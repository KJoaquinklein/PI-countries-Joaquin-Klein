import { useState } from "react";

const usePaginated = (countries) => {
    const itemsPage = 10;
    const [pageNum, setPageNum] = useState(0);
    const [orderAlpha, setOrderAlpha] = useState(false);
    const [orderPop, setOrderPop] = useState(0);

    const startIndex = pageNum * itemsPage;
    const endIndex = startIndex + itemsPage;

    //! -- ORDENAMIENTOS ↓ -------------------------------------

    const sortAlphaCounties = () => {
        if (orderAlpha) {
            return [...countries].sort((a, b) => {
                if (a.name < b.name) {
                    return -1;
                }
                if (a.name > b.name) {
                    return 1;
                }
                return 0;
            });
        } else {
            return [...countries];
        }
    };

    const sortPopCounties = () => {
        if (orderPop === 1) {
            return [...countries].sort((a, b) => {
                if (a.population < b.population) {
                    return -1;
                }
                if (a.population > b.population) {
                    return 1;
                }
                return 0;
            });
        } else if (orderPop === 2) {
            return [...countries].sort((a, b) => {
                if (a.population > b.population) {
                    return -1;
                }
                if (a.population < b.population) {
                    return 1;
                }
                return 0;
            });
        } else {
            return [...countries];
        }
    };

    let orderCountries = [...countries];
    if (orderAlpha) orderCountries = sortAlphaCounties();
    if (orderPop) orderCountries = sortPopCounties();

    const items = orderCountries.slice(startIndex, endIndex);

    //! -- ORDENAMIENTOS ↑ -------------------------------------

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
    };
};

export default usePaginated;
