import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getFilterContinent, getCountryByName, getFilterActivities } from "../../redux/actions";
import usePaginated from "../../hooks/usePaginated";
import Card from "../card/card";

const Home = () => {
    const dispatch = useDispatch();
    const countriesCopy = useSelector((state) => state.countriesCopy);
    const activities = useSelector((state) => state.activities);

    const { items, handlerNext, handlerPrev, handlerOrderAlpha, handlerOrderPop } = usePaginated(countriesCopy);

    const handlerFilter = (event) => {
        const continent = event.target.value;
        dispatch(getFilterContinent(continent));
    };

    const [searchState, setSearchState] = useState("");

    const handlerChange = (event) => {
        setSearchState(event.target.value);
        dispatch(getCountryByName(event.target.value));
    };

    const handlerClick = () => {
        dispatch(getCountryByName(""));
        setSearchState("");
    };

    const handlerActivities = (event) => {
        const acitivityName = event.target.value;
        if (acitivityName === "All") {
            dispatch(getFilterActivities(acitivityName));
        }
        activities.map((act) => {
            if (acitivityName === act.name) {
                dispatch(getFilterActivities(act));
            }
        });
    };

    return (
        <div>
            <div>
                <select onChange={handlerFilter}>
                    <option value="All">Todos</option>
                    <option value="Africa">Africa</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="North America">North America</option>
                    <option value="South America">South America</option>
                    <option value="Asia">Asia</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            <select onChange={handlerActivities}>
                <option value="All">Todos</option>
                {activities.map((act) => (
                    <option key={act.id} value={act.name}>
                        {act.name}
                    </option>
                ))}
            </select>
            <div>
                <button onClick={handlerOrderAlpha}>ordenar por alfabeto</button>
                <button onClick={handlerOrderPop}>ordenar por poblacion</button>
            </div>
            <div>
                <input value={searchState} placeholder="¿Cuál es tu próximo destino?" onChange={handlerChange} />
                <button onClick={handlerClick}>X</button>
            </div>
            <button onClick={handlerPrev}>Prev</button>
            <button onClick={handlerNext}>Next</button>
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
        </div>
    );
};

export default Home;
