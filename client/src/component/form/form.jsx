//*-- HOOKS --------------------------------------------
import useForm from "../../hooks/useForm";
import { Link } from "react-router-dom";

//*-- OTROS --------------------------------------------
import validationForm from "../../hooks/validationForm";
import style from "./form.module.css";

//*-- COMPONENTS ---------------------------------------
import CountryForm from "../countryForm/CountryForm";

const Form = () => {
    const {
        formError,
        form,
        countrySelect,
        handlerChange,
        handlerSeason,
        countriesSort,
        handlerCountries,
        handlerCloseTag,
        handlerSubmit,
    } = useForm(validationForm);

    return (
        <div className={style.container}>
            <div className={style.topCont}>
                <div className={style.linkCont}>
                    <Link className={style.linkBack} to="/home">
                        Atras
                    </Link>
                </div>
                <div className={style.titleCont}>
                    <p className={style.title}>Crear actividad turística</p>
                </div>
            </div>
            <div className={style.formCont}>
                <form className={style.form}>
                    <div className={style.formInputs}>
                        <div>
                            <div className={style.inputCont}>
                                <label className={style.label} htmlFor="name">
                                    Nombre
                                </label>
                                <input
                                    className={formError.name ? style.inputError : style.input}
                                    type="text"
                                    name="name"
                                    onChange={handlerChange}
                                />
                            </div>
                            <p className={style.errorText}>{formError.name}</p>

                            <div className={style.inputCont}>
                                <label className={style.label} htmlFor="difficulty">
                                    Dificultad (1-5)
                                </label>
                                <input
                                    className={formError.difficulty ? style.inputError : style.input}
                                    type="text"
                                    name="difficulty"
                                    onChange={handlerChange}
                                />
                            </div>
                            <p className={style.errorText}>{formError.difficulty}</p>

                            <div className={style.inputCont}>
                                <label className={style.label} htmlFor="duration">
                                    Duración (hs)
                                </label>
                                <input
                                    className={formError.duration ? style.inputError : style.input}
                                    type="text"
                                    name="duration"
                                    onChange={handlerChange}
                                />
                            </div>
                            <p className={style.errorText}>{formError.duration}</p>

                            <div className={style.seasonCont}>
                                <p className={style.label}>Temporada</p>
                                <select
                                    className={!form.season ? style.selectError : style.select}
                                    onChange={handlerSeason}
                                >
                                    <option selected disabled>
                                        Selecciona temporada
                                    </option>
                                    <option value="Verano">Verano</option>
                                    <option value="Otoño">Otoño </option>
                                    <option value="Invierno">Invierno</option>
                                    <option value="Primavera">Primavera</option>
                                </select>
                            </div>

                            <CountryForm
                                countrySelect={countrySelect}
                                countriesSort={countriesSort}
                                handlerCloseTag={handlerCloseTag}
                                handlerCountries={handlerCountries}
                            />
                        </div>
                    </div>
                    <button className={style.submit} onClick={handlerSubmit}>
                        Crear
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Form;
