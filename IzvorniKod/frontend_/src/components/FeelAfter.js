import {useState} from 'react'
import './feelafter.css'

function FeelAfter({setOdazivPost}) {

    const [value, setValue] = useState(0);


    const handleChange = (event) => {
        setValue(Number(event.target.value));
        setOdazivPost(prevOdazivPost => ({
            ...prevOdazivPost,
            odgovorId: event.target.value
        }))
    };
    
    function handleMotivatedW() {

        setOdazivPost(prevOdazivPost => ({
            ...prevOdazivPost,
            pitanjeId: 3
        }))
        
    }
    function handleHappyW() {

        setOdazivPost(prevOdazivPost => ({
            ...prevOdazivPost,
            pitanjeId: 2
        }))
    }
    function handleSadW() {

        setOdazivPost(prevOdazivPost => ({
            ...prevOdazivPost,
            pitanjeId: 1
        }))
    }
    function handleCalmW() {

        setOdazivPost(prevOdazivPost => ({
            ...prevOdazivPost,
            pitanjeId: 4
        }))
    }

    return(
        <div>
            <h2 className='question-after'>3.Kako se osjećate nakon slušanja pjesme?</h2>

            <div className="choices-wrapper">
                <button className="motivated" onClick={handleMotivatedW}>motivirano</button>
                <button className="happy" onClick={handleHappyW}>sretno</button>
                <button className="sad" onClick={handleSadW}>tužno</button>
                <button className="calm" onClick={handleCalmW}>opušteno</button>
            </div>

            

            <div className="range-container">
                <h2 className='question-after'>Koliko biste rekli da osjećate tu emociju od 1 do 7?</h2>

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

export default FeelAfter;