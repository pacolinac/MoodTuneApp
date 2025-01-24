import React from "react";
import pozadina from "../assets/pozadina.png";
import "./PjesmeOpustajuce.css";
import { Link } from "react-router-dom";

function PjesmeOpustajuce() {
  return (
    <div>
      <img className="backgroundimg" src={pozadina} alt=""></img>
      <div className="linkheader">
        <Link to={"/admin"} className="logic">
          <header>MoodTune</header>
        </Link>
      </div>
      <div className="pjesmeopustajuce"> opustajuce</div>
    </div>
  );
}

export default PjesmeOpustajuce;
