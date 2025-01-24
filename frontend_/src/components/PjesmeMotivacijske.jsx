import React from "react";
import pozadina from "../assets/pozadina.png";
import "./PjesmeMotivacijske.css";
import { Link } from "react-router-dom";

function PjesmeMotivacijske() {
  return (
    <div>
      <img className="backgroundimg" src={pozadina} alt=""></img>
      <div className="linkheader">
        <Link to={"/admin"} className="logic">
          <header>MoodTune</header>
        </Link>
      </div>
      <div className="pjesmemotivacijske"> motivacijske</div>
    </div>
  );
}

export default PjesmeMotivacijske;
