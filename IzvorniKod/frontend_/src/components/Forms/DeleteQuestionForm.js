// DeleteQuestionForm.js
import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

function DeleteQuestionForm({ questionId}) {
    const [id, setId] = useState(questionId || '');

    const handleChange = (e) => {
        setId(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.delete(`http://localhost:8080/api/admin/questions/${id}`);
            alert('Question deleted successfully!');
            window.location.reload(); 
        } catch (error) {
            console.error('Error deleting question:', error);
        }
    };

    return (
        <div className="form-container">
            <h3>Delete Question</h3>
            <form onSubmit={handleSubmit}>
                <input
                    type="number"
                    name="questionId"
                    placeholder="Pitanje ID"
                    value={id}
                    onChange={handleChange}
                />
                <button type="submit">Delete</button>
            </form>
        </div>
    );
}

export default DeleteQuestionForm;
