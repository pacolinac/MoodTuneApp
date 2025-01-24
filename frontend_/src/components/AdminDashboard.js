import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DataTable from './DataTable'; // Import the DataTable component
import './AdminDashboard.css';
import AddSongForm from './Forms/AddSongForm';
import EditSongForm from './Forms/EditSongForm';
import DeleteSongForm from './Forms/DeleteSongForm';
import AddQuestionForm from './Forms/AddQuestionForm';
import EditQuestionForm from './Forms/EditQuestionForm';
import DeleteQuestionForm from './Forms/DeleteQuestionForm';

function AdminDashboard() {
    // Stanja za podatke baze
    const [users, setUsers] = useState([]);
    const [songs, setSongs] = useState([]);
    const [responses, setResponses] = useState([]);
    const [emotions, setEmotions] = useState([]);
    const [questions, setQuestions] = useState([]);
    const [selectedData, setSelectedData] = useState([]);
    const [headers, setHeaders] = useState([]);

    // Stanja vidljivosti
    const [formVisibility, setFormVisibility] = useState({
        addSong: false,
        editSong: false,
        deleteSong: false,
        addQuestion: false,
        editQuestion: false,
        deleteQuestion: false,
    });

    const handleCloseForm = () => {
        setFormVisibility({
            addSong: false,
            editSong: false,
            deleteSong: false,
            addQuestion: false,
            editQuestion: false,
            deleteQuestion: false,
        });
    };

    // Dohvati data
    useEffect(() => {
        const fetchData = async () => {
            try {
                const [usersRes, songsRes, responsesRes, emotionsRes, questionsRes] = await Promise.all([
                    axios.get('http://localhost:8080/api/admin/users'),
                    axios.get('http://localhost:8080/api/admin/songs'),
                    axios.get('http://localhost:8080/api/admin/responses'),
                    axios.get('http://localhost:8080/api/emotions'),
                    axios.get('http://localhost:8080/api/admin/questions'),
                ]);

                setUsers(usersRes.data);
                setSongs(songsRes.data);
                setResponses(responsesRes.data);
                setEmotions(emotionsRes.data);
                setQuestions(questionsRes.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleButtonClick = (type) => {
        // Sakrij sve formove
        setFormVisibility({
            addSong: false,
            editSong: false,
            deleteSong: false,
            addQuestion: false,
            editQuestion: false,
            deleteQuestion: false,
        });

        let data = [];
        let headers = [];

        switch (type) {
            case 'users':
                data = users;
                headers = users.length > 0 ? Object.keys(users[0]) : [];
                break;
            case 'songs':
                data = songs.map(song => ({
                    pjesmaId: song.pjesmaId,
                    autor: song.autor,
                    naslov: song.naslov,
                    zanr: song.zanr,
                    emocijaId: song.emocija?.emocijaId || 'N/A',
                    url: song.url
                }));
                headers = ['pjesmaId', 'autor', 'naslov', 'zanr', 'emocijaId', 'url'];
                break;
            case 'responses':
                data = responses.map(response => ({
                    odazivId: response.odazivId,
                    korisnikId: response.korisnik.korisnikId,
                    odgovorId: response.odgovor.odgovorId,
                    pitanjeId: response.pitanje.pitanjeId,
                    pjesmaId: response.pjesma?.pjesmaId || 'N/A',
                    boja: response.boja || 'N/A',
                }));
                headers = ['odazivId', 'korisnikId', 'odgovorId', 'pitanjeId', 'pjesmaId', 'boja'];
                break;
            case 'emotions':
                data = emotions;
                headers = emotions.length > 0 ? Object.keys(emotions[0]) : [];
                break;
            case 'questions':
                data = questions;
                headers = questions.length > 0 ? Object.keys(questions[0]) : [];
                break;
            default:
                break;
        }

        setSelectedData(data);
        setHeaders(headers);
    };

    // Prikaz forma prema formType-u
    const showForm = (formType) => {
        // Sakrij sve formove
        setFormVisibility({
            addSong: false,
            editSong: false,
            deleteSong: false,
            addQuestion: false,
            editQuestion: false,
            deleteQuestion: false,
        });

        // Prikaz forma za botun
        setFormVisibility((prevState) => ({
            ...prevState,
            [formType]: true,
        }));
    };

    return (
        <div className="admin-dashboard-container">
            <div className="pozadina"></div>

            <img
                alt="Background Upper"
                className="background-upper"
                src="./photos/background-upper.png"
            />

            <div className="dashboard-content">
                <h1 className="dashboard-title">Admin Dashboard</h1>
                <p className="dashboard-description">
                    Dobrodosli na Admin Dashboard. Koristite ovu stranicu za pregled informacija.
                </p>

                <div className="admin-tools">
                    <button className="tool-button" onClick={() => handleButtonClick('users')}>
                        Pregled korisnika ({users.length})
                    </button>
                    <button className="tool-button" onClick={() => handleButtonClick('songs')}>
                        Pregled pjesama ({songs.length})
                    </button>
                    <button className="tool-button" onClick={() => handleButtonClick('responses')}>
                        Pregled odaziva ({responses.length})
                    </button>
                    <button className="tool-button" onClick={() => handleButtonClick('emotions')}>
                        Pregled emocija ({emotions.length})
                    </button>
                    <button className="tool-button" onClick={() => handleButtonClick('questions')}>
                        Pregled pitanja ({questions.length})
                    </button>
                </div>

                {/* Form botuni za pjesme */}
                {selectedData.length > 0 && (
                    <div className="form-buttons">
                        <button onClick={() => showForm('addSong')}>Add Song</button>
                        <button onClick={() => showForm('editSong')}>Edit Song</button>
                        <button onClick={() => showForm('deleteSong')}>Delete Song</button>
                    </div>
                )}

                {/* Form botuni za pitanja */}
                {selectedData.length > 0 && (
                    <div className="form-buttons">
                        <button onClick={() => showForm('addQuestion')}>Add Question</button>
                        <button onClick={() => showForm('editQuestion')}>Edit Question</button>
                        <button onClick={() => showForm('deleteQuestion')}>Delete Question</button>
                    </div>
                )}

                {/* Prikaz Formova */}
                {formVisibility.addSong && <AddSongForm handleClose={handleCloseForm} />}
                {formVisibility.editSong && <EditSongForm handleClose={handleCloseForm} />}
                {formVisibility.deleteSong && <DeleteSongForm handleClose={handleCloseForm} />}
                {formVisibility.addQuestion && <AddQuestionForm handleClose={handleCloseForm} />}
                {formVisibility.editQuestion && <EditQuestionForm handleClose={handleCloseForm} />}
                {formVisibility.deleteQuestion && <DeleteQuestionForm handleClose={handleCloseForm} />}

                {/* DataTable */}
                <div className="data-display">
                    {selectedData.length > 0 && <DataTable data={selectedData} headers={headers} />}
                </div>
            </div>
        </div>
    );
}

export default AdminDashboard;
