//*-- HOOKS ----------------------------------------------
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useParams } from "react-router-dom";

//*-- COMPONENTS ----------------------------------------
import ActivityCards from "../activityCard/activityCard";

//*-- OTROS ---------------------------------------------
import axios from "axios";
import style from "./detail.module.css";
import { getActivities } from "../../redux/actions";

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
    }, [id]);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getActivities());
    }, []);
    const activities = useSelector((state) => state.activities);

    return (
        <div className={style.container}>
            <div className={style.buttonCont}>
                <Link className={style.buttonBack} to={"/home"}>
                    Atras
                </Link>
            </div>

            <div className={style.DetailCoint}>
                <img className={style.imgCont} src={country.img} alt={`bandera de ${country.name}`} />
                <div className={style.descriptCont}>
                    <h1 className={style.name}>
                        <p>{country.name}</p> <p className={style.bar}>|</p> <p>{country.id}</p>
                    </h1>

                    <div className={style.textIconCont}>
                        <img className={style.icon} src="/src/assets/capital.png" alt="capital" />
                        {country.capital ? <p>{country.capital}</p> : <p>-</p>}
                    </div>

                    <div className={style.textIconCont}>
                        <img className={style.icon} src="/src/assets/continent.png" />
                        <div>
                            {country.subregion ? (
                                <p>
                                    {country.continent} | {country.subregion}
                                </p>
                            ) : (
                                <p>{country.continent}</p>
                            )}
                        </div>
                    </div>

                    <div className={style.textIconCont}>
                        <img className={style.icon} src="/src/assets/population.png" />
                        <p>{country.population}</p>
                    </div>

                    <div className={style.textIconCont}>
                        <img className={style.icon} src="/src/assets/area.png" />
                        <p>{country.area}</p>
                    </div>
                </div>
            </div>
            <p className={style.subTitle}>Actividades turísticas:</p>
            <ActivityCards activities={activities} id={id} />
        </div>
    );
};

export default Detail;
