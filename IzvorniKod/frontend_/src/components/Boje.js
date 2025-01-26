import "./boje.css"

function Boje({ setOdazivPost}) {


    function handleColor(event) {

        setOdazivPost(prevOdazivPost => ({
            ...prevOdazivPost,
            boja: event.target.value
        }))
        
    }

    return(
        <div>
            <h2 className="question-after">4. Koja boja najviše opisuje vašu emociju?</h2>

            <div className="colors-grid">
            <button className="white" style={{backgroundColor: "white"}} value="white" onClick={handleColor}></button>
            <button className="white" style={{backgroundColor: "yellow"}} value="žuta" onClick={handleColor}></button>
            <button className="white" style={{backgroundColor: "orange"}} value="narančasta" onClick={handleColor}></button>
            <button className="white" style={{backgroundColor: "red"}} value="crvena" onClick={handleColor}></button>
            <button className="white" style={{backgroundColor: "purple"}} value="ljubičasta" onClick={handleColor}></button>
            <button className="white" style={{backgroundColor: "pink"}} value="rozasta" onClick={handleColor}></button>
            <button className="white" style={{backgroundColor: "blue"}} value="plava" onClick={handleColor}></button>
            <button className="white" style={{backgroundColor: "turquoise"}} value="tirkizna" onClick={handleColor}></button>
            <button className="white" style={{backgroundColor: "green"}} value="zelena" onClick={handleColor}></button>
            <button className="white" style={{backgroundColor: "black"}} value="crna" onClick={handleColor}></button>
        </div>
        </div>
        
    )
}

export default Boje;
