import style from "./orders.module.css";
import { useDispatch } from "react-redux";
import { getFilterKm } from "../../redux/actions";

const Orders = (props) => {
    const { validationOrder, handlerOrderAlpha, handlerOrderPop } = props;

    //900.000
    const dispatch = useDispatch();
    const handlerClick = () => {
        dispatch(getFilterKm());
    };

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

            <button onClick={handlerClick}>Filtrar por Km</button>
        </>
    );
};

export default Orders;
