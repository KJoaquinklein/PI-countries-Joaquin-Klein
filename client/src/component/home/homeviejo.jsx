import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import Card from "../card/card";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountries());
    }, []);

    const countries = useSelector((state) => state.countries);
    const [countrisFromBD, setCountrisFromBD] = useState([...countries]);

    //! --PAGINADO--------------------------------------------------------
    const itemsPage = 10;
    const [items, setItems] = useState(
        [...countrisFromBD].splice(0, itemsPage)
    );

    //?--para quue se actualice el listado de paises al cambiar ordenamiento----
    useEffect(() => {
        setItems([...countrisFromBD].splice(0, itemsPage));
    }, [countrisFromBD]);
    //?------------------------------------------------------------------------

    const [pageNum, setPageNum] = useState(0);

    const handlerNext = () => {
        const totalCountries = countries.length;
        const nextPage = pageNum + 1;
        const firstIndex = nextPage * itemsPage;
        if (firstIndex === totalCountries) return;
        setItems([...countrisFromBD].splice(firstIndex, itemsPage));
        setPageNum(nextPage);
    };

    const handlerPrev = () => {
        const prevPage = pageNum - 1;
        if (prevPage < 0) return;
        const firstIndex = prevPage * itemsPage;
        setItems([...countrisFromBD].splice(firstIndex, itemsPage));
        setPageNum(prevPage);
    };
    //! ------------------------------------------------------------------

    //! --ORDENAR ALFABETICAMENTE-----------------------------------------
    const [orderAlpha, setOrderAlpha] = useState(false);

    const handlerOrderAlpha = () => {
        if (!orderAlpha) {
            setOrderAlpha(true);
            setCountrisFromBD(
                [...countries].sort((a, b) => {
                    if (a.name < b.name) {
                        return -1;
                    }
                    if (a.name > b.name) {
                        return 1;
                    }
                    return 0;
                })
            );
        } else {
            setOrderAlpha(false);
            setCountrisFromBD([...countries]);
        }
    };

    //! ------------------------------------------------------------------

    //! --ORDENAR NUMERICAMENTE-------------------------------------------
    const [orderPopulation, setOrderPopulation] = useState(0);

    const handlerPopulation = () => {
        if (orderPopulation === 0) {
            setOrderPopulation(1);
            setCountrisFromBD(
                [...countries].sort((a, b) => {
                    if (a.population < b.population) {
                        return -1;
                    }
                    if (a.population > b.population) {
                        return 1;
                    }
                    return 0;
                })
            );
        } else if (orderPopulation === 1) {
            setOrderPopulation(2);
            setCountrisFromBD(
                [...countries].sort((a, b) => {
                    if (a.population > b.population) {
                        return -1;
                    }
                    if (a.population < b.population) {
                        return 1;
                    }
                    return 0;
                })
            );
        } else if (orderPopulation === 2) {
            setOrderPopulation(0);
            setCountrisFromBD([...countries]);
        }
    };
    //! ------------------------------------------------------------------

    //! --FILTRADO POR CONTINENTE-----------------------------------------

    //! ------------------------------------------------------------------

    return (
        <div>
            <div>
                <p>Ordenar por:</p>
                <select>
                    <option>Todos</option>
                    <option>Africa</option>
                    <option>Antarctica</option>
                    <option>Asia</option>
                    <option>Europe</option>
                    <option>North America</option>
                    <option>South America</option>
                    <option>Oceania</option>
                </select>
                <button>Actividad turistica</button>
                <button onClick={handlerOrderAlpha}>A-Z</button>
                <button onClick={handlerPopulation}>Población</button>
            </div>
            <div>
                <input placeholder="¿Cual es tu destino?" />
                <button>Buscar</button>
            </div>
            <button onClick={handlerPrev}>Prev</button>
            <button onClick={handlerNext}>Next</button>
            <div>
                {items.map((country) => (
                    <Card key={country.id} country={country} />
                ))}
            </div>
        </div>
    );
};

export default Home;
