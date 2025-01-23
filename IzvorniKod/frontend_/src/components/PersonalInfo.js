import "./PersonalInfo.css";

function PersonalInfo({ user, setUser }) {
    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <div className="wrapper">
            <h2 className="question">Personal Info</h2>
            <form>
                <label htmlFor="dob">Age:</label>
                <input
                    type="number"
                    id="dob"
                    name="dob"  // Make sure the name is 'dob' since you are setting 'dob' in the user state
                    value={user.dob} // Make sure it's 'dob' as per the state
                    onChange={handleChange}
                />
                <label htmlFor="spol">Gender:</label>
                <select
                    id="spol"
                    name="spol"  // 'spol' is the correct name here, as per the state
                    value={user.spol}  // Make sure it's 'spol' as per the state
                    onChange={handleChange}
                >
                    <option value="">Select</option>
                    <option value="musko">Male</option>
                    <option value="zensko">Female</option>
                    <option value="ostalo">Other</option>
                </select>
            </form>
        </div>
    );
}

export default PersonalInfo;
