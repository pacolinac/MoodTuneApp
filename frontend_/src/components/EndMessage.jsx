import { useNavigate } from 'react-router-dom';
import "./endmessage.css"

function EndMessage() {

    const navigate = useNavigate()

    function handleAgain() {
        navigate("/")
    }

      const handleShare = async () => {
        if (navigator.share) {
          try {
            await navigator.share({
              title: "Check out this webpage!",
              text: "I found this interesting page, take a look!",
              url: `${window.location.origin}/`, 
            });
            console.log("Page shared successfully!");
          } catch (error) {
            console.error("Error sharing the page:", error);
          }
        } else {
          alert("Sharing is not supported on this browser.");
        }
      };

    return(
        <div>
            <h1 className='message'>Hvala na sudjelovanju :D</h1>
            <p className='success'>Vaši odgovori su uspješno pohranjeni</p>
            <div className='gumbovi'>
                <button className="redo" onClick={handleAgain}>Ponovno pokreni test</button>
                <button className='share' onClick={handleShare}>Podijeli!</button>
            </div>
        </div>
    )
}

export default EndMessage;