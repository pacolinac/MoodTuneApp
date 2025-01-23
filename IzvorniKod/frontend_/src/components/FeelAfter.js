import { useState, useEffect } from 'react';
import './FeelAfter.css';

function FeelAfter({
    user,
    setUser,
    odazivPreListening,
    setodazivPreListening,
    odazivPostListening,
    setodazivPostListening,
}) {
    const mood = user.stanjeZeljeno; // Zeljeno stanje
    const [selectedScale, setSelectedScale] = useState(null);
    const [selectedColor, setSelectedColor] = useState(null); 

    useEffect(() => {
        // Spremi pitanjeId
        const setPitanjeId = () => {
            switch (mood) {
                case "motiviran":
                    return 3;
                case "sretan":
                    return 2;
                case "tuzan":
                    return 1;
                case "smiren":
                    return 4;
                default:
                    return 0;
            }
        };

        setodazivPostListening((prevState) => ({
            ...prevState,
            pitanjeId: setPitanjeId(),
        }));
    }, [mood, setodazivPostListening]);

    // OdgovorId
    const handleScaleChange = (value) => {
        setSelectedScale(value);
        setodazivPostListening((prevState) => ({
            ...prevState,
            odgovorId: value,
        }));
    };

    // Hex boja
    const handleColorSelect = (colorHex) => {
        setSelectedColor(colorHex);
        setodazivPostListening((prevState) => ({
            ...prevState,
            boja: colorHex,
        }));
    };

    const getQuestionText = () => {
        switch (mood) {
            case "motiviran":
                return "How motivated do you feel from 1 to 7?";
            case "sretan":
                return "How happy do you feel from 1 to 7?";
            case "tuzan":
                return "How sad do you feel from 1 to 7?";
            case "smiren":
                return "How calm do you feel from 1 to 7?";
            default:
                return "";
        }
    };

    // 9 colors for the mosaic
    const colorOptions = [
        "#FF0000", "#FF7F00", "#FFFF00", "#00FF00",
        "#0000FF", "#4B0082", "#8A2BE2", "#FF1493", "#00FFFF"
    ];

    return (
        <div>
            <div className="scale-wrapper">
                <h3 className="scale-question">{getQuestionText()}</h3>

                <div className="scale-options">
                    {Array.from({ length: 7 }, (_, index) => index + 1).map((value) => (
                        <label key={value} className="scale-label">
                            <input
                                type="radio"
                                name="intensity"
                                value={value}
                                onChange={() => handleScaleChange(value)}
                                checked={selectedScale === value}
                            />
                            <span className="scale-number">{value}</span>
                        </label>
                    ))}
                </div>
            </div>

            {/* Boja */}
            <div className="color-mosaic">
                <h3 className="color-question">Color which this song invoked:</h3>
                <div className="color-options">
                    {colorOptions.map((color) => (
                        <div
                            key={color}
                            className="color-box"
                            style={{
                                backgroundColor: color,
                                border: selectedColor === color ? '3px solid black' : 'none',
                            }}
                            onClick={() => handleColorSelect(color)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FeelAfter;
