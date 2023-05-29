import React from 'react';

const CookiePrompt = ({ setCookiesAccepted, setCookiesPrompted }) => {
    //This component uses parent component usestates. The component usage looks this:
    //<CookiePrompt setCookiesAccepted={setCookiesAccepted} setCookiesPrompted={setCookiesPrompted} />
    //if-else can be used for hidden/shown
    const cookieState = (cookies) => {
        setCookiesAccepted(cookies);
    };
    const cookiesPrompted = () => {
        setCookiesPrompted(true);
    };
    const handleCookieState = (accepted) => {
        cookieState(accepted);
        cookiesPrompted();
    };
    return (
        <div>
            <h2>Cookies</h2>
            <button onClick={() => handleCookieState(true)}>Hyväksy</button>
            <button onClick={() => handleCookieState(false)}>Ei</button>
        </div>
    );
};

export default CookiePrompt;