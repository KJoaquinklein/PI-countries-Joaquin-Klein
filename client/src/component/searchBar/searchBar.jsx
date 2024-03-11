import style from "./searchBar.module.css";
import { Link } from "react-router-dom";

const SearchBar = (props) => {
    const { handlerChange, handlerClick, searchState } = props;

    return (
        <>
            <Link className={style.formLink} to="/form">
                Crear actividad turistica
            </Link>

            <div className={style.searchBar}>
                <input
                    className={style.input}
                    value={searchState}
                    placeholder="Mi próximo destino es..."
                    onChange={handlerChange}
                />
                <button className={style.buttonX} onClick={handlerClick}>
                    X
                </button>
            </div>
        </>
    );
};

export default SearchBar;
