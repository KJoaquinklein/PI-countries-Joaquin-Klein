//*-- HOOKS ----------------------------------------------
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

//*-- COMPONENTS ----------------------------------------
import ActivityCards from "../activityCard/activityCard";

//*-- OTROS ---------------------------------------------
import axios from "axios";
import style from "./detail.module.css";

const Detail = () => {
    const { id } = useParams();
    const [country, setCountry] = useState({});
    useEffect(() => {
        axios
            .get(`http://localhost:3001/countries/country/${id}`)
            .then(({ data }) => {
                setCountry(data);
            })
            .catch(({ response }) => {
                setCountry(response);
            });
    }, []);

    const activities = useSelector((state) => state.activities);

    return (
        <>
            <Link className={style.buttonBack} to={"/home"}>
                ←
            </Link>
            {country.name ? (
                <div className={style.container}>
                    <div className={style.descriptCont}>
                        <h1 className={style.name}>
                            {country.name} | {country.id}
                        </h1>
                        <p className={style.capital}>{country.capital}</p>
                        <p>
                            {country.continent} | {country.subregion}
                        </p>
                        <p className={style.population}>{country.population}</p>
                        <p className={style.area}>{country.area}</p>
                    </div>
                    <div>
                        <img src={country.img} alt={`bandera de ${country.name}`} height="300px" />
                    </div>
                    <ActivityCards activities={activities} id={id} />
                </div>
            ) : (
                <p>No se encontró el país solicitado :(</p>
            )}
        </>
    );
};

export default Detail;
