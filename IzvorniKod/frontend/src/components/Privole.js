
import React, { useState } from 'react';
import axios from 'axios';

const Privole = () => {
    const [formData, setFormData] = useState({
        dob: '',
        spol: '',
        stanjePrije: '',
        stanjeZeljeno: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users', formData);
            alert('Data submitted successfully!');
            console.log(response.data);
        } catch (error) {
            console.error('Error submitting data:', error);
            alert('Failed to submit data.');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Personal Information</h2>

            {/* Dob */}
            <div>
                <label htmlFor="dob">Age (Dob):</label>
                <input
                    type="number"
                    id="dob"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                />
            </div>

            {/* Spol */}
            <div>
                <label htmlFor="spol">Gender (Spol):</label>
                <select
                    id="spol"
                    name="spol"
                    value={formData.spol}
                    onChange={handleChange}
                    required
                >
                    <option value="">-- Select --</option>
                    <option value="muško">Male (Muško)</option>
                    <option value="žensko">Female (Žensko)</option>
                    <option value="ostalo">Other (Ostalo)</option>
                </select>
            </div>

            {/* StanjePrije */}
            <div>
                <label htmlFor="stanjePrije">Previous State (Stanje Prije):</label>
                <select
                    id="stanjePrije"
                    name="stanjePrije"
                    value={formData.stanjePrije}
                    onChange={handleChange}
                    required
                >
                    <option value="">-- Select --</option>
                    <option value="tuzan">Sad (Tužan)</option>
                    <option value="sretan">Happy (Sretan)</option>
                    <option value="motiviran">Motivated (Motiviran)</option>
                    <option value="smiren">Calm (Smiren)</option>
                    <option value="drugo">Other (Drugo)</option>
                </select>
            </div>

            {/* StanjeZeljeno */}
            <div>
                <label htmlFor="stanjeZeljeno">Desired State (Stanje Željeno):</label>
                <select
                    id="stanjeZeljeno"
                    name="stanjeZeljeno"
                    value={formData.stanjeZeljeno}
                    onChange={handleChange}
                    required
                >
                    <option value="">-- Select --</option>
                    <option value="tuzan">Sad (Tužan)</option>
                    <option value="sretan">Happy (Sretan)</option>
                    <option value="motiviran">Motivated (Motiviran)</option>
                    <option value="smiren">Calm (Smiren)</option>
                </select>
            </div>

            <button type="submit">Submit</button>
        </form>
    );
};

export default Privole;
