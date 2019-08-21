import React from 'react';
import "../styles/LoginPage.css";

const LoginPage = () => {
    return (
        <div className="login">
            <label htmlFor="">Login:<br/><input type="text"/></label><br/>
            <label htmlFor="">Passoword:<br/><input type="password"/></label>
            <button>Sign in</button>
        </div>
    );
}
 
export default LoginPage;