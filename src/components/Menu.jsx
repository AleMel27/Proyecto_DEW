import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo-zafiro.png";

const links = [
    { url: "/", nombre: "Inicio" },
    { url: "/reservas", nombre: "Reservas" },
    { url: "/login", nombre: "Iniciar sesión" }
];

export const Logo = () => (
    <NavLink to="/" className="me-2">
        <img src={logo} alt="logo" className="logo img-fluid" style={{ maxHeight: "50px" }} />
    </NavLink>
);

const NombreHotel = ({ titulo = "Hotel Zafiro" }) => (
    <NavLink to="/" className="text-decoration-none text-dark fw-bold h4 mb-0">
        {titulo}
    </NavLink>
);

export const Menu = () => {
    return (
        <nav className="bg-light border-bottom shadow-sm">
            <div className="container d-flex flex-wrap align-items-center py-2 gap-2">
                <div className="d-flex align-items-center">
                    <Logo />
                    <NombreHotel />
                </div>

                <div className="ms-auto d-flex flex-wrap gap-2">
                    {links.map(({ url, nombre }) => (
                        <NavLink
                            key={url}
                            to={url}
                            className="btn btn-sm btn-outline-primary text-nowrap"
                            style={{ minWidth: "100px" }}
                        >
                            {nombre}
                        </NavLink>
                    ))}
                </div>
            </div>
        </nav>
    );
};
