import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

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

    return (
        <>
            <Link to={"/home"}>←</Link>
            {country.name ? (
                <div>
                    <div>
                        <h1>
                            {country.name} | {country.id}
                        </h1>
                        <p>{country.capital}</p>
                        <p>
                            {country.continent} | {country.subregion}
                        </p>
                        <p>{country.population}</p>
                        <p>{country.area}</p>
                    </div>
                    <div>
                        <img src={country.img} alt={`bandera de ${country.name}`} height="300px" />
                    </div>
                </div>
            ) : (
                <p>No se encontró el país solicitado :(</p>
            )}
        </>
    );
};

export default Detail;
