import { useState } from "react";

const useSorted = (countries) => {
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

    return {
        orderAlpha,
        setOrderAlpha,
        orderPop,
        setOrderPop,
        sortAlphaCounties,
        sortPopCounties,
    };
};

export default useSorted;
