import React from "react";
import pozadina from "../assets/pozadina.png";
import "./DodajPjesmu.css";
import { Link } from "react-router-dom";

function Korisnici() {
  return (
    <div>
      <img className="backgroundimg" src={pozadina} alt=""></img>
      <div className="linkheader">
        <Link to={"/admin"} className="logic">
          <header>MoodTune</header>
        </Link>
      </div>
      <div className="korisnici"> dodaj pjesmu </div>
    </div>
  );
}

export default Korisnici;
