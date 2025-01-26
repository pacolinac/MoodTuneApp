import React, { useEffect, useState } from "react";
import pozadina from "../assets/pozadina.png";
import "./Odazivi.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Odazivi() {
  const [odazivi, setOdazivi] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchOdazive() {
      try {
        const response = await axios.get("/api/admin/responses");
        setOdazivi(response.data);
      } catch (error) {
        setError("Greška pri dohvaćanju podataka!");
      }
    }
    fetchOdazive();
  }, []);

  return (
    <div>
      <img className="backgroundimg" src={pozadina} alt=""></img>
      <div className="linkheader">
        <Link to={"/admin"} className="logic">
          <header>MoodTune</header>
        </Link>
      </div>
      <div className="responselist">
        {odazivi.map((response, index) => (
          <div className="responsecard" key={index}>
            <p>
              <span>Odaziv ID:</span> {response.odazivId}
            </p>
            <p>
              <span>Korisnik ID:</span> {response.korisnik.korisnikId}
            </p>
            <p>
              <span>Odgovor ID:</span> {response.odgovor.odgovorId}
            </p>
            <p>
              <span>Pitanje ID:</span> {response.pitanje.pitanjeId}
            </p>
            <p>
              <span>Pjesma ID:</span> {response.pjesma?.pjesmaId || "N/A"}
            </p>
            <p>
              <span>Boja:</span> {response.boja || "N/A"}
            </p>
          </div>
        ))}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Odazivi;
