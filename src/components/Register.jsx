import React, { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaLock } from "react-icons/fa";

export const Register = () => {
    const [formData, setFormData] = useState({
        nombres: "",
        apellidos: "",
        email: "",
        telefono: "",
        contrasena: "",
        confirmarContrasena: "",
    })

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        })
    }

    const inputs = [
        { type: "text", name: "nombres", placeholder: "Nombres", icon: <FaUser /> },
        { type: "text", name: "apellidos", placeholder: "Apellidos", icon: <FaUser /> },
        { type: "email", name: "email", placeholder: "Correo", icon: <FaEnvelope /> },
        { type: "tel", name: "telefono", placeholder: "Teléfono", icon: <FaPhone /> },
        { type: "password", name: "contrasena", placeholder: "Contraseña", icon: <FaLock /> },
        { type: "password", name: "confirmarContrasena", placeholder: "Confirmar contraseña", icon: <FaLock /> },
    ]

    const handleSubmit = (e) => {
        e.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const telefonoRegex = /^\d{9}$/;


        const nombres = formData.nombres.trim();
        const apellidos = formData.apellidos.trim();
        const email = formData.email.trim();
        const telefono = formData.telefono.trim();
        const contrasena = formData.contrasena.trim();
        const confirmarContrasena = formData.confirmarContrasena.trim();


        if (!nombres || !apellidos || !email || !telefono || !contrasena || !confirmarContrasena) {
            alert("⚠️ Todos los campos son obligatorios");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("⚠️ El correo no es válido");
            return;
        }

        if (!telefonoRegex.test(telefono)) {
            alert("⚠️ El teléfono no es válido, debe tener 9 dígitos");
            return;
        }

        if (contrasena !== confirmarContrasena) {
            alert("⚠️ Las contraseñas no coinciden");
            return;
        }

        alert("✅ Registro exitoso (ejemplo)");

        const usuario = { nombres, apellidos, email, telefono, contrasena };
        localStorage.setItem("usuario", JSON.stringify(usuario));

        setFormData({
            nombres: "",
            apellidos: "",
            email: "",
            telefono: "",
            contrasena: "",
            confirmarContrasena: "",
        })
    }

    return (
        <div className="container my-5">
            <div className="row justify-content-center">
                <div className="col-12 col-sm-10 col-md-8 col-lg-6">
                    <div className="card shadow-lg p-4 rounded-4">
                        <h3 className="text-center mb-4 fw-bold text-primary">Regístrate</h3>
                        <p className="text-center text-muted mb-4">
                            Completa tus datos para registrarte en <strong>Hotel Zafiro</strong>.
                        </p>

                        <form onSubmit={handleSubmit}>
                            {
                                inputs.map((input) => (
                                    <div key={input.name} className="input-group mb-3">
                                        <span className="input-group-text bg-primary text-white">{input.icon}</span>
                                        <input
                                            type={input.type}
                                            name={input.name}
                                            placeholder={input.placeholder}
                                            value={formData[input.name]}
                                            onChange={handleChange}
                                            className="form-control"
                                            required
                                        />
                                    </div>
                                ))
                            }

                            <button type="submit" className="btn btn-primary w-100 py-2 fw-bold rounded-3">
                                Registrarse
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
