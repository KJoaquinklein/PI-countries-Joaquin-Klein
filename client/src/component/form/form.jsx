//*-- HOOKS --------------------------------------------
import { useState } from "react";
import { useSelector } from "react-redux";
import useForm from "../../hooks/useForm";

//*-- OTROS --------------------------------------------
import axios from "axios";
import validationForm from "../../hooks/validationForm";

//*-- COMPONENTS ---------------------------------------
import CountryForm from "../countryForm/CountryForm";

const Form = () => {
    const {
        countrySelect,
        handlerChange,
        handlerSeason,
        countriesSort,
        handlerCountries,
        handlerCloseTag,
        handlerSubmit,
    } = useForm(validationForm);

    return (
        <>
            <p>Actividades turísticas</p>
            <form>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" onChange={handlerChange} />

                <label htmlFor="difficulty">Dificultad</label>
                <input type="text" name="difficulty" onChange={handlerChange} />

                <label htmlFor="duration">Duración</label>
                <input type="text" name="duration" onChange={handlerChange} />

                <p>Temporada</p>
                <select onChange={handlerSeason}>
                    <option selected disabled>
                        Selecciona temporada
                    </option>
                    <option value="Verano">Verano</option>
                    <option value="Otoño">Otoño </option>
                    <option value="Invierno">Invierno</option>
                    <option value="Primavera">Primavera</option>
                </select>

                <CountryForm
                    countrySelect={countrySelect}
                    countriesSort={countriesSort}
                    handlerCloseTag={handlerCloseTag}
                    handlerCountries={handlerCountries}
                />

                <button onClick={handlerSubmit}>Crear actividad</button>
            </form>
        </>
    );
};

export default Form;
