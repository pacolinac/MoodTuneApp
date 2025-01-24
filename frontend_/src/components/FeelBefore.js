import "./feelbefore.css"
import {useState} from 'react'

function FeelBefore({formData, setFormData,page, setPage, odazivPreListening, setOdazivPrev}) {

    const [value, setValue] = useState(0);

    
    function handleMotivated() {
        setFormData(prevFormData => ({
            ...prevFormData,
            stanjePrije: "motiviran"
        }))
        setOdazivPrev(prevOdazivPrev => ({
            ...prevOdazivPrev,
            pitanjeId: 3
        }))
        
    }
    function handleHappy() {
        setFormData(prevFormData => ({
            ...prevFormData,
            stanjePrije: "sretan"
        }))
        setOdazivPrev(prevOdazivPrev => ({
            ...prevOdazivPrev,
            pitanjeId: 2
        }))
    }
    function handleSad() {
        setFormData(prevFormData => ({
            ...prevFormData,
            stanjePrije: "tuzan"
        }))
        setOdazivPrev(prevOdazivPrev => ({
            ...prevOdazivPrev,
            pitanjeId: 1
        }))
    }
    function handleCalm() {
        setFormData(prevFormData => ({
            ...prevFormData,
            stanjePrije: "smiren"
        }))
        setOdazivPrev(prevOdazivPrev => ({
            ...prevOdazivPrev,
            pitanjeId: 4
        }))
    }

    const handleChange = (event) => {
        setValue(Number(event.target.value));
        setOdazivPrev(prevOdazivPrev => ({
            ...prevOdazivPrev,
            odgovorId: event.target.value
        }))
    };
    

    return(
        <div className="wrapper-before">
            <h2 className="question-before">1. Kako se trenutno osjećate?</h2>

            <div className="choices-wrapper-before">
                <button className="motivated" onClick={handleMotivated}>motivirano</button>
                <button className="happy" onClick={handleHappy}>sretno</button>
                <button className="sad" onClick={handleSad}>tužno</button>
                <button className="calm" onClick={handleCalm}>opušteno</button>
            </div>
            <div className="range-container">
                <h2>Koliko biste rekli da osjećate tu emociju od 1 do 7?</h2>

                <div className="range-wrapper">
                    <input
                        type="range"
                        min="1"
                        max="7"
                        step="1"
                        value={value}
                        onChange={handleChange}
                        className="styled-range"
                    />

                    <div className="range-dots">
                        {[...Array(7)].map((_, index) => (
                            <span key={index}></span>
                        ))}
                    </div>

                    <div className="range-labels">
                        <span className="label-left">1</span>
                        <span className="label-right">7</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default FeelBefore;