import "./wannafeel.css"

function WannaFeel({formData, setFormData, page, setPage}) {


    function handleMotivatedW() {
        setFormData(prevFormData => ({
            ...prevFormData,
            stanjeZeljeno: "motiviran"
        }))
        setPage(prevPage => prevPage + 1)
        
    }
    function handleHappyW() {
        setFormData(prevFormData => ({
            ...prevFormData,
            stanjeZeljeno: "sretan"
        }))
        setPage(prevPage => prevPage + 1)
    }
    function handleSadW() {
        setFormData(prevFormData => ({
            ...prevFormData,
            stanjeZeljeno: "tuzan"
        }))
        setPage(prevPage => prevPage + 1)
    }
    function handleCalmW() {
        setFormData(prevFormData => ({
            ...prevFormData,
            stanjeZeljeno: "smiren"
        }))
        setPage(prevPage => prevPage + 1)
    }
    

    return(
        <div className="wrapper">
            <h2 className="question-wanna">2. Kako bi se željeli osjećati?</h2>

            <div className="choices-wrapper">
                <button className="motivated" onClick={handleMotivatedW}>motivirano</button>
                <button className="happy" onClick={handleHappyW}>sretno</button>
                <button className="sad" onClick={handleSadW}>tužno</button>
                <button className="calm" onClick={handleCalmW}>opušteno</button>
            </div>
        </div>
    )
}

export default WannaFeel;