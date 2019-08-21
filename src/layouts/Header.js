import React from 'react';
import {Route, Switch} from 'react-router-dom';
import img1 from '../images/main.jpg';
import img2 from '../images/prod.jpg';
import img3 from '../images/contact.jpg';
import img4 from '../images/admin.png';
import "../styles/Header.css";

const Header = () => {
    return ( 
        <>
        <Switch>
        <Route path="/" exact render={() => (
            <img src={img1} alt="main"/>
        )} />
        <Route path="/products" render={() => (
            <img src={img2} alt="main"/>
        )} />
        <Route path="/contact" render={() => (
            <img src={img4} alt="main"/>
        )} />
        <Route path="/admin" render={() => (
            <img src={img3} alt="main"/>
        )} />
        <Route path="/login" render={() => (
            <img src={img3} alt="main"/>
        )} />
        <Route render={() => (
            <img src={img1} alt="main"/>
        )} />
        </Switch>
        </>
     );
}
 
export default Header;