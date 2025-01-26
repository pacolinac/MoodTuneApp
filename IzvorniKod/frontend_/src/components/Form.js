import Privole from "./Privole";
import FeelBefore from "./FeelBefore";
import WannaFeel from "./WannaFeel";
import Music from "./Music";
import PersonalInfo from "./PersonalInfo";
import FeelAfter from "./FeelAfter";
import EndMessage from "./EndMessage";
import Boje from "./Boje";
import {useState} from "react"
import "./form.css"
import { Link } from "react-router-dom";
import axios from 'axios';

function Form() {

    const [odazivPreListening, setOdazivPrev] = useState({
        korisnikId: "",
        pitanjeId: "",
        odgovorId: "",
        pjesmaId: null,
        boja: null,
        preListening: true
    })
    const [odazivPostListening, setOdazivPost] = useState({
        korisnikId: "",
        pitanjeId: "",
        odgovorId: "",
        pjesmaId: "",
        boja: "",
        preListening: false
    })
        

    const [formData, setFormData] = useState({
        dob:"",
        spol:"",
        stanjePrije:"",
        stanjeZeljeno:"",
    })


    const [page, setPage] = useState(0);
    const formTitles = ["Privole", "PersonalInfo", "FeelBefore", "WannaFeel", "Music", "FeelAfter"]
    const [isMusicCompleted, setIsMusicCompleted] = useState(false); 

    const PageDisplay = () => {
        if(page === 0) {
            return <Privole/>
        }
        if(page === 1) {
            return <PersonalInfo setFormData={setFormData} formData={formData} />
        }
        if(page === 2) {
            return <FeelBefore setFormData={setFormData} setOdazivPrev={setOdazivPrev}/>
        }

        if(page === 3) {
            return <WannaFeel setFormData={setFormData} setPage={setPage}/>
        }
        if(page === 4) {
            return <Music formData={formData} setOdazivPost={setOdazivPost} setIsMusicCompleted={setIsMusicCompleted} />
        }
        if (page === 5) {
            return <FeelAfter setOdazivPost={setOdazivPost}/>
        }
        if(page === 6) {
            return <Boje setOdazivPost={setOdazivPost}/>
        }
        if(page === 7) {
            return <EndMessage/>
        }
    }

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
            await axios.post("/api/responses", odazivPreListening_, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("OdazivPostListening_:" + odazivPostListening_);
            await axios.post("/api/responses", odazivPostListening_, {
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
        console.log(formData)
        console.log(odazivPreListening)
        console.log(odazivPostListening)
        try {
            const user_ = {
                dob: formData.dob,
                spol: formData.spol,
                stanjePrije: formData.stanjePrije,
                stanjeZeljeno: formData.stanjeZeljeno
            };

            console.log("User_prije:", user_);  

            console.log("OdazivPostListening:", JSON.stringify(odazivPostListening, null, 2)); 
            console.log("OdazivPreListening:", JSON.stringify(odazivPreListening, null, 2));   

            const response = await axios.post('/api/users', user_);
            console.log("User_ response data:", response.data); 

            sendOdaziv(response.data.korisnikId);
            alert("Survey saved!");
        } catch (error) {
            console.error('Error submitting data:', error);
        }
    };


    return(
        <div className="form-container">
            <img className="backgroundimg" src="./photos/background-upper.png" alt=""></img>

            <Link to={"/"} className="title-form">
                <header>MoodTune</header>
            </Link>
               

            <div className="main">
                {PageDisplay()}
            </div>

            <div className="next-form">

                <div className="backward">
                    <p className="prev-text">{(page === 0 || page === 1 ||page === 7 ) ? "" : "Prethodno pitanje"}</p>
                     <button 
                        className="prev-button" 
                        hidden = {page === 0 || page === 1 || page === 7}
                        onClick={() => {setPage((curPage) => curPage - 1)}}>
                    ←</button>
                </div>

                <div className="forward">
                    <p className="next-text" hidden = {page === 3 || page === 7}>{page === 0 ? "Kreni s testom!" : page === formTitles.length ? "Završi test" : "Iduće pitanje"}</p>
                    <button 
                        className="next-button"
                        hidden = {page === 3 || page === 7}
                        onClick={() => {

                            console.log("Current page:", page);
                            console.log("odazivPreListening:", JSON.stringify(odazivPreListening, null, 2));
                            console.log("odazivPostListening:", JSON.stringify(odazivPostListening, null, 2));
                            console.log("formData:", JSON.stringify(formData, null, 2));

                            if (page === 1) {
                                if (!formData.dob || !formData.spol) {
                                    alert("Nevaljani podaci! Molimo unesite godine i odaberite spol.");
                                    return;
                                }
                            }

                            if (page === 2) {
                                if (!formData.stanjePrije || !odazivPreListening.odgovorId) {
                                    alert("Emocija i odgovor moraju biti ispunjeni!");
                                    return;
                                }
                            }

                            if (page === 4 && !isMusicCompleted) {
                                alert("Morate poslušati pjesmu do kraja prije nego nastavite.");
                                return;
                            }

                            if (page === 5) {
                                if (!odazivPostListening.odgovorId || !odazivPostListening.pitanjeId) {
                                    alert("Emocija i odgovor moraju biti ispunjeni!");
                                    return;
                                }
                            }

                            if (page === 6) {
                                if (!odazivPostListening.boja) {
                                    alert("Boja mora biti odabrana!");
                                    return;
                                }
                            }

                            if (page === formTitles.length) {
                                handleSubmit()
                                setPage((curPage) => curPage + 1)
                            } else {
                                setPage((curPage) => curPage + 1)
                            }
                        }}>
                    →</button>
                </div>
                
            </div>
            
        </div>
    )
}

export default Form;