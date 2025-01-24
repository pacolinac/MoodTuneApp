import React from "react";
import pozadina from "../assets/pozadina.png";
import "./Admin.css";
import { Link, useNavigate } from "react-router-dom";

function Admin(props) {
  const navigate = useNavigate();
  return (
    <div className="admin">
      <img className="backgroundimg" src={pozadina} alt=""></img>
      <div className="linkheader">
        <Link to={"/"} className="logic">
          <header>MoodTune</header>
        </Link>
        <button
          className="logoutbutton"
          type="button"
          onClick={() =>
            navigate("/") &&
            props.setJeUlogiran(false) &&
            (props.jeUlogiran = false)
          }
        >
          Odjavi se
        </button>
      </div>
      <p className="tekstic1">Pozdrav admine! :D</p>
      <div className="admindalje">
        <div className="tekstovi">
          <p className="tekstic">
            Odaberite što želite pregledati ili urediti:
          </p>
        </div>
        <div className="gumbovi">
          <button
            className="odazivibutton"
            type="button"
            onClick={() => navigate("/admin/odazivi")}
          >
            Pregledaj odazive
          </button>
          <button
            className="pjesmebutton"
            type="button"
            onClick={() => navigate("/admin/pjesme")}
          >
            Pregled pjesama
          </button>
          <button
            className="korisnicibutton"
            type="button"
            onClick={() => navigate("/admin/dodajPjesmu")}
          >
            Dodaj pjesmu
          </button>
        </div>
      </div>
    </div>
  );
}

export default Admin;
