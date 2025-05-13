import React from 'react';
import { useNavigate } from 'react-router-dom';

function LandingPage() {

    const navigate = useNavigate();

    function openApp(){
        navigate('/weatherPage');
    }


    return(
        <>
            <button onClick={openApp} >Open Weather App</button>
        </>
    );
}

export default LandingPage