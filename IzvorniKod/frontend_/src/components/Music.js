import { useState, useRef, useEffect, useCallback } from 'react';
import "./music.css";

function Music({ formData, setOdazivPost, setIsMusicCompleted }) {
    const currentAudio = useRef();
    const [musicData, setMusicData] = useState(null);
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
                const response = await fetch(`/api/songs?mood=${formData.stanjeZeljeno}`);
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

    // zamjena useLayoutEffect s useEffect
    useEffect(() => {
        if (currentAudio.current) {
            if (isAudioPlaying) {
                currentAudio.current.play();
            } else {
                currentAudio.current.pause();
            }
        }
    }, [isAudioPlaying]);

    const handleAudioPlay = () => {
        setIsAudioPlaying(!isAudioPlaying);
    };

    const handleAudioUpdate = () => {
        const progress = parseInt((currentAudio.current.currentTime / currentAudio.current.duration) * 100);
        setAudioProgress(isNaN(progress) ? 0 : progress);
    };

    const handleMusicProgressBar = (e) => {
        setAudioProgress(e.target.value);
        currentAudio.current.currentTime = (e.target.value * currentAudio.current.duration) / 100;
    };

    const handleAudioEnded = () => {
        setIsMusicCompleted(true);
    };

    const style = {
        backgroundColor:
            formData.stanjeZeljeno === "tuzan" ? "rgba(47, 92, 149, 0.8)" : // Blue with 80% opacity
            formData.stanjeZeljeno === "sretan" ? "rgba(216, 198, 82, 0.8)" : // Yellow with 80% opacity
            formData.stanjeZeljeno === "motiviran" ? "rgba(95, 76, 141, 0.8)" : // Purple with 80% opacity
            formData.stanjeZeljeno === "smiren" ? "rgba(93, 129, 76, 0.8)" : // Green with 80% opacity
            "rgba(255, 255, 255, 1)", // Default
    };

    return (
        <div className='containerM'>
            <h2>Stisnite Play i poslušajte vašu pjesmu</h2>

            {musicData ? (
                <>
                    <audio
                        src={musicData.url}
                        ref={currentAudio}
                        onTimeUpdate={handleAudioUpdate}
                        onEnded={handleAudioEnded}
                        preload='none'
                        type="audio/mpeg"
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
