// AddQuestionForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';


function AddQuestionForm() {
    const [questionData, setQuestionData] = useState({ tekst: '' });

    const handleChange = (e) => {
        setQuestionData({ tekst: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8080/api/admin/questions', questionData);
            console.log("Pitanje: ",questionData);
            alert('Question added successfully!');
            window.location.reload(); 
        } catch (error) {
            console.error('Error adding question:', error);
        }
    };

    return (
        <div className="form-container">
            <h3>Add Question</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="tekst"
                    placeholder="Question Text"
                    value={questionData.tekst}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddQuestionForm;
