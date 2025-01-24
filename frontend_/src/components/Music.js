import { useState, useRef, useCallback, useEffect } from 'react';
import "./music.css";

function Music({ formData, setFormData, odazivPostListening, setOdazivPost }) {
    const currentAudio = useRef();
    const [musicData, setMusicData] = useState(null); // Use state for musicData
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [audioProgress, setAudioProgress] = useState(0);

    const setOdaziv = useCallback(
        (data) => {
            setOdazivPost((prevOdaziv) => ({
                ...prevOdaziv,
                pjesmaId: data.pjesmaId,
            }));
        },
        [setOdazivPost]
    );

    useEffect(() => {
        const fetchSong = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/songs?mood=${formData.stanjeZeljeno}`);
                const data = await response.json();
                console.log(data);
                setMusicData(data); 
                setOdaziv(data); 
            } catch (error) {
                console.error('Ne mogu dohvatiti podatke o pjesmi:', error);
            }
        };

        fetchSong();
    }, [formData.stanjeZeljeno, setOdaziv]);

    const handleAudioPlay = () => {
        if (currentAudio.current.paused) {
            currentAudio.current.play();
            setIsAudioPlaying(true);
        } else {
            currentAudio.current.pause();
            setIsAudioPlaying(false);
        }
    };

    const handleAudioUpdate = () => {
        const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
        setAudioProgress(isNaN(progress) ? 0 : progress);
    };

    const handleMusicProgressBar = (e) => {
        setAudioProgress(e.target.value);
        currentAudio.current.currentTime = (e.target.value * currentAudio.current.duration) / 100;
    };

    const style = {
        backgroundColor:
            formData.stanjeZeljeno === "tuzan" ? "rgba(47, 92, 149, 0.8)" : // Blue with 50% opacity
                formData.stanjeZeljeno === "sretan" ? "rgba(216, 198, 82, 0.8)" : // Yellow with 50% opacity
                    formData.stanjeZeljeno === "motiviran" ? "rgba(95, 76, 141, 0.8)" : // Purple with 50% opacity
                        formData.stanjeZeljeno === "smiren" ? "rgba(93, 129, 76, 0.8)" : // Green with 50% opacity
                            "rgba(255, 255, 255, 1)", // Default
    };

    return (
        <div className='containerM'>
            <h2>Stisnite Play i poslušajte vašu pjesmu</h2>

            {/* Only render audio and song info when musicData is available */}
            {musicData ? (
                <>
                    <audio
                        src={musicData.url} // Update with correct property for song URL
                        ref={currentAudio}
                        onTimeUpdate={handleAudioUpdate}
                    ></audio>

                    <p>{musicData.naslov} - {musicData.autor}</p>
                </>
            ) : (
                <p>Učitavanje pjesme...</p>
            )}

            <div className="music-container" style={style}>
                <div className='musicControlers'>
                    <i className="play" onClick={handleAudioPlay}>
                        {isAudioPlaying ? "||" : "►"}
                    </i>
                </div>

                <input
                    type="range"
                    name="musicProgressBar"
                    className="musicProgressBar"
                    value={audioProgress}
                    onChange={handleMusicProgressBar}
                />
            </div>
        </div>
    );
}

export default Music;
