import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

function EditSongForm() {
    const [songData, setSongData] = useState({
        id: '',
        autor: '',
        naslov: '',
        zanr: '',
        emocija: '',
        url: '',
    });

    // Promjena polja
    const handleChange = (e) => {
        const { name, value } = e.target;
        setSongData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Updateaj pjesmu
            await axios.put(`http://localhost:8080/api/admin/songs/${songData.id}`, {
                autor: songData.autor,
                naslov: songData.naslov,
                zanr: songData.zanr,
                emocija: songData.emocija,
                url: songData.url,
            });
            alert('Song updated successfully!');
            window.location.reload(); 
        } catch (error) {
            console.error('Error updating song:', error);
            alert('Failed to update song. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <h3>Edit Song</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="id"
                    placeholder="Song ID"
                    value={songData.id}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="autor"
                    placeholder="Autor"
                    value={songData.autor}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="naslov"
                    placeholder="Naslov"
                    value={songData.naslov}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="zanr"
                    placeholder="Zanr"
                    value={songData.zanr}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="emocija"
                    placeholder="Emocija"
                    value={songData.emocija}
                    onChange={handleChange}
                    required
                />
                <input
                    type="text"
                    name="url"
                    placeholder="URL"
                    value={songData.url}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EditSongForm;
