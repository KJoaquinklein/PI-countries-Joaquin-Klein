// import "./App.css";
import { Routes, Route } from "react-router-dom";
import Landing from "./component/landing/landing";
import Home from "./component/home/home";
import Form from "./component/form/form";
import Detail from "./component/detail/detail";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Landing />} /> //! LANDING PAGE
                <Route path="/home" element={<Home />} /> //! HOME
                <Route path="detail/:id" element={<Detail />} /> //! DETAIL
                <Route path="/form" element={<Form />} /> //! FORMULARIO
            </Routes>
        </div>
    );
}

export default App;
