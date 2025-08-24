import React, { useState } from "react";

export const Resena = () => {
    const [resenas, setResenas] = useState([
        {
            nombre: "Ana López",
            comentario: "Excelente atención y habitaciones muy cómodas. ¡Volveré sin duda!",
            fecha: new Date().toLocaleDateString(),
        },
        {
            nombre: "Carlos Fernández",
            comentario: "La comida estuvo deliciosa y el servicio fue impecable.",
            fecha: new Date().toLocaleDateString(),
        },
        {
            nombre: "María Rodríguez",
            comentario: "Un lugar muy acogedor, perfecto para descansar en familia.",
            fecha: new Date().toLocaleDateString(),
        },
    ])

    const [nuevoNombre, setNuevoNombre] = useState("")
    const [nuevoComentario, setNuevoComentario] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!nuevoNombre.trim() || !nuevoComentario.trim()) return

        const nuevaResena = {
            nombre: nuevoNombre,
            comentario: nuevoComentario,
            fecha: new Date().toLocaleDateString(),            
        }

        setResenas([...resenas, nuevaResena])
        setNuevoNombre("");
        setNuevoComentario("");
    }

    return (
        <div className="container my-5">
            <h3 className="text-center mb-4">Reseñas de nuestros clientes</h3>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    <ul className="list-group mb-4">
                        {resenas.map((r, i) => (
                            <li key={i} className="list-group-item">
                                <strong>{r.nombre}</strong> <br />
                                <span>{r.comentario}</span> <br />
                                <small className="text-muted">{r.fecha}</small>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow p-4">
                        <h5 className="mb-3">Escribe tu reseña</h5>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <label className="form-label">Nombre</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={nuevoNombre}
                                    onChange={(e) => setNuevoNombre(e.target.value)}
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label className="form-label">Comentario</label>
                                <textarea
                                    className="form-control"
                                    rows="3"
                                    value={nuevoComentario}
                                    onChange={(e) => setNuevoComentario(e.target.value)}
                                    required
                                    placeholder="Escribe tu experiencia aquí"
                                ></textarea>
                            </div>

                            <div className="d-grid">
                                <button type="submit" className="btn btn-primary">
                                    Enviar Reseña
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
