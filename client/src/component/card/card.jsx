const Card = (props) => {
    const { nombre, continente, imagen } = props.country;

    return (
        <div>
            <img
                src={imagen}
                alt={`Bandera de ${nombre}`}
                title={`Bandera de ${nombre}`}
                width="20px"
            />
            <p>{nombre}</p>
            {/* <p>{continente}</p> */}
        </div>
    );
};

export default Card;
