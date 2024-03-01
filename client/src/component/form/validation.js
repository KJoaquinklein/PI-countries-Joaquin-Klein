const validationForm = (value, property, error, setError) => {
    if (property === "name") {
        return nameValidation(value, error, setError);
    }
    if (property === "difficulty") {
        return dificultyValidation(value, error, setError);
    }
    if (property === "duration") {
        return durationValidation(value, error, setError);
    }
};

const nameValidation = (value, error, setError) => {
    if (/^[^\d]*$/.test(value)) {
        setError({ ...error, name: "" });
    } else {
        setError({ ...error, name: "El nombre NO debe contener numeros" });
    }
};

const dificultyValidation = (value, error, setError) => {
    if (isNaN(value)) {
        setError({ ...error, dificulty: "La dificultad tiene que ser un numero" });
    } else if (parseInt(value) < 1 || parseInt(value) > 5) {
        setError({ ...error, dificulty: "La dificultad tiene que ser un numero entre 1 y 5" });
    } else {
        setError({ ...error, dificulty: "" });
    }
};

const durationValidation = (value, error, setError) => {
    if (isNaN(value)) {
        setError({ ...error, duration: "La duracion se especifica en horas" });
    } else if (parseInt(value) < 1) {
        setError({ ...error, duration: "Duracion muy corta" });
    } else if (parseInt(value) > 72) {
        setError({ ...error, duration: "Duracion muy larga" });
    } else {
        setError({ ...error, duration: "" });
    }
};

export default validationForm;
