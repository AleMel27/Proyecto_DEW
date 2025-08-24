import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Componente Input reutilizable
const Input = ({ label, type, value, onChange, placeholder }) => (
    <div className="mb-3">
        {label && <label className="form-label">{label}</label>}
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className="form-control"
        />
    </div>
);

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({ email, password });
    };

    return (
        <div className="container mt-5 mb-5" style={{ maxWidth: "400px" }}>
            <div className="card shadow-sm p-4">
                <h2 className="mb-4 text-center">Iniciar Sesión</h2>
                <form onSubmit={handleSubmit}>
                    <Input
                        label="Correo electrónico"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="ejemplo@correo.com"
                    />
                    <Input
                        label="Contraseña"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button type="submit" className="btn btn-primary w-100">
                        Ingresar
                    </button>
                </form>
                <p className="mt-3 text-center small">
                    ¿No tienes cuenta?{" "}
                    <NavLink to="/register" className="text-primary text-decoration-none">
                        Regístrate
                    </NavLink>
                </p>
            </div>
        </div>
    )
}
