import React, { useState } from "react";
import axios from "axios";

const Privole = () => {
    const [userForm, setUserForm] = useState({
        dob: "",
        spol: "",
        stanjePrije: "",
        stanjeZeljeno: "",
    });

    const [songForm, setSongForm] = useState({
        naslov: "",
        autor: "",
        zanr: "",
        url: "",
        emocija: "",
    });

    const spolOptions = ["muško", "žensko", "ostalo"];
    const stanjeOptions = ["tuzno", "sretno", "motivirano", "smireno"];

    const handleInputChange = (setForm) => (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (url, data, successMessage, errorMessage) => async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(url, data);
            console.log("Response:", response.data);
            alert(successMessage);
        } catch (error) {
            console.error(errorMessage, error);
            alert(errorMessage);
        }
    };

    return (
        <>
            {/* User Form */}
            <form
                onSubmit={handleSubmit(
                    "http://localhost:8080/api/users",
                    userForm,
                    "User data submitted successfully!",
                    "Failed to submit user data."
                )}
            >
                <h2>Personal Information</h2>
                <div>
                    <label htmlFor="dob">Age (Dob):</label>
                    <input
                        type="number"
                        id="dob"
                        name="dob"
                        value={userForm.dob}
                        onChange={handleInputChange(setUserForm)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="spol">Gender (Spol):</label>
                    <select
                        id="spol"
                        name="spol"
                        value={userForm.spol}
                        onChange={handleInputChange(setUserForm)}
                        required
                    >
                        <option value="">-- Select --</option>
                        {spolOptions.map((spol) => (
                            <option key={spol} value={spol}>
                                {spol}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="stanjePrije">Previous State:</label>
                    <select
                        id="stanjePrije"
                        name="stanjePrije"
                        value={userForm.stanjePrije}
                        onChange={handleInputChange(setUserForm)}
                        required
                    >
                        <option value="">-- Select --</option>
                        {stanjeOptions.map((stanje) => (
                            <option key={stanje} value={stanje}>
                                {stanje}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label htmlFor="stanjeZeljeno">Desired State:</label>
                    <select
                        id="stanjeZeljeno"
                        name="stanjeZeljeno"
                        value={userForm.stanjeZeljeno}
                        onChange={handleInputChange(setUserForm)}
                        required
                    >
                        <option value="">-- Select --</option>
                        {stanjeOptions.map((stanje) => (
                            <option key={stanje} value={stanje}>
                                {stanje}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>

            {/* Song Form */}
            <form
                onSubmit={handleSubmit(
                    "http://localhost:8080/api/admin/songs",
                    songForm,
                    "Song data submitted successfully!",
                    "Failed to submit song data."
                )}
            >
                <h2>Song Information</h2>
                <div>
                    <label htmlFor="naslov">Naslov:</label>
                    <input
                        type="text"
                        id="naslov"
                        name="naslov"
                        value={songForm.naslov}
                        onChange={handleInputChange(setSongForm)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="autor">Autor:</label>
                    <input
                        type="text"
                        id="autor"
                        name="autor"
                        value={songForm.autor}
                        onChange={handleInputChange(setSongForm)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="zanr">Žanr:</label>
                    <input
                        type="text"
                        id="zanr"
                        name="zanr"
                        value={songForm.zanr}
                        onChange={handleInputChange(setSongForm)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="url">URL:</label>
                    <input
                        type="url"
                        id="url"
                        name="url"
                        value={songForm.url}
                        onChange={handleInputChange(setSongForm)}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="emocija">Emocija:</label>
                    <select
                        id="emocija"
                        name="emocija"
                        value={songForm.emocija}
                        onChange={handleInputChange(setSongForm)}
                        required
                    >
                        <option value="">-- Select --</option>
                        {stanjeOptions.map((emocija) => (
                            <option key={emocija} value={emocija}>
                                {emocija}
                            </option>
                        ))}
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default Privole;
