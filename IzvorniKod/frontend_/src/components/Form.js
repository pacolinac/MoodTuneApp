import Privole from "./Privole";
import FeelBefore from "./FeelBefore";
import WannaFeel from "./WannaFeel";
import Music from "./Music";
import PersonalInfo from "./PersonalInfo";
import FeelAfter from "./FeelAfter";
import GDPR from "./GDPR";
import { useState } from "react";
import "./Form.css";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';

function Form() {
    // Korisnik 
    const [user, setUser] = useState({
        dob: "",
        spol: "",
        stanjePrije: "",
        stanjeZeljeno: ""
    });

    // Prije slušanja 
    const [odazivPreListening, setodazivPreListening] = useState({
        korisnikId: "",
        pitanjeId: "",
        odgovorId: "",
        pjesmaId: null,
        boja: null,
        preListening: true,
    });

    // Poslije slušanja 
    const [odazivPostListening, setodazivPostListening] = useState({
        korisnikId: "",
        pitanjeId: "",
        odgovorId: "",
        pjesmaId: "",
        boja: "",
        preListening: false,
    });

    const navigate = useNavigate();

    const [page, setPage] = useState(0);
    const formTitles = ["Privole", "GDPR", "PersonalInfo", "FeelBefore", "WannaFeel", "Music", "FeelAfter"];

    const PageDisplay = () => {
        if (page === 0) {
            return <Privole />;
        }
        if (page === 1) {
            return <GDPR />;
        }
        if (page === 2) {
            return <PersonalInfo user={user} setUser={setUser} />;
        }
        if (page === 3) {
            return <FeelBefore
                user={user}
                setUser={setUser}
                odazivPreListening={odazivPreListening}
                setodazivPreListening={setodazivPreListening}
            />;
        }
        if (page === 4) {
            return <WannaFeel
                user={user}
                setUser={setUser}
            />;
        }
        if (page === 5) {
            return <Music
                user={user}
                setUser={setUser}
                odazivPostListening={odazivPostListening}
                setodazivPostListening={setodazivPostListening}
            />;
        }
        if (page === 6) {
            return <FeelAfter
                user={user}
                setUser={setUser}
                odazivPreListening={odazivPreListening}
                setodazivPreListening={setodazivPreListening}
                odazivPostListening={odazivPostListening}
                setodazivPostListening={setodazivPostListening}
            />;
        }
    };

    const sendOdaziv = async (korisnikId) => {
        // Prije slušanja 
        const odazivPreListening_ = {
            korisnikId: korisnikId,
            pitanjeId: odazivPreListening.pitanjeId, 
            odgovorId: odazivPreListening.odgovorId, 
            pjesmaId: null, 
            boja: null, 
            preListening: true,
        };

        // Poslije slušanja 
        const odazivPostListening_ = {
            korisnikId: korisnikId,
            pitanjeId: odazivPostListening.pitanjeId, 
            odgovorId: odazivPostListening.odgovorId, 
            pjesmaId: odazivPostListening.pjesmaId, 
            boja: odazivPostListening.boja, 
            preListening: false,
        };

        try {
            console.log("OdazivPreListening_:" + odazivPreListening_);
            await axios.post("http://localhost:8080/api/responses", odazivPreListening_, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("OdazivPostListening_:" + odazivPostListening_);
            await axios.post("http://localhost:8080/api/responses", odazivPostListening_, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            console.log("Both responses successfully sent");

        } catch (error) {
            console.error("Error:", error);
        }
    };

    const handleSubmit = async () => {
        try {
            const user_ = {
                dob: user.dob,
                spol: user.spol,
                stanjePrije: user.stanjePrije,
                stanjeZeljeno: user.stanjeZeljeno
            };

            // Log the full user_ object
            console.log("User_prije:", user_);  // This will log the entire user object

            // Log odazivPostListening and odazivPreListening properly
            console.log("OdazivPostListening:", JSON.stringify(odazivPostListening, null, 2)); // Properly formatted
            console.log("OdazivPreListening:", JSON.stringify(odazivPreListening, null, 2));   // Properly formatted

            const response = await axios.post('http://localhost:8080/api/users', user_);
            console.log("User_ response data:", response.data); // Logs the response data

            sendOdaziv(response.data.korisnikId);
            alert("Survey saved!");
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };



    return (
        <div className="form-container">
            <Link to={"/"} className="title-form">
                <header>MoodTune</header>
            </Link>

            <div className="main">
                {PageDisplay()}
            </div>

            <div className="next-form">
                <div className="backward">
                    <p className="prev-text">{(page === 0 || page === 1) ? "" : "Prethodno pitanje"}</p>
                    <button
                        className="prev-button"
                        hidden={page === 0 || page === 1}
                        onClick={() => { setPage((curPage) => curPage - 1); }} >
                        ←
                    </button>
                </div>

                <div className="forward">
                    <p className="next-text" hidden={page === formTitles.length - 1}>
                        {page === 0 ? "Kreni s testom!" : page === formTitles.length - 1 ? "Završi test" : "Iduće pitanje"}
                    </p>
                    <button
                        className="next-button"
                        onClick={() => {
                            console.log("User State:", user);
                            console.log("Odaziv PreListening State:", odazivPreListening);
                            console.log("Odaziv PostListening State:", odazivPostListening);

                            if (page === formTitles.length - 1) {
                                navigate("/");
                                handleSubmit(); 
                            } else {
                                setPage((curPage) => curPage + 1);
                            }
                        }} >
                        →
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Form;
