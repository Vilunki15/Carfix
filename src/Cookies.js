import React from "react";

const Cookies = ( { setCookies } ) => {
    const cookieState = (cookieBoolean) => {
        setCookies(cookieBoolean);
    }
    return (
        <div>
            <h2>Cookies</h2>
            <button onClick={ () => cookieState(true)}>hyväksy</button>
            <button onClick={ () => cookieState(false)}>ETUSIVU</button>
        </div>
    );
}

export default Cookies;