import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const useForm = (validationForm) => {
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

    //!--NAME | DIFFICULTY| DURATION----------------------------------------
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

    //!--SUBMIT-------------------------------------------------------------------------------

    const handlerSubmit = (event) => {
        event.preventDefault();

        if (!form.name || !form.difficulty || !form.duration || !form.season || !form.countryId) {
            return window.alert("Faltan datos!");
        }

        if (formError.name || formError.difficulty || formError.duration) {
            return window.alert("Hay datos erroneos!");
        }

        if (!formError.name && !formError.difficulty && !formError.duration && form.season && countrySelect.length) {
            const activity = {
                name: form.name,
                difficulty: parseInt(form.difficulty),
                duration: parseInt(form.duration),
                season: form.season,
                countryId: form.countryId,
            };

            axios.post("http://localhost:3001/activities", activity).then(({ data }) => {
                window.alert(data);
            });
            setForm({ name: "", difficulty: 0, duration: 0, season: "", countryId: [] });
            formTag.reset();
            setCountrySelect([]);
        }
    };

    return {
        formError,
        form,
        countrySelect,
        handlerChange,
        handlerSeason,
        countriesSort,
        handlerCountries,
        handlerCloseTag,
        handlerSubmit,
    };
};

export default useForm;
