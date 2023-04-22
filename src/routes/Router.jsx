import React from "react";
import { BrowserRouter as Router, Route, Routes}  from "react-router-dom"
import List from "../components/list/list";
import Detalle from "../components/detalle/Detalle";


const Routs = () => {
    return(
        <Router>
            <Routes>
                <Route path="/" element={<List/>} />
                <Route path="/pokemon" element={<Detalle/>} />

            </Routes>
        </Router>
    );
}
export default Routs;