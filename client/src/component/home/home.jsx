//*-- HOOKS -----------------------------------------
import { useSelector, useDispatch } from "react-redux";
import usePaginated from "../../hooks/usePaginated";
import useFilter from "../../hooks/useFilter";
import useSearch from "../../hooks/useSearch";
import { Link } from "react-router-dom";
import { useEffect } from "react";

//*-- COMPONENTS ------------------------------------
import Cards from "../cards/cards";
import Filters from "../filters/filters";
import Orders from "../orders/orders";
import SearchBar from "../searchBar/searchBar";

//*--CSS---------------------------------------------
import style from "./home.module.css";
import { getActivities } from "../../redux/actions";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getActivities());
    }, []);

    const countriesCopy = useSelector((state) => state.countriesCopy);

    const { items, handlerNext, handlerPrev, handlerOrderAlpha, handlerOrderPop, validationOrder, pageNum } =
        usePaginated(countriesCopy);
    const { handlerActivities, handlerFilter } = useFilter();
    const { searchState, handlerChange, handlerClick } = useSearch();

    return (
        <div className={style.container}>
            <div className={style.optionsBar}>
                <Link className={style.backLink} to="/">
                    Volver al inicio
                </Link>

                <p className={style.title}>Opciones</p>

                <div className={style.optionCont}>
                    <Filters handlerActivities={handlerActivities} handlerFilter={handlerFilter} />
                </div>

                <div className={style.optionCont}>
                    <Orders
                        validationOrder={validationOrder}
                        handlerOrderAlpha={handlerOrderAlpha}
                        handlerOrderPop={handlerOrderPop}
                    />
                </div>
            </div>

            <div className={style.searchCountryCont}>
                <div className={style.containerTop}>
                    <SearchBar handlerChange={handlerChange} handlerClick={handlerClick} searchState={searchState} />
                </div>

                <div>
                    <div className={style.countryCont}>
                        <Cards
                            items={items}
                            searchState={searchState}
                            handlerPrev={handlerPrev}
                            handlerNext={handlerNext}
                            pageNum={pageNum}
                            countriesCopy={countriesCopy}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
