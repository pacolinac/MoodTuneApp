import './pocetna.css'
import { Link } from 'react-router-dom'
import React, {useRef, useState} from 'react';
import axios from "axios";


function Pocetna() {

    const [response, setResponse] = useState(null);

    const sendData = async () => {
        const payload = {
            korisnikId: 1,
            pitanjeId: 8,
            odgovorId: 1,
            pjesmaId: 2,
            boja: "blue",
            preListening: true,
        };

        try {
            const res = await axios.post("http://localhost:8080/api/responses", payload);
            setResponse(res.data);
            console.log("Response:", res.data);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    const targetRef = useRef(null)

    const scrollTo = () => {
        targetRef.current.scrollIntoView({behavior: 'smooth'})
    }


    return (
        <div className="container">
            <div>
                <button onClick={sendData}>Send Data</button>
            </div>

            <div className='pozadina'></div>

            <img alt=" " className="background-upper" src="./photos/background-upper.png"></img>

            <div className="admin-part">
                <img className="admin-icon"></img>
            </div>

            <div className="upper-part">
                <h1 className="title">MoodTune</h1>
                <div className="buttons-part">

                    <button className="istrazivanje-button" onClick={scrollTo}>O istraživanju</button>

                    <Link to={"/form"}>
                        <button className="zapocni-button">Započni test</button>
                    </Link>

                </div>
            </div>

            <div className="middle-part">
                <h2 className="istrazivanje-title" ref={targetRef}>O istraživanju</h2>
                <p className="opis">sxdrcftvgbhnjkdfna vwhjdp vcbnsdak čahpnčhpd fijap</p>
            </div>

            <div className="lower-part">
                <Link to={"/form"}>
                    <button className="test-button">Započni test</button>
                </Link>
            </div>

            <img alt=" " className="background-lower" src="./photos/background-lower.png"></img>
        </div>
    )
}

export default Pocetna;