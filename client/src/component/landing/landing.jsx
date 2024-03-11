//*--REACT-------------------------------
import { Link } from "react-router-dom";

//*--CSS---------------------------------
import style from "./landing.module.css";

const Landing = () => {
    return (
        <div className={style.container}>
            <img
                className={style.gif}
                src="https://i.pinimg.com/originals/d7/ae/01/d7ae0170d3d5ffcbaa7f02fdda387a3b.gif"
                alt=""
            />

            <Link className={style.title} to={"/home"}>
                Comenzar
            </Link>
            <footer className={style.footer}>SAP creada por Joaquín Klein</footer>
        </div>
    );
};

export default Landing;
