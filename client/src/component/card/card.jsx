import { Link } from "react-router-dom";

const Card = (props) => {
    const { name, continent, population, img, id } = props.country;

    return (
        <div>
            <img
                src={img}
                alt={`Bandera de ${name}`}
                title={`Bandera de ${name}`}
                width="20px"
            />
            <Link to={`/detail/${id}`}>{name}</Link>
            <p>
                {continent} | {population}
            </p>
        </div>
    );
};

export default Card;
