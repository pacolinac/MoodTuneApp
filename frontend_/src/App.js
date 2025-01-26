import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Pocetna from './components/pocetna';
import Form from "./components/Form";
import Login from "./components/Login.jsx";
import Admin from "./components/Admin.jsx";
import Odazivi from "./components/Odazivi.jsx";
import Pjesme from "./components/Pjesme.jsx";
import DodajPjesmu from "./components/DodajPjesmu.jsx";
import PjesmeOpustajuce from "./components/PjesmeOpustajuce.jsx";
import PjesmeMotivacijske from "./components/PjesmeMotivacijske.jsx";
import PjesmeSretne from "./components/PjesmeSretne.jsx";
import PjesmeTuzne from "./components/PjesmeTuzne.jsx";
import UrediPjesmu from "./components/UrediPjesmu.jsx"


function App() {

  // stanje za praćenje prijavljenosti korisnika
  const [jeUlogiran, setJeUlogiran] = React.useState(() => {
    return localStorage.getItem("jeUlogiran") === "true";
  });
  
  // funkcija koja se poziva kada se korisnik uspješno prijavi
  function onLogin() {
    setJeUlogiran(true);
    localStorage.setItem("jeUlogiran", "true");
  }
  
  // funkcija koja se poziva kada se korisnik uspješno odjavi
  function onLogout() {
    setJeUlogiran(false);
    localStorage.setItem("jeUlogiran", "false");
  }

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" exact Component={({...props}) => <Pocetna jeUlogiran={jeUlogiran} {...props}/>} />
          <Route path="/form" exact Component={Form}></Route>
          <Route path="/login" exact Component={() => <Login onLogin={onLogin} />} />
          <Route path="/admin" exact Component={({...props}) => <Admin onLogout={onLogout} jeUlogiran={jeUlogiran} {...props}/>} />
          <Route path="/admin/odazivi" exact Component={Odazivi}></Route>
          <Route path="/admin/pjesme" exact Component={Pjesme}></Route>
          <Route path="/admin/pjesme/opustajuce" exact Component={PjesmeOpustajuce}></Route>
          <Route path="/admin/pjesme/motivacijske" exact Component={PjesmeMotivacijske}></Route>
          <Route path="/admin/pjesme/sretne" exact Component={PjesmeSretne}></Route>
          <Route path="/admin/pjesme/tuzne" exact Component={PjesmeTuzne}></Route>
          <Route path="/admin/dodajPjesmu" exact Component={DodajPjesmu}></Route>
          <Route path="/admin/urediPjesmu/:id" exact Component={UrediPjesmu}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
