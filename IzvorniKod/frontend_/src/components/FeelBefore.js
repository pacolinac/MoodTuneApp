import React, { useState } from "react";  // Import useState
import "./FeelBefore.css";

function FeelBefore({ user, setUser, odazivPreListening, setodazivPreListening }) {
    const [selectedMood, setSelectedMood] = useState(null);

    const handleMoodChange = (mood) => {
        let stanjePrije = "";
        let pitanjeId = 0;

        switch (mood) {
            case "Motivated":
                stanjePrije = "motiviran";
                pitanjeId = 3;
                break;
            case "Happy":
                stanjePrije = "sretan";
                pitanjeId = 2;
                break;
            case "Sad":
                stanjePrije = "tuzan";
                pitanjeId = 1;
                break;
            case "Calm":
                stanjePrije = "smiren";
                pitanjeId = 4;
                break;
            default:
                stanjePrije = "";
                pitanjeId = 0;
        }

        setSelectedMood(mood);
        setUser((prevUser) => ({
            ...prevUser,
            stanjePrije: stanjePrije,
        }));

        setodazivPreListening((prev) => ({
            ...prev,
            pitanjeId: pitanjeId,
        }));
    };

    const handleScaleChange = (odgovorId) => {
        setodazivPreListening((prev) => ({
            ...prev,
            odgovorId: odgovorId, 
        }));
    };

    return (
        <div className="wrapper">
            <h2 className="question">1. How do you feel?</h2>
            <div className="choices-wrapper">
                <button onClick={() => handleMoodChange("Motivated")}>Motivated</button>
                <button onClick={() => handleMoodChange("Happy")}>Happy</button>
                <button onClick={() => handleMoodChange("Sad")}>Sad</button>
                <button onClick={() => handleMoodChange("Calm")}>Calm</button>
            </div>

            {selectedMood && (
                <div className="scale-wrapper">
                    <h3 className="scale-question">
                        How {selectedMood.toLowerCase()} do you feel from 1 to 7?
                    </h3>
                    <div className="scale-options">
                        {Array.from({ length: 7 }, (_, index) => index + 1).map((odgovorId) => (
                            <label key={odgovorId} className="scale-label">
                                <input
                                    type="radio"
                                    name="intensity"
                                    odgovorId={odgovorId}
                                    onChange={() => handleScaleChange(odgovorId)}
                                    checked={odazivPreListening.odgovorId === odgovorId} // Ensure correct selection
                                />
                                <span className="scale-number">{odgovorId}</span>
                            </label>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default FeelBefore;
