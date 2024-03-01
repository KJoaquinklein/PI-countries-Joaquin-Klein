//*-- HOOKS -----------------------------------------
import { useSelector } from "react-redux";
import usePaginated from "../../hooks/usePaginated";
import useFilter from "../../hooks/useFilter";
import useSearch from "../../hooks/useSearch";

//*-- COMPONENTS ------------------------------------
import Card from "../card/card";
import Filters from "../filters/filters";

const Home = () => {
    const countriesCopy = useSelector((state) => state.countriesCopy);
    const { items, handlerNext, handlerPrev, handlerOrderAlpha, handlerOrderPop } = usePaginated(countriesCopy);
    const { handlerActivities, handlerFilter } = useFilter();
    const { searchState, handlerChange, handlerClick } = useSearch();

    return (
        <div>
            <div>
                <p>Filtros:</p>
                <Filters handlerActivities={handlerActivities} handlerFilter={handlerFilter} />
            </div>
            <div>
                <p>Ordenar por:</p>
                <div>
                    <button onClick={handlerOrderAlpha}>Alfabeto</button>
                    <button onClick={handlerOrderPop}>Poblacion</button>
                </div>
            </div>
            <div>
                <input value={searchState} placeholder="¿Cuál es tu próximo destino?" onChange={handlerChange} />
                <button onClick={handlerClick}>X</button>
            </div>
            <div>
                {items.map((country) => (
                    <Card key={country.id} country={country} />
                ))}

                {!items.length && searchState && (
                    <div>
                        <p>¿Estás seguro de que el país que buscas se llama {searchState}?</p>
                        <img src="https://us.123rf.com/450wm/iconisa/iconisa1903/iconisa190302707/119712103-pensando-en-el-icono-del-concepto-de-l%C3%ADnea-emoji-pensando-emoji-vector-plano-sitio-web-de-se%C3%B1al.jpg" />
                    </div>
                )}
            </div>
            <button onClick={handlerPrev}>Prev</button>
            <button onClick={handlerNext}>Next</button>
        </div>
    );
};

export default Home;
