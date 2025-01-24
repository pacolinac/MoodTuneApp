import React from "react";
import pozadina from "../assets/pozadina.png";
import "./PjesmeSretne.css";
import { Link } from "react-router-dom";

function PjesmeSretne() {
  return (
    <div>
      <img className="backgroundimg" src={pozadina} alt=""></img>
      <div className="linkheader">
        <Link to={"/admin"} className="logic">
          <header>MoodTune</header>
        </Link>
      </div>
      <div className="pjesmesretne"> sretne</div>
    </div>
  );
}

export default PjesmeSretne;
