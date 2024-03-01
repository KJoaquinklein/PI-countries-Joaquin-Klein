const CountryForm = (props) => {
    const { countrySelect, countriesSort, handlerCloseTag, handlerCountries } = props;

    return (
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
    );
};

export default CountryForm;
