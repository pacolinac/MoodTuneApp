import "./personalInfo.css"

function PersonalInfo({formData, setFormData}) {

    function handleChange(event) {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        })
    }
 
    return(
        <div className="wrapper">
            <h2>Osobni podatci</h2>

            <div>
                <p className="p">Godine:</p>
                <input 
                    className="age"
                    type="number"
                    name="dob"
                    onChange={handleChange}
                    ></input>
            </div>

            <div>
                <p className="p">Spol:</p>

                <div class="radio-group">
                    <div class="radio-container">
                        <input
                            type="radio"
                            name="spol"
                            value="musko"
                            id="musko"
                            onChange={handleChange}
                            checked={formData.spol === "musko"}
                        />
                        <label for="male">Muški</label>
                    </div>

                     <div class="radio-container">
                        <input
                            type="radio"
                            name="spol"
                            value="zensko"
                            id="zensko"
                            onChange={handleChange}
                            checked={formData.spol === "zensko"}
                        />
                        <label for="female">Ženski</label>
                    </div>
                </div>
            </div>

            
        </div>
    )
}

export default PersonalInfo;