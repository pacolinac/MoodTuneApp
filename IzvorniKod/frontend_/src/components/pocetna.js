import './Pocetna.css';
import { Link, useNavigate } from 'react-router-dom';
import React, { useRef, useState } from 'react';
import axios from "axios";

function Pocetna() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); 

    const toggleLoginForm = () => {
        setShowLoginForm((prev) => !prev);
    };

    const handleLogin = async (e) => {
        e.preventDefault(); 

        const payload = {
            korisnickoIme: username,
            lozinka: password,
        };

        try {
            console.log(payload);
            const response = await axios.post("http://localhost:8080/api/admin/login", payload);
            console.log("Login successful:", response.data);

            navigate('/admin-dashboard');
        } catch (error) {
            console.error("Login failed:", error);
            alert("Invalid username or password. Please try again.");
        }
    };

    const targetRef = useRef(null);

    const scrollTo = () => {
        targetRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="container">


            <div className="admin-part">
                <img className="admin-icon" alt="" />
            </div>

            <div className="upper-part">
                <h1 className="title">MoodTune</h1>
                <div className="buttons-part">
                    <button className="istrazivanje-button" onClick={scrollTo}>O istraživanju</button>

                    <Link to={"/form"}>
                        <button className="zapocni-button">Započni test</button>
                    </Link>

                    <button className="admin-button" onClick={toggleLoginForm}>Admin</button>
                </div>
            </div>

            {showLoginForm && (
                <div className="login-form">
                    <h3>Admin Login</h3>
                    <form onSubmit={handleLogin}>
                        <div>
                            <label htmlFor="username">Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="login-submit-button">Login</button>
                    </form>
                </div>
            )}

            <div className="middle-part">
                <h2 className="istrazivanje-title" ref={targetRef}>O istraživanju</h2>
                <p className="opis">Projekt MoodTunes bavi se razvojem aplikacije za anketiranje i praćenje promjena raspoloženja ispitanika uz pomoć glazbe. Glavni problem koji aplikacija rješava je potreba za jednostavnim, ali učinkovitim načinom praćenja emocionalnih stanja korisnika i utvrđivanja kako glazba može utjecati na njihovo raspoloženje.
                    Aplikacija omogućuje korisnicima da odaberu jedno od četiri osnovna emocionalna stanja – smirenost, sreća, motivacija ili tuga – prije i nakon upitnika, gdje prvi put biraju kako se osjećaju, a drugi put kako se žele osjećati. Kroz integrirane upitnike prije i nakon slušanja glazbe, aplikacija bilježi promjene u njihovom emocionalnom stanju, koristeći semantički diferencijal.
                    Glazba je odabrana tako da odražava i poboljšava odabrano emocionalno stanje, a upitnici omogućuju aplikaciji da analizira kako glazba utječe na emocionalnu dinamiku korisnika. Aplikacija pruža korisne statističke podatke koji mogu biti korišteni u istraživačke svrhe, poput analize utjecaja glazbe na mentalno zdravlje.
                    Projekt također istražuje korelaciju između boja, raspoloženja i emocionalnih stanja korisnika, što aplikaciji omogućuje da vizualno podrži emocionalnu promjenu, čineći korisničko iskustvo još interaktivnijim. Kroz ovaj proces, aplikacija ne samo da pomaže korisnicima u samopraćenju i boljoj povezanosti s vlastitim emocijama, već može poslužiti kao alat u psihološkim istraživanjima.</p>
            </div>

            <div className="lower-part">
                <Link to={"/form"}>
                    <button className="test-button">Započni test</button>
                </Link>
            </div>

        </div>
    );
}

export default Pocetna;
