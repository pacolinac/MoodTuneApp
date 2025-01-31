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

  const handleAudioPlay = async () => {
    if (currentAudio.current) {
      if (!isAudioPlaying) {
        try {
          await currentAudio.current.play();
          setIsAudioPlaying(true);
        } catch (error) {
          console.error("Greška pri pokretanju reprodukcije:", error);
        }
      } else {
        currentAudio.current.pause();
        setIsAudioPlaying(false);
      }
    }
  };

  const handleAudioUpdate = () => {
    if (currentAudio.current && currentAudio.current.duration) {
      const progress = parseInt(
        (currentAudio.current.currentTime / currentAudio.current.duration) * 100,
        10
      );
      setAudioProgress(isNaN(progress) ? 0 : progress);
    }
  };

  const handleMusicProgressBar = (e) => {
    const newProgress = Number(e.target.value);
    setAudioProgress(newProgress);
    if (currentAudio.current && currentAudio.current.duration) {
      currentAudio.current.currentTime = (newProgress * currentAudio.current.duration) / 100;
    }
  };

  const handleAudioEnded = () => {
    setIsMusicCompleted(true);
    setIsAudioPlaying(false);
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
                        preload='auto'
                    ></audio>
                    <p>{musicData.naslov} - {musicData.autor}</p>
                </>
            ) : (
                <p>Učitavanje pjesme...</p>
            )}

            <div className="music-container" style={style}>
                <div className='musicControlers'>
                    <button className="play" onClick={handleAudioPlay}>
                        {isAudioPlaying ? "||" : "►"}
                    </button>
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
