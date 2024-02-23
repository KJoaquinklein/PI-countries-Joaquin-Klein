import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCountries } from "../../redux/actions";
import usePaginated from "../../hooks/usePaginated";
import Card from "../card/card";

const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCountries());
    }, []);

    const { items, handlerPrev, handlerNext } = usePaginated();

    return (
        <div>
            <div>
                <p>Ordenar por:</p>
                <button>Continente</button>
                <button>Actividad turistica</button>
                <button>A-Z</button>
                <button>Más población</button>
                <button>Menos población</button>
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
