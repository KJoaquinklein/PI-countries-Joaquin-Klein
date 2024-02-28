import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import validationForm from "./validation";

const Form = () => {
    const [countrySelect, setCountrySelect] = useState([]);

    const [form, setForm] = useState({
        name: "",
        dificulty: "",
        duration: "",
        season: "",
        countryId: [],
    });

    const [formError, setFormError] = useState({
        name: "",
        dificulty: "",
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

    const handlerCountries = (event) => {
        const country = event.target.value;
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

    //TODO ------------- HACER EL SUBMIT

    useEffect(() => {
        console.log(form);
    }, [form]);

    return (
        <>
            <p>Actividades turísticas</p>
            <form>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" onChange={handlerChange} />

                <label htmlFor="dificulty">Dificultad</label>
                <input type="text" name="dificulty" onChange={handlerChange} />

                <label htmlFor="duration">Duración</label>
                <input type="text" name="duration" onChange={handlerChange} />

                <p>Temporada</p>
                <select onChange={handlerSeason}>
                    <option value="verano">Verano</option>
                    <option value="otoño ">Otoño </option>
                    <option value="invierno">Invierno</option>
                    <option value="primavera">Primavera</option>
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
                        {countries.map((country) => (
                            <option value={country.name} key={country.id}>
                                {country.name}
                            </option>
                        ))}
                    </select>
                </div>

                <button>Crear actividad</button>
            </form>
        </>
    );
};

export default Form;
