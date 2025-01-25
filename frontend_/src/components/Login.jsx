import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import korisnickoIme_icon from "../assets/korisnickoIme.png";
import lozinka_icon from "../assets/lozinka.png";
import pozadina from "../assets/pozadina.png";
import axios from "axios";

function Login(props) {
  // stanje za pohranu podataka unesenih u formu za prijavu (korisničko ime i lozinka)
  const [loginForm, setLoginForm] = React.useState({
    korisnickoIme: "",
    lozinka: "",
  });

  // stanje za pohranu poruke o grešci prilikom prijave
  const [error, setError] = React.useState("");

  const navigate = useNavigate();

  // provjera je li forma za prijavu ispravna
  function isValid() {
    const { korisnickoIme, lozinka } = loginForm;
    return korisnickoIme.length > 0 && lozinka.length > 0;
  }

  // ažurira podatke u formi na temelju korisnikovog unosa
  function onChange(event) {
    const { name, value } = event.target;
    setLoginForm((oldForm) => ({ ...oldForm, [name]: value }));
  }

  async function onSubmit(e) {
    e.preventDefault();
    setError("");

    const data = {
      korisnickoIme: loginForm.korisnickoIme,
      lozinka: loginForm.lozinka,
    };

    try {
      const response = await axios.post("/api/admin/login", data);
      props.onLogin();
      navigate("/admin");
    } catch (error) {
      setError("Greška prilikom prijave!");
    }
  }

  return (
    <div className="loginpage">
      <img className="backgroundimg" src={pozadina} alt=""></img>
      <div className="box">
        <form onSubmit={onSubmit}>
          <div className="gore">
            <div className="tekst">Prijava admina</div>
            <div className="underline"></div>
          </div>
          <div className="inputs">
            <div className="input">
              <img src={korisnickoIme_icon} alt="" />
              <input
                name="korisnickoIme"
                placeholder="Korisničko ime"
                onChange={onChange}
                value={loginForm.korisnickoIme}
              />
            </div>
            <div className="input">
              <img src={lozinka_icon} alt="" />
              <input
                name="lozinka"
                type="password"
                placeholder="Lozinka"
                onChange={onChange}
                value={loginForm.lozinka}
              />
            </div>
          </div>
          <div className="submit">
            <button className="prijava" type="submit" disabled={!isValid()}>
              Prijavi se
            </button>
          </div>
        </form>
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Login;
