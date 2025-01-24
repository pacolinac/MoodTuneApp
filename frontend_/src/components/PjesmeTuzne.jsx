import React from "react";
import pozadina from "../assets/pozadina.png";
import "./PjesmeTuzne.css";
import { Link } from "react-router-dom";

function PjesmeTuzne() {
  return (
    <div>
      <img className="backgroundimg" src={pozadina} alt=""></img>
      <div className="linkheader">
        <Link to={"/admin"} className="logic">
          <header>MoodTune</header>
        </Link>
      </div>
      <div className="pjesmetuzne"> tuzne </div>
    </div>
  );
}

export default PjesmeTuzne;
