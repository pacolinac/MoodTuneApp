import './pocetna.css'
import user_icon from "../assets/user.png";
import { Link } from 'react-router-dom'
import React, {useRef} from 'react';


function Pocetna({ jeUlogiran }) {

    const targetRef = useRef(null)

    const scrollTo = () => {
        targetRef.current.scrollIntoView({behavior: 'smooth'})
    }

    return (
        <div className="container">

            <div className='pozadina'></div>

            <img alt=" " className="background-upper" src="./photos/background-upper.png"></img>

            <div className="upper-part">
                <h1 className="title">MoodTune</h1>
                <Link to={jeUlogiran ? "/admin" : "/login"}>
                    <img className="admin-icon" src={user_icon} alt=''></img>
                </Link>
                <div className="buttons-part">
                    
                    <button className="istrazivanje-button" onClick={scrollTo}>O istraživanju</button>

                    <Link to={"/form"}>
                        <button className="zapocni-button">Započni test</button>
                    </Link> 
                   
                </div>
            </div>
            
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

            <img alt=" " className="background-lower" src="./photos/background-lower.png"></img>
        </div>
    )
}

export default Pocetna;
