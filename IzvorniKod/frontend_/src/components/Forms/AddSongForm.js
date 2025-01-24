import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

function AddSongForm() {
    const [songData, setSongData] = useState({
        autor: '',
        naslov: '',
        zanr: '',
        emocija: '',
        url: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSongData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/admin/songs', songData);
            alert('Song added successfully!');
            window.location.reload(); 
        } catch (error) {
            console.error('Error adding song:', error);
        }
    };

    return (
        <div className="form-container">
            <h3>Add Song</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="autor"
                    placeholder="Autor"
                    value={songData.autor}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="naslov"
                    placeholder="Naslov"
                    value={songData.naslov}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="zanr"
                    placeholder="Zanr"
                    value={songData.zanr}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="emocija"
                    placeholder="Emocija"
                    value={songData.emocija}
                    onChange={handleChange}
                />
                <input
                    type="text"
                    name="url"
                    placeholder="URL"
                    value={songData.url}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddSongForm;
