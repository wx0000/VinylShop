import React from "react";
import { Route } from "react-router-dom";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <h2>Ninja Tune Records Shop</h2>
      <Route
        path="/"
        exact
        render={props => {
          return (
            <p>
              You're here: <span>News</span>
            </p>
          );
        }}
      />
      <Route
        path="/:page"
        exact
        render={props => {
          return (
            <p>
              You're here: <span>{props.match.params.page}</span>
            </p>
          );
        }}
      />
      <Route
        path="/:page/:idProduct"
        exact
        render={props => {
          return (
            <p>
              You're here: <span>{props.match.params.idProduct}</span>
            </p>
          );
        }}
      />
    </div>
  );
};

export default Footer;
