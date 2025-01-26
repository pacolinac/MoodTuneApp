import React from "react";
import "./NemaStranice.css";
import pozadina from "../assets/pozadina.png";
import { Link } from "react-router-dom";

function NemaStranice() {
  return (
    <div>
      <img className="backgroundimg" src={pozadina} alt=""></img>
      <div className="linkheader">
        <Link to={"/"} className="logic">
          <header>MoodTune</header>
        </Link>
      </div>
      <div className="nemacontainer">
        <h1 className="nemah1">
          Stranica koju tražite ne postoji ili joj nemate pristup!
        </h1>
        <p className="nemap">
          Molimo Vas da provjerite URL adresu ili se vratite na početnu
          stranicu.
        </p>
      </div>
    </div>
  );
}

export default NemaStranice;
