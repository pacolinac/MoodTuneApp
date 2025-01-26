import React, { useEffect, useState } from "react";
import pozadina from "../assets/pozadina.png";
import "./PjesmeMotivacijske.css";
import { Link } from "react-router-dom";
import axios from "axios";
import bazaPodataka from "./laznabazapjesama.json";

function PjesmeMotivacijske() {
  const [motivacijskePjesme, setMotivacijskePjesme] = useState([]);

  useEffect(() => {
    const filtriranePjesme = bazaPodataka.pjesme.filter(
      (pjesma) => pjesma.emocija === "motiviran"
    );
    setMotivacijskePjesme(filtriranePjesme);
  }, []);

  /*
  useEffect(() => {
    async function fetchPjesme() {
      try {
        const response = await axios.get("/api/admin/songs");
        const pjesme = response.data.pjesme;
        const filtriranePjesme = pjesme.filter(
          (pjesma) => pjesma.emocija.emocija === "motiviran"
        );
        setMotivacijskePjesme(filtriranePjesme);
      } catch (error) {
        console.error("Greška pri dohvaćanju podataka:", error);
      }
    }
    fetchPjesme();
  }, []);
  */

  // funkcija za brisanje pjesme
  async function handleDelete(id) {
    try {
      await axios.delete(`/api/admin/songs/${id}`);
      setMotivacijskePjesme((oldPjesme) =>
        oldPjesme.filter((pjesma) => pjesma.pjesmaId !== id)
      );
    } catch (error) {
      console.error("Greška prilikom brisanja pjesme:", error);
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
        {motivacijskePjesme.map((pjesma, index) => (
          <div className="songcardmotiv" key={index}>
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
              onClick={() => handleDelete(pjesma.pjesmaId)}
            >
              Izbriši
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PjesmeMotivacijske;
