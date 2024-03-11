import { Link } from "react-router-dom";
import style from "./card.module.css";

const Card = (props) => {
    const { name, continent, img, id } = props.country;

    return (
        <Link to={`/detail/${id}`} className={style.containerCard}>
            <div className={style.contImg}>
                <img className={style.img} src={img} alt={`Bandera de ${name}`} title={`Bandera de ${name}`} />
            </div>
            <p className={style.name}>{name}</p>
            <p className={style.continent}>{continent}</p>
        </Link>
    );
};

export default Card;
