import React, { useState } from "react";
import "./WannaFeel.css";

function WannaFeel({ user, setUser }) {
    const [selectedMood, setSelectedMood] = useState(null);

    const handleMoodChange = (mood) => {
        let stanjeZeljeno = "";
        let pitanjeId = 0;

        // Setting corresponding values for each mood
        switch (mood) {
            case "Motivated":
                stanjeZeljeno = "motiviran";
                pitanjeId = 3;
                break;
            case "Happy":
                stanjeZeljeno = "sretan";
                pitanjeId = 2;
                break;
            case "Sad":
                stanjeZeljeno = "tuzan";
                pitanjeId = 1;
                break;
            case "Calm":
                stanjeZeljeno = "smiren";
                pitanjeId = 4;
                break;
            default:
                stanjeZeljeno = "";
                pitanjeId = 0;
        }

        // Update user state with selected mood and associated values
        setSelectedMood(mood);
        setUser((prevUser) => ({
            ...prevUser,
            stanjeZeljeno: stanjeZeljeno, 
        }));
    };

    return (
        <div className="wrapper">
            <h2 className="question">2. How would you like to feel?</h2>
            <div className="choices-wrapper">
                <button onClick={() => handleMoodChange("Motivated")}>Motivated</button>
                <button onClick={() => handleMoodChange("Happy")}>Happy</button>
                <button onClick={() => handleMoodChange("Sad")}>Sad</button>
                <button onClick={() => handleMoodChange("Calm")}>Calm</button>
            </div>
        </div>
    );
}

export default WannaFeel;
