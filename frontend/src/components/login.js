import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
    return (
        <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
            <form style={{ width: '80%', maxWidth: '400px' }}>
                <div className="header-text mb-4 text-center">
                    <h2>Login</h2>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="username">Usuario</label>
                    <input
                        type="text"
                        className="form-control form-control-lg bg-light fs-6"
                        id="username"
                        placeholder="Usuario"
                        autoComplete="on"
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="password">Contraseña</label>
                    <input
                        type="password"
                        className="form-control form-control-lg bg-light fs-6"
                        id="password"
                        placeholder="Contraseña"
                        autoComplete="on"
                    />
                </div>
                <Link to='/home'
                    type="submit"
                    className="btn btn-primary w-100"
                >
                    Iniciar Sesión
                </Link>
                <div className="row mt-3">
                    <small>
                        ¿No tiene una cuenta? <Link to="/register">Registrarse</Link>
                    </small>
                </div>
            </form>
        </div>
    );
}

export default Login;
