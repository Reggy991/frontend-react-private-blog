import React, {useState} from 'react';
import './PageNotFound.css';
import {Link, useNavigate} from "react-router-dom";

function PageNotFound() {
    const [timer, setTimer] = useState(5);
    const navigate = useNavigate();

    setTimeout(()=> {
        navigate("/");
    }, 5000);

    setInterval(()=> {
        setTimer(timer - 1);
    }, 1000)

    return (
        <>
            <h1>Oops, this page doesn't exist.</h1>
            <p>Ga <Link to="/">hier</Link> terug naar de home pagina.</p>
            <p>Je wordt automatisch terug gestuurd binnen { timer } seconden.</p>

        </>
    )
}

export default PageNotFound;