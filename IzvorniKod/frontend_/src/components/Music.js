import { useState, useEffect } from 'react';

function Music({ user, setUser, odazivPostListening, setodazivPostListening }) {
    const mood = user.stanjeZeljeno; // Zeljen mood

    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [song, setSong] = useState(null); // Spremi pjesmu

    const handleAudioPlay = () => {
        setIsAudioPlaying(!isAudioPlaying);
    };

    // Izvuci vido id za embeddanje
    const getYouTubeVideoId = (url) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/[^\n\s]+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
        const match = url.match(regex);
        return match ? match[1] : null; 
    };

    // Fetch the song based on the desired mood
    useEffect(() => {
        const fetchSong = async () => {
            try {
                const response = await fetch(`http://localhost:8080/api/songs?mood=${mood}`);
                const musicData = await response.json();
                console.log(musicData);
                setSong(musicData); // Spremi pjesmu

                // odazivPostListening pjesmaId
                if (musicData && musicData.pjesmaId) {
                    setodazivPostListening((prevState) => ({
                        ...prevState,
                        pjesmaId: musicData.pjesmaId, 
                    }));
                }
            } catch (error) {
                console.error('Error fetching song:', error);
            }
        };

        if (mood) {
            fetchSong();
        }
    }, [mood, setodazivPostListening]); 

    return (
        <div>
            <div className="container">
                {song && song.url && (
                    <div className="video-container">
                        {getYouTubeVideoId(song.url) && (
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${getYouTubeVideoId(song.url)}`} 
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Music;
