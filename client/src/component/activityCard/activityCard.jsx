import style from "../detail/detail.module.css";

const ActivityCards = (props) => {
    const { activities, id } = props;

    return (
        <div className={style.cardsCont}>
            {activities.map((act) =>
                act.Countries.map((actCoun) =>
                    actCoun.id === id ? (
                        <div className={style.card} key={act.id}>
                            <div>
                                <div className={style.nameActCont}>
                                    <p className={style.nameAct}>{act.name}</p>
                                </div>
                            </div>
                            <div>
                                <p className={style.text}>Dificultad: {act.difficulty}</p>
                                <p className={style.text}>Duración: {act.duration}</p>
                                <p className={style.text}>Temporada: {act.season}</p>
                            </div>
                        </div>
                    ) : null
                )
            )}
        </div>
    );
};

export default ActivityCards;
