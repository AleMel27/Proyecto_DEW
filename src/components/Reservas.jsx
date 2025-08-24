import { useState } from "react";
import { Campos } from "../data/componentes_reservas";

export const Reservas = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        telefono: "",
        entrada: "",
        salida: "",
        habitacion: "",
        huespedes: 1
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Datos de la reserva:", formData)
        alert("Reserva enviada ✅")
    }

    return (
        <div className="container my-5">
            <div className="card shadow-lg border-0 rounded-4">
                <div className="card-body p-5" style={{ backgroundColor: "#f8f9fa" }}>
                    <h2 className="text-center mb-4" style={{ color: "#0d6efd" }}>Reserva de Hotel Zafiro</h2>

                    <form onSubmit={handleSubmit}>
                        <div className="row g-4">
                            {Campos.map((campo) => (
                                <div className="col-md-6" key={campo.name}>
                                    <label className="form-label fw-semibold">{campo.label}</label>
                                    <input
                                        type={campo.type}
                                        name={campo.name}
                                        value={formData[campo.name]}
                                        onChange={handleChange}
                                        required
                                        className="form-control form-control-lg shadow-sm"
                                        {...(campo.min && { min: campo.min })}
                                        {...(campo.max && { max: campo.max })}
                                    />
                                </div>
                            ))}

                            <div className="col-12">
                                <label className="form-label fw-semibold mb-2">Tipo de habitación:</label>
                                <div className="d-flex gap-3">
                                    {["Simple", "Doble", "De Lujo"].map((opcion) => (
                                        <div className="form-check form-check-inline" key={opcion}>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="habitacion"
                                                id={`habitacion-${opcion}`}
                                                value={opcion}
                                                checked={formData.habitacion === opcion}
                                                onChange={handleChange}
                                            />
                                            <label className="form-check-label" htmlFor={`habitacion-${opcion}`}>
                                                {opcion}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="col-12 text-center mt-4">
                                <button type="submit" className="btn btn-primary btn-lg px-5 shadow-sm" style={{ borderRadius: "50px" }}>
                                    Reservar
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}