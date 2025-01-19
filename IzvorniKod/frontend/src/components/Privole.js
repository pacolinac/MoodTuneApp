import React, { useState } from 'react';
import axios from 'axios';

const Privole = () => {
    const [formData, setFormData] = useState({
        dob: '',
        spol: '',
        stanjePrije: '',
        stanjeZeljeno: '',
    });

    const [formData2, setFormData2] = useState({
        naslov: "",
        autor: "",
        zanr: "",
        url: "",
        emocija: {
            emocijaId: null,
            emocija: "",
        },
    });

    const handleChange2 = (e) => {
        const { name, value } = e.target;

        if (name.startsWith("emocija.")) {
            const emocijaField = name.split(".")[1];
            setFormData2({
                ...formData2,
                emocija: {
                    ...formData2.emocija,
                    [emocijaField]: value,
                },
            });
        } else {
            setFormData2({ ...formData2, [name]: value });
        }
    };

    const handleSubmit2 = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/api/admin/songs", formData2);
            console.log("Response:", response.data);
            alert("Form submitted successfully!");
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Error submitting form.");
        }
    };

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
        <>
            <form onSubmit={handleSubmit}>
                <h2>Personal Information</h2>

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
                        <option value="žensko">Female (žensko)</option>
                        <option value="ostalo">Other (Ostalo)</option>
                    </select>
                </div>

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
                        <option value="tuzan">Sad (Tuzan)</option>
                        <option value="sretan">Happy (Sretan)</option>
                        <option value="motiviran">Motivated (Motiviran)</option>
                        <option value="smiren">Calm (Smiren)</option>
                        <option value="drugo">Other (Drugo)</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="stanjeZeljeno">Desired State (Stanje Zeljeno):</label>
                    <select
                        id="stanjeZeljeno"
                        name="stanjeZeljeno"
                        value={formData.stanjeZeljeno}
                        onChange={handleChange}
                        required
                    >
                        <option value="">-- Select --</option>
                        <option value="tuzan">Sad (Tuzan)</option>
                        <option value="sretan">Happy (Sretan)</option>
                        <option value="motiviran">Motivated (Motiviran)</option>
                        <option value="smiren">Calm (Smiren)</option>
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>

            <form onSubmit={handleSubmit2}>
                <div>
                    <label htmlFor="naslov">Naslov:</label>
                    <input
                        type="text"
                        id="naslov"
                        name="naslov"
                        value={formData2.naslov}
                        onChange={handleChange2}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="autor">Autor:</label>
                    <input
                        type="text"
                        id="autor"
                        name="autor"
                        value={formData2.autor}
                        onChange={handleChange2}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="zanr">Žanr:</label>
                    <input
                        type="text"
                        id="zanr"
                        name="zanr"
                        value={formData2.zanr}
                        onChange={handleChange2}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="url">URL:</label>
                    <input
                        type="url"
                        id="url"
                        name="url"
                        value={formData2.url}
                        onChange={handleChange2}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="emocijaId">Emocija ID:</label>
                    <input
                        type="number"
                        id="emocijaId"
                        name="emocija.emocijaId"
                        value={formData2.emocija.emocijaId || ""}
                        onChange={handleChange2}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="emocija">Emocija:</label>
                    <input
                        type="text"
                        id="emocija"
                        name="emocija.emocija"
                        value={formData2.emocija.emocija}
                        onChange={handleChange2}
                        required
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Privole;
