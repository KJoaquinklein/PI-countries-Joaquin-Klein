import style from "./cards.module.css";
import Card from "../card/card";

const Cards = (props) => {
    const { items, searchState, handlerPrev, handlerNext, pageNum, countriesCopy } = props;

    let lastPage;
    if ((pageNum + 1) * 10 >= countriesCopy.length) {
        lastPage = true;
    } else {
        lastPage = false;
    }

    return (
        <>
            <div className={style.cardsCont}>
                {items.map((country) => (
                    <Card key={country.id} country={country} />
                ))}

                {!items.length && searchState && (
                    <div className={style.error}>
                        <p className={style.errorText}>
                            ¿Estás seguro de que el país que buscas se llama {searchState}?
                        </p>
                        <img className={style.errorImg} src="src\assets\emogiCeleste.png" />
                    </div>
                )}
            </div>
            <div className={style.paginatedCont}>
                <button className={!pageNum ? style.buttonPagBlock : style.buttonPag} onClick={handlerPrev}>
                    {"<<<"}
                </button>
                <p className={style.numPage}>{pageNum + 1}</p>
                <button className={lastPage ? style.buttonPagBlock : style.buttonPag} onClick={handlerNext}>
                    {">>>"}
                </button>
            </div>
        </>
    );
};

export default Cards;
