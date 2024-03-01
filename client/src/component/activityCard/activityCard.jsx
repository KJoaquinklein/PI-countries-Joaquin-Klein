const ActivityCards = (props) => {
    const { activities, id } = props;

    return (
        <div>
            {activities.map((act) =>
                act.Countries.map((actCoun) =>
                    actCoun.id === id ? (
                        <div key={act.id}>
                            <hr />
                            <p>{act.name}</p>
                            <p>Dificultad: {act.difficulty}</p>
                            <p>Duración: {act.duration}</p>
                            <p>Temporada: {act.season}</p>
                            <hr />
                        </div>
                    ) : null
                )
            )}
        </div>
    );
};

export default ActivityCards;
