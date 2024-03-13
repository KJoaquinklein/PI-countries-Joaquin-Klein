import { useState } from "react";

const useSorted = (countries, setPageNum) => {
    const [orderAlpha, setOrderAlpha] = useState(false);
    const [orderPop, setOrderPop] = useState(0);

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

    return {
        orderAlpha,
        setOrderAlpha,
        orderPop,
        setOrderPop,
        sortAlphaCounties,
        sortPopCounties,
        handlerOrderAlpha,
        handlerOrderPop,
    };
};

export default useSorted;
