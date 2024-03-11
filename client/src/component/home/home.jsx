//*-- HOOKS -----------------------------------------
import { useSelector } from "react-redux";
import usePaginated from "../../hooks/usePaginated";
import useFilter from "../../hooks/useFilter";
import useSearch from "../../hooks/useSearch";
import { Link } from "react-router-dom";

//*-- COMPONENTS ------------------------------------
import Card from "../card/card";
import Filters from "../filters/filters";

//*--CSS---------------------------------------------
import style from "./home.module.css";

const Home = () => {
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
                    <p className={style.optionTitle}>Filtrar por:</p>
                    <Filters handlerActivities={handlerActivities} handlerFilter={handlerFilter} />
                </div>

                <div className={style.optionCont}>
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
                </div>
            </div>

            <div className={style.searchCountryCont}>
                <div className={style.containerTop}>
                    <Link className={style.formLink} to="/form">
                        Crear actividad turistica
                    </Link>

                    <div className={style.searchBar}>
                        <input
                            className={style.input}
                            value={searchState}
                            placeholder="Mi próximo destino es..."
                            onChange={handlerChange}
                        />
                        <button className={style.buttonX} onClick={handlerClick}>
                            X
                        </button>
                    </div>
                </div>
                <div>
                    <div className={style.countryCont}>
                        <div className={style.cardsCont}>
                            {items.map((country) => (
                                <Card key={country.id} country={country} />
                            ))}

                            {!items.length && searchState && (
                                <div className={style.error}>
                                    <p className={style.errorText}>
                                        ¿Estás seguro de que el país que buscas se llama {searchState}?
                                    </p>
                                    <img className={style.errorImg} src="src\assets\emogiBlanco.png" />
                                </div>
                            )}
                        </div>
                        <div className={style.paginatedCont}>
                            <button className={style.buttonPag} onClick={handlerPrev}>
                                {"<<<"}
                            </button>
                            <p className={style.numPage}>{pageNum + 1}</p>
                            <button className={style.buttonPag} onClick={handlerNext}>
                                {">>>"}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
