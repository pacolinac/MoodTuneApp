import React from "react";
import pozadina from "../assets/pozadina.png";
import "./Pjesme.css";
import { Link, useNavigate } from "react-router-dom";

function Pjesme() {
  const navigate = useNavigate();

  return (
    <div>
      <img className="backgroundimg" src={pozadina} alt=""></img>
      <div className="linkheader">
        <Link to={"/admin"} className="logic">
          <header>MoodTune</header>
        </Link>
      </div>
      <div className="pjesme">
        <p className="odabiremocije">Odaberite kategoriju:</p>
        <div className="emocijegumbici">
          <button
            className="emotivirano"
            onClick={() => navigate("/admin/pjesme/motivacijske")}
          >
            motivacijske pjesme
          </button>
          <button
            className="esretno"
            onClick={() => navigate("/admin/pjesme/sretne")}
          >
            sretne pjesme
          </button>
          <button
            className="etuzno"
            onClick={() => navigate("/admin/pjesme/tuzne")}
          >
            tužne pjesme
          </button>
          <button
            className="eopusteno"
            onClick={() => navigate("/admin/pjesme/opustajuce")}
          >
            opuštajuće pjesme
          </button>
        </div>
      </div>
    </div>
  );
}

export default Pjesme;
