import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Pocetna from './components/Pocetna';
import Form from "./components/Form";
import AdminDashboard from "./components/AdminDashboard";



function App() {
    return (
        <div className='App'>
            <BrowserRouter>
                <Routes>
                    <Route path="/" exact Component={Pocetna}></Route>
                    <Route path="/form" exact Component={Form}></Route>
                    <Route path="/admin-dashboard" exact Component={AdminDashboard}></Route>
                </Routes>

            </BrowserRouter>
        </div>
    );
}

export default App;
