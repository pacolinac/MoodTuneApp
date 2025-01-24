import "./wannafeel.css";

function WannaFeel({ formData, setFormData, page, setPage }) {
    // Predefined song URLs for each mood
    const songs = {
        motivirano: "https://www.dropbox.com/scl/fi/p7ovqs4n7n9psaycjsy6g/spinningHead.mp3?rlkey=yj3hkird2g8at24i9h5arrnli&e=2&st=avswjcp1&dl=1",
        sretno: "https://www.dropbox.com/scl/fi/4rxxxao4s3myx0hge5w36/good-night-lofi-cozy-chill-music-160166.mp3?rlkey=zsu5k3a6lsl40hwxu0bty1xfk&st=21ag8uzr&dl=1",
        tuzno: "https://www.dropbox.com/scl/fi/qpm51kendmlw0fy9iy9xm/pain-of-the-soul-very-sad-286739.mp3?rlkey=qic969xo0wv03bpmwp6o5hno5&st=amw53max&dl=1",
        opusteno: "https://www.dropbox.com/scl/fi/4rxxxao4s3myx0hge5w36/good-night-lofi-cozy-chill-music-160166.mp3?rlkey=zsu5k3a6lsl40hwxu0bty1xfk&st=dzbyedn0&dl=1",
    };

    function handleMotivated() {
        setFormData((prevFormData) => ({
            ...prevFormData,
            wannaFeel: "motivirano",
        }));
        setPage((prevPage) => prevPage + 1);
    }

    function handleHappy() {
        setFormData((prevFormData) => ({
            ...prevFormData,
            wannaFeel: "sretno",
        }));
        setPage((prevPage) => prevPage + 1);
    }

    function handleSad() {
        setFormData((prevFormData) => ({
            ...prevFormData,
            wannaFeel: "tuzno",
        }));
        setPage((prevPage) => prevPage + 1);
    }

    function handleCalm() {
        setFormData((prevFormData) => ({
            ...prevFormData,
            wannaFeel: "opusteno",
        }));
        setPage((prevPage) => prevPage + 1);
    }

    function playSong(mood) {
        const songUrl = songs[mood];
        const audio = new Audio(songUrl);
        audio.play();
    }

    console.log(formData);

    return (
        <div className="wrapper">
            <h2 className="question">2. Kako bi se željeli osjećati?</h2>

            <div className="choices-wrapper">
                <button className="motivated" onClick={handleMotivated}>motivirano</button>
                <button className="happy" onClick={handleHappy}>sretno</button>
                <button className="sad" onClick={handleSad}>tužno</button>
                <button className="calm" onClick={handleCalm}>opušteno</button>
            </div>

            <div className="play-wrapper">
                <h3>Test Your Mood Song:</h3>
                <button onClick={() => playSong("motivirano")}>Play Motivirano</button>
                <button onClick={() => playSong("sretno")}>Play Sretno</button>
                <button onClick={() => playSong("tuzno")}>Play Tuzno</button>
                <button onClick={() => playSong("opusteno")}>Play Opušteno</button>
            </div>
        </div>
    );
}

export default WannaFeel;
