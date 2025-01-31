import React, { useEffect, useState } from "react";
import pozadina from "../assets/pozadina.png";
import "./PjesmeMotivacijske.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function PjesmeMotivacijske() {
  const [motivacijskePjesme, setMotivacijskePjesme] = useState([]);
  const navigate = useNavigate();

  const [responses, setResponses] = useState([]);
  const [loadingResponses, setLoadingResponses] = useState(true);
  const [error, setError] = React.useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    async function fetchPjesme() {
      setError("");
      try {
        const response = await axios.get("/api/admin/songs");
        const pjesme = response.data;
        const filtriranePjesme = pjesme.filter(
          (pjesma) => pjesma.emocija.emocija === "motiviran"
        );
        setMotivacijskePjesme(filtriranePjesme);

        // dohvati odazive i postavi stanje
        const responseRes = await axios.get("/api/admin/responses");
        setResponses(responseRes.data);
        setLoadingResponses(false); // odgovori su učitani
      } catch (error) {
        setError("Greška pri dohvaćanju podataka!");
      }
    }
    fetchPjesme();
  }, []);

  // funkcija za brisanje pjesme
  async function onDelete(id) {
    setErrors("");

    try {
      await axios.delete(`/api/admin/songs/${id}`);
      setMotivacijskePjesme((oldPjesme) =>
        oldPjesme.filter((pjesma) => pjesma.pjesmaId !== id)
      );
      setErrors((prevErrors) => ({ ...prevErrors, [id]: null })); // ukloni grešku ako je brisanje uspješno
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [id]: "Greška prilikom brisanja pjesme!",
      }));
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
      {!loadingResponses && (
        <div className="songslist">
          {motivacijskePjesme.map((pjesma, index) => {
            // provjeri postoji li pjesma u odgovorima
            const pjesmaPostoji = responses.some(
              (response) => response.pjesma?.pjesmaId === pjesma.pjesmaId
            );

            return (
              <div className="songcardmotiv" key={index}>
                <h3 className="songtitle">{pjesma.naslov}</h3>
                <p className="songauthor">Autor: {pjesma.autor}</p>
                <p className="songgenre">Žanr: {pjesma.zanr}</p>
                <p className="songlink">
                  URL:{" "}
                  <a
                    href={pjesma.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {pjesma.url}
                  </a>
                </p>
                <button
                  className="editbutton"
                  onClick={() =>
                    navigate(`/admin/pjesme/urediPjesmu/${pjesma.pjesmaId}`, {
                      state: { pjesma },
                    })
                  }
                >
                  Uredi
                </button>
                {!pjesmaPostoji && (
                  <button
                    className="deletebutton"
                    onClick={() => onDelete(pjesma.pjesmaId)}
                  >
                    Izbriši
                  </button>
                )}
                {errors[pjesma.pjesmaId] && (
                  <p className="error">{errors[pjesma.pjesmaId]}</p>
                )}
              </div>
            );
          })}
          {error && <p className="error">{error}</p>}
        </div>
      )}
    </div>
  );
}

export default PjesmeMotivacijske;
