import React, { useState } from 'react';
import axios from 'axios';
import './Form.css';

function EditQuestionForm() {
    const [questionData, setQuestionData] = useState({
        id: '',
        tekst: '',
    });

    // Promjena polja
    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuestionData((prevData) => ({ ...prevData, [name]: value }));
    };

    // Submit
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Updateja pitanje
            await axios.put(`http://localhost:8080/api/admin/questions/${questionData.id}`, {
                tekst: questionData.tekst,
            });
            console.log(questionData.id + " " + questionData.tekst)
            alert('Question updated successfully!');
            window.location.reload(); 
        } catch (error) {
            console.error('Error updating question:', error);
            alert('Failed to update question. Please try again.');
        }
    };

    return (
        <div className="form-container">
            <h3>Edit Question</h3>
            <form onSubmit={handleSubmit}>
             
                <input
                    type="text"
                    name="id"
                    placeholder="Question ID"
                    value={questionData.id}
                    onChange={handleChange}
                    required
                />
                
                <input
                    type="text"
                    name="tekst"
                    placeholder="Question Text"
                    value={questionData.tekst}
                    onChange={handleChange}
                    required
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default EditQuestionForm;
