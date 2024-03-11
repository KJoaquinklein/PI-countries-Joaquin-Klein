import style from "../form/form.module.css";

const CountryForm = (props) => {
    const { countrySelect, countriesSort, handlerCloseTag, handlerCountries } = props;

    return (
        <div className={style.contryCont}>
            <div className={style.inputCountry}>
                <p className={style.label}>Paises</p>
                <select
                    className={!countrySelect.length ? style.selectError : style.selectCountry}
                    onChange={handlerCountries}
                >
                    <option selected disabled>
                        Selecciona país
                    </option>
                    {countriesSort.map((country) => (
                        <option value={country.name} key={country.id}>
                            {country.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className={!countrySelect.length ? style.countrySelectContError : style.countrySelectCont}>
                {countrySelect.map((country) => (
                    <div className={style.countryCard} key={country}>
                        <p className={style.countrySelectName}>{country}</p>
                        <button className={style.countrySelectClose} value={country} onClick={handlerCloseTag}>
                            X
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CountryForm;
