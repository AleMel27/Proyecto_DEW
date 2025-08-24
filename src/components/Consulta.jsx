import React, { useState } from "react";

export const Consultas = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [consultas, setConsultas] = useState([]);
    const [alerta, setAlerta] = useState({ tipo: "", mensaje: "" });

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nombre || !email || !mensaje) {
            setAlerta({
                tipo: "danger",
                mensaje: "⚠️ Todos los campos son obligatorios",
            });
            return;
        }

        // Crear nueva consulta
        const nuevaConsulta = {
            nombre,
            email,
            mensaje,
            fecha: new Date().toLocaleString(),
        };

        setConsultas([...consultas, nuevaConsulta]);
        setNombre("");
        setEmail("");
        setMensaje("");
        setAlerta({ tipo: "success", mensaje: "✅ Consulta enviada correctamente" });
    };

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow p-4">
                        <h3 className="text-center mb-4">Consultas</h3>

                        {alerta.mensaje && (
                            <div className={`alert alert-${alerta.tipo}`} role="alert">
                                {alerta.mensaje}
                            </div>
                        )}

                        <form onSubmit={handleSubmit}>
                            {/* Nombre */}
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={nombre}
                                    onChange={(e) => setNombre(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Correo */}
                            <div className="mb-3">
                                <label className="form-label">Correo electrónico</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                            </div>

                            {/* Mensaje */}
                            <div className="mb-3">
                                <label className="form-label">Mensaje</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={mensaje}
                                    onChange={(e) => setMensaje(e.target.value)}
                                    required
                                ></textarea>
                            </div>

                            {/* Botón */}
                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">
                                    Enviar Consulta
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* Lista de consultas */}
            {consultas.length > 0 && (
                <div className="row justify-content-center mt-5">
                    <div className="col-md-8">
                        <h4 className="mb-3">Historial de consultas</h4>
                        <ul className="list-group">
                            {consultas.map((c, i) => (
                                <li key={i} className="list-group-item">
                                    <strong>{c.nombre}</strong> ({c.email})
                                    <br />
                                    {c.mensaje}
                                    <br />
                                    <small className="text-muted">{c.fecha}</small>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
};
