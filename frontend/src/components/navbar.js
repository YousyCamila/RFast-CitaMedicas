import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light w-100">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">HealthLink</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/patients">Pacientes</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/doctores">Doctores</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/citas">Citas Médicas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/historial">Historial de Interacciones</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
