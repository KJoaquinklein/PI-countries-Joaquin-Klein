import style from "./cards.module.css";
import Card from "../card/card";

const Cards = (props) => {
    const { items, searchState, handlerPrev, handlerNext, pageNum } = props;

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
                <button className={style.buttonPag} onClick={handlerPrev}>
                    {"<<<"}
                </button>
                <p className={style.numPage}>{pageNum + 1}</p>
                <button className={style.buttonPag} onClick={handlerNext}>
                    {">>>"}
                </button>
            </div>
        </>
    );
};

export default Cards;
