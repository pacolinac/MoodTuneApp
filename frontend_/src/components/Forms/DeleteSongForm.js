// DeleteSongForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

function DeleteSongForm({ songId}) {
    const [id, setId] = useState(songId || '');

    const handleChange = (e) => {
        setId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:8080/api/admin/songs/${id}`);
            alert('Song deleted successfully!');
            window.location.reload(); 
        } catch (error) {
            console.error('Error deleting song:', error);
        }
    };

    return (
        <div className="form-container">
            <h3>Delete Song</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="songId"
                    placeholder="Pjesma ID"
                    value={id}
                    onChange={handleChange}
                />
                <button type="submit">Delete</button>
            </form>
        </div>
    );
}

export default DeleteSongForm;
