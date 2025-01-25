import React from "react";
import pozadina from "../assets/pozadina.png";
import "./DodajPjesmu.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DodajPjesmu() {
  const navigate = useNavigate();

  const [songForm, setSongForm] = React.useState({
    autor: "",
    naslov: "",
    zanr: "",
    emocija: "",
    url: "",
  });

  // stanje za pohranu poruke o grešci prilikom dodavanja pjesme
  const [error, setError] = React.useState("");

  // provjera je li forma za prijavu ispravna
  function isValid() {
    const { autor, naslov, zanr, emocija, url } = songForm;
    return (
      autor.length > 0 &&
      naslov.length > 0 &&
      zanr.length > 0 &&
      emocija.length > 0 &&
      url.length > 0
    );
  }

  function onChange(event) {
    const { name, value } = event.target;
    setSongForm((oldForm) => ({ ...oldForm, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError("");

    const data = {
      autor: songForm.autor,
      naslov: songForm.naslov,
      zanr: songForm.zanr,
      emocija: songForm.emocija,
      url: songForm.url,
    };

    try {
      await axios.post("/api/admin/songs", data);
      navigate("/admin");
    } catch (error) {
      setError("Greška prilikom dodavanja pjesme!");
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
      <div className="songbox">
        <form onSubmit={onSubmit}>
          <div className="songgore">
            <div className="songtekst">Dodaj pjesmu:</div>
            <div className="songunderline"></div>
          </div>
          <div className="songinputs">
            <p>Autor:</p>
            <div className="songinput">
              <input
                name="autor"
                placeholder="Autor"
                value={songForm.autor}
                onChange={onChange}
              />
            </div>
            <p>Naslov:</p>
            <div className="songinput">
              <input
                name="naslov"
                placeholder="Naslov"
                value={songForm.naslov}
                onChange={onChange}
              />
            </div>
            <p>Žanr:</p>
            <div className="songinput">
              <input
                name="zanr"
                placeholder="Žanr"
                value={songForm.zanr}
                onChange={onChange}
              />
            </div>
            <div className="songinputselect">
              <p>Emocija pjesme:</p>
              <select
                className="emotions"
                name="emocija"
                value={songForm.emocija}
                onChange={onChange}
              >
                <option value="" selected disabled hidden>
                  --odaberite emociju--
                </option>
                <option value="tuzan">tužna</option>
                <option value="sretan">sretna</option>
                <option value="motiviran">motivacijska</option>
                <option value="smiren">opuštajuća</option>
              </select>
            </div>
            <p>URL:</p>
            <div className="songinput">
              <input
                name="url"
                placeholder="URL"
                value={songForm.url}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="songsubmit">
            <button className="songadd" type="submit" disabled={!isValid()}>
              Dodaj pjesmu
            </button>
          </div>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default DodajPjesmu;
