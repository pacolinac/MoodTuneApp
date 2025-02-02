import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import pozadina from "../assets/pozadina.png";
import "./UrediPjesmu.css";

function UrediPjesmu() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const [editForm, setEditForm] = useState({
    autor: "",
    naslov: "",
    zanr: "",
    emocija: "",
    url: "",
  });

  // stanje za pohranu poruke o grešci prilikom uređivanja pjesme
  const [error, setError] = React.useState("");

  // useEffect za postavljanje stanja forme na temelju proslijeđenih podataka
  useEffect(() => {
    if (location.state && location.state.pjesma) {
      const { pjesma } = location.state;
      setEditForm({
        autor: pjesma.autor,
        naslov: pjesma.naslov,
        zanr: pjesma.zanr,
        emocija: pjesma.emocija.emocija,
        url: pjesma.url,
      });
    }
  }, [location.state]);

  function isValid() {
    const { autor, naslov, zanr, emocija, url } = editForm;
    return (
      autor !== "" &&
      naslov !== "" &&
      zanr !== "" &&
      emocija !== "" &&
      url !== ""
    );
  }

  function onChange(event) {
    const { name, value } = event.target;
    setEditForm((oldForm) => ({ ...oldForm, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError("");
    const data = {
      autor: editForm.autor,
      naslov: editForm.naslov,
      zanr: editForm.zanr,
      emocija: editForm.emocija,
      url: editForm.url,
    };
    try {
      await axios.put(`/api/admin/songs/${id}`, data);
      navigate("/admin");
    } catch (error) {
      setError("Greška prilikom uređivanja pjesme!");
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
            <div className="songtekst">Uredi pjesmu:</div>
            <div className="songunderline"></div>
          </div>
          <div className="songinputs">
            <p>Autor:</p>
            <div className="songinput">
              <input
                placeholder="Autor"
                name="autor"
                value={editForm.autor}
                onChange={onChange}
              />
            </div>
            <p>Naslov:</p>
            <div className="songinput">
              <input
                placeholder="Naslov"
                name="naslov"
                value={editForm.naslov}
                onChange={onChange}
              />
            </div>
            <p>Žanr:</p>
            <div className="songinput">
              <input
                placeholder="Žanr"
                name="zanr"
                value={editForm.zanr}
                onChange={onChange}
              />
            </div>
            <div className="songinputselect">
              <p>Emocija pjesme:</p>
              <select
                className="emotions"
                name="emocija"
                value={editForm.emocija}
                onChange={onChange}
              >
                <option value="" disabled hidden>
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
                placeholder="URL"
                name="url"
                type="url"
                value={editForm.url}
                onChange={onChange}
              />
            </div>
          </div>
          <div className="songsubmit">
            <button className="songedit" type="submit" disabled={!isValid()}>
              Ažuriraj podatke
            </button>
          </div>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default UrediPjesmu;
