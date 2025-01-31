import React, { useEffect, useState } from "react";
import pozadina from "../assets/pozadina.png";
import "./Odazivi.css";
import { Link } from "react-router-dom";
import axios from "axios";

function Odazivi() {
  const [odazivi, setOdazivi] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchOdazive() {
      setError("");
      try {
        const response = await axios.get("/api/admin/responses");
        setOdazivi(response.data);
      } catch (error) {
        setError("Greška pri dohvaćanju podataka!");
      }
    }
    fetchOdazive();
  }, []);

  // grupiraj odgovore po korisniku
  const groupedResponses = odazivi.reduce((groups, response) => {
    const userId = response.korisnik.korisnikId;
    if (!groups[userId]) {
      groups[userId] = [];
    }
    groups[userId].push(response);
    return groups;
  }, {});

  return (
    <div>
      <img className="backgroundimg" src={pozadina} alt=""></img>
      <div className="linkheader">
        <Link to={"/admin"} className="logic">
          <header>MoodTune</header>
        </Link>
      </div>
      <div className="responselist">
        {Object.keys(groupedResponses).map((userId) => (
          <div key={userId} className="userresponses">
            <div className="responsecard">
              <h3>Korisnik ID: {userId}</h3>
              {groupedResponses[userId].map((response, index) => (
                <div key={index}>
                  {response.preListening ? (
                    <>
                      <p>
                        <span>Dob: </span>
                        {response.korisnik.dob}
                      </p>
                      <p>
                        <span>Spol: </span>
                        {response.korisnik.spol === "zensko"
                          ? "ženski"
                          : "muški"}
                      </p>
                      <p>
                        <span>Početno stanje: </span>
                        {response.korisnik.stanjePrije === "sretan"
                          ? "sretno"
                          : response.korisnik.stanjePrije === "tuzan"
                          ? "tužno"
                          : response.korisnik.stanjePrije === "smiren"
                          ? "opušteno"
                          : response.korisnik.stanjePrije === "motiviran"
                          ? "motivirano"
                          : response.korisnik.stanjePrije}
                      </p>
                      <p>
                        <span>Diferencijal početnog stanja: </span>
                        {response.odgovor.vrijednost}
                      </p>
                      <p>
                        <span>Željeno stanje: </span>
                        {response.korisnik.stanjeZeljeno === "sretan"
                          ? "sretno"
                          : response.korisnik.stanjeZeljeno === "tuzan"
                          ? "tužno"
                          : response.korisnik.stanjeZeljeno === "smiren"
                          ? "opušteno"
                          : response.korisnik.stanjeZeljeno === "motiviran"
                          ? "motivirano"
                          : response.korisnik.stanjeZeljeno}
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        <span>Odslušana pjesma: </span>"{response.pjesma.autor}{" "}
                        - {response.pjesma.naslov}"
                      </p>
                      <p>
                        <span>Konačno stanje: </span>
                        {response.pitanje.pitanjeId === 1
                          ? "tužno"
                          : response.pitanje.pitanjeId === 2
                          ? "sretno"
                          : response.pitanje.pitanjeId === 3
                          ? "motivirano"
                          : response.pitanje.pitanjeId === 4
                          ? "opušteno"
                          : ""}
                      </p>
                      <p>
                        <span>Diferencijal konačnog stanja: </span>
                        {response.odgovor.vrijednost}
                      </p>
                      <p className="odazivboja">
                        <span>Boja:</span>
                        {response.boja === "white" && (
                          <span
                            style={{
                              display: "inline-block",
                              width: "20px",
                              height: "20px",
                              backgroundColor: "white",
                              border: "1px solid #000",
                              marginLeft: "5px",
                            }}
                          ></span>
                        )}
                        {response.boja === "žuta" && (
                          <span
                            style={{
                              display: "inline-block",
                              width: "20px",
                              height: "20px",
                              backgroundColor: "yellow",
                              border: "1px solid #000",
                              marginLeft: "5px",
                            }}
                          ></span>
                        )}
                        {response.boja === "narančasta" && (
                          <span
                            style={{
                              display: "inline-block",
                              width: "20px",
                              height: "20px",
                              backgroundColor: "orange",
                              border: "1px solid #000",
                              marginLeft: "5px",
                            }}
                          ></span>
                        )}
                        {response.boja === "crvena" && (
                          <span
                            style={{
                              display: "inline-block",
                              width: "20px",
                              height: "20px",
                              backgroundColor: "red",
                              border: "1px solid #000",
                              marginLeft: "5px",
                            }}
                          ></span>
                        )}
                        {response.boja === "ljubičasta" && (
                          <span
                            style={{
                              display: "inline-block",
                              width: "20px",
                              height: "20px",
                              backgroundColor: "purple",
                              border: "1px solid #000",
                              marginLeft: "5px",
                            }}
                          ></span>
                        )}
                        {response.boja === "rozasta" && (
                          <span
                            style={{
                              display: "inline-block",
                              width: "20px",
                              height: "20px",
                              backgroundColor: "pink",
                              border: "1px solid #000",
                              marginLeft: "5px",
                            }}
                          ></span>
                        )}
                        {response.boja === "plava" && (
                          <span
                            style={{
                              display: "inline-block",
                              width: "20px",
                              height: "20px",
                              backgroundColor: "blue",
                              border: "1px solid #000",
                              marginLeft: "5px",
                            }}
                          ></span>
                        )}
                        {response.boja === "tirkizna" && (
                          <span
                            style={{
                              display: "inline-block",
                              width: "20px",
                              height: "20px",
                              backgroundColor: "turquoise",
                              border: "1px solid #000",
                              marginLeft: "5px",
                            }}
                          ></span>
                        )}
                        {response.boja === "zelena" && (
                          <span
                            style={{
                              display: "inline-block",
                              width: "20px",
                              height: "20px",
                              backgroundColor: "green",
                              border: "1px solid #000",
                              marginLeft: "5px",
                            }}
                          ></span>
                        )}
                        {response.boja === "crna" && (
                          <span
                            style={{
                              display: "inline-block",
                              width: "20px",
                              height: "20px",
                              backgroundColor: "black",
                              border: "1px solid #000",
                              marginLeft: "5px",
                            }}
                          ></span>
                        )}
                        {"    "}
                        {"("}
                        {response.boja === "white" ? "bijela" : response.boja}
                        {")"}
                      </p>
                      <p>
                        <span>Uspjeh: </span>
                        {(response.korisnik.stanjeZeljeno === "sretan" &&
                          response.pitanje.pitanjeId === 2) ||
                        (response.korisnik.stanjeZeljeno === "tuzan" &&
                          response.pitanje.pitanjeId === 1) ||
                        (response.korisnik.stanjeZeljeno === "smiren" &&
                          response.pitanje.pitanjeId === 4) ||
                        (response.korisnik.stanjeZeljeno === "motiviran" &&
                          response.pitanje.pitanjeId === 3)
                          ? "Da"
                          : "Ne"}
                      </p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
        {error && <p className="error">{error}</p>}
      </div>
    </div>
  );
}

export default Odazivi;
