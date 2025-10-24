import React from 'react';
//import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router, Link, Route, Routes, NavLink } from 'react-router-dom';
import { http } from './http';
import Pagex from './pages/pageX';
import Pagey from './pages/pageY';

export default function Main() {
    return <header>
        <h1>Aloitus sivusto</h1>
        <Router>
            <div>
                <nav>
                    <div>
                        <> <NavLink to="/" activeclassname='selectedNav'>Koti</NavLink></>
                        <> <NavLink to="/pagex" activeclassname='selectedNav'>PageX</NavLink></>
                        <> <NavLink to="/pagey" activeclassname='selectedNav'>PageY</NavLink></>
                    </div>
                </nav>
                <Routes>
                    <Route path="/pagey/*" element={<Pagey />} />
                    <Route path="/pagex/*" element={<Pagex />} />
                    <Route path="/" element={<Home />} />
                </Routes>
            </div>
        </Router>
    </header>
}

function Home() {
    return <header>
        <h2>Homee</h2>
    </header>
}

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <Main />
    </React.StrictMode>
);