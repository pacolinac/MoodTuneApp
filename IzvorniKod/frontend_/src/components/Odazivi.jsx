import React from "react";
import pozadina from "../assets/pozadina.png";
import "./Odazivi.css";
import { Link } from "react-router-dom";

function Odazivi() {
  return (
    <div>
      <img className="backgroundimg" src={pozadina} alt=""></img>
      <div className="linkheader">
        <Link to={"/admin"} className="logic">
          <header>MoodTune</header>
        </Link>
      </div>
      <div className="odazivi"> odazivi </div>
    </div>
  );
}

export default Odazivi;
