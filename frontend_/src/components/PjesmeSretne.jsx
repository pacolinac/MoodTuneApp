import React, { useEffect, useState } from "react";
import pozadina from "../assets/pozadina.png";
import "./PjesmeSretne.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function PjesmeSretne() {
  const [sretnePjesme, setSretnePjesme] = useState([]);
  const navigate = useNavigate();

  // stanje za pohranu poruke o grešci prilikom brisanja pjesme
  const [error, setError] = React.useState("");

  useEffect(() => {
    async function fetchPjesme() {
      try {
        const response = await axios.get("/api/admin/songs");
        const pjesme = response.data;
        const filtriranePjesme = pjesme.filter(
          (pjesma) => pjesma.emocija.emocija === "sretan"
        );
        setSretnePjesme(filtriranePjesme);
      } catch (error) {
        setError("Greška pri dohvaćanju podataka!");
      }
    }
    fetchPjesme();
  }, []);

  // funkcija za brisanje pjesme
  async function onDelete(id) {
    try {
      await axios.delete(`/api/admin/songs/${id}`);
      setSretnePjesme((oldPjesme) =>
        oldPjesme.filter((pjesma) => pjesma.pjesmaId !== id)
      );
    } catch (error) {
      setError("Greška prilikom brisanja pjesme!");
    }
  }

  return (
    <div>
      <img className="backgroundimg" src={pozadina} alt=""></img>
      <div className="linkheader">
        <Link to={"/admin"} className="logic">
          <header>MoodTune</header>
        </Link>
      </div>
      <div className="songslist">
        {sretnePjesme.map((pjesma, index) => (
          <div className="songcardsret" key={index}>
            <h3 className="songtitle">{pjesma.naslov}</h3>
            <p className="songauthor">Autor: {pjesma.autor}</p>
            <p className="songgenre">Žanr: {pjesma.zanr}</p>
            <p className="songlink">
              URL:{" "}
              <a href={pjesma.url} target="_blank" rel="noopener noreferrer">
                {pjesma.url}
              </a>
            </p>
            <button
              className="deletebutton"
              onClick={() => onDelete(pjesma.pjesmaId)}
            >
              Izbriši
            </button>
            <button
              className="editbutton"
              onClick={() =>
                navigate(`/admin/urediPjesmu/${pjesma.pjesmaId}`, {
                  state: { pjesma },
                })
              }
            >
              Uredi
            </button>
            {error && <p className="error">{error}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default PjesmeSretne;
