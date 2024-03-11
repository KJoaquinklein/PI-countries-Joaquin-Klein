import style from "./orders.module.css";

const Orders = (props) => {
    const { validationOrder, handlerOrderAlpha, handlerOrderPop } = props;

    return (
        <>
            <p className={style.optionTitle}>Ordenar por:</p>
            <button
                className={validationOrder === "alpha" ? style.optionActived : style.sortButton}
                onClick={handlerOrderAlpha}
            >
                Alfabeto
            </button>
            <button
                className={validationOrder === "pop" ? style.optionActived : style.sortButton}
                onClick={handlerOrderPop}
            >
                Población
            </button>
        </>
    );
};

export default Orders;
