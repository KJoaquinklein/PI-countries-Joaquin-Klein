import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import validationForm from "./validation";

const Form = () => {
    const [countrySelect, setCountrySelect] = useState([]);

    const [form, setForm] = useState({
        name: "",
        difficulty: 0,
        duration: 0,
        season: "",
        countryId: [],
    });

    const [formError, setFormError] = useState({
        name: "",
        difficulty: "",
        duration: "",
    });

    const handlerChange = (event) => {
        const property = event.target.name;
        const value = event.target.value;

        validationForm(value, property, formError, setFormError);
        setForm({ ...form, [property]: value });
    };

    //!--SEASONS------------------------------------------------------------

    const handlerSeason = (event) => {
        const value = event.target.value;
        setForm({ ...form, season: value });
    };

    //!--COUNTRIES----------------------------------------------------------

    const countries = useSelector((state) => state.countries);
    const countriesSort = [...countries].sort((a, b) => {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    });

    const handlerCountries = (event) => {
        const country = event.target.value;

        if (country === "default") return;

        if (countrySelect.includes(country)) return;

        setCountrySelect([...countrySelect, country]);
        countries.map((coun) => {
            if (coun.name === country) {
                setForm({ ...form, countryId: [...form.countryId, coun.id] });
            }
        });
    };

    const handlerCloseTag = (event) => {
        const country = event.target.value;

        countries.map((coun) => {
            if (coun.name === country) {
                setForm({ ...form, countryId: form.countryId.filter((c) => c !== coun.id) });
            }
        });

        setCountrySelect(countrySelect.filter((c) => c !== country));
    };

    const handlerSubmit = (event) => {
        event.preventDefault();
        if (!formError.name && !formError.difficulty && !formError.duration && countrySelect.length) {
            const activity = {
                name: form.name,
                difficulty: parseInt(form.difficulty),
                duration: parseInt(form.duration),
                season: form.season,
                countryId: form.countryId,
            };
            console.log(activity);

            axios.post("http://localhost:3001/activities", activity).then(({ data }) => {
                console.log(data);
            });
        }
    };

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
                    <option value="Verano">Verano</option>
                    <option value="Otoño">Otoño </option>
                    <option value="Invierno">Invierno</option>
                    <option value="Primavera">Primavera</option>
                </select>
                <div>
                    <p>Paises</p>
                    <div>
                        {countrySelect.map((country) => (
                            <div key={country}>
                                <p>{country}</p>
                                <button value={country} onClick={handlerCloseTag}>
                                    X
                                </button>
                            </div>
                        ))}
                    </div>
                    <select onChange={handlerCountries}>
                        <option value="default">Selecciona país</option>
                        {countriesSort.map((country) => (
                            <option value={country.name} key={country.id}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button onClick={handlerSubmit}>Crear actividad</button>
            </form>
        </>
    );
};

export default Form;
