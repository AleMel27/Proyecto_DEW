import React from "react";
import { NavLink } from "react-router-dom";
import { Compañia, Contactanos, Redes } from "../data/componentes_pie";
import { Logo } from "./Menu";

export const Pie = () => {
    const a = new Date().getFullYear()

    return (
        <footer className="bg-light text-dark pt-5 border-top">
            <div className="container">
                <div className="row gy-4">

                    <div className="col-12 col-md-4 text-center text-md-start">
                        <div className="d-flex align-items-center justify-content-center justify-content-md-start gap-2 mb-3">
                            <Logo />
                            <h2 className="h5 mb-0 fw-bold">Hotel Zafiro</h2>
                        </div>
                        <p className="small text-muted">
                            Tu lugar de descanso y comodidad. Vive la experiencia Zafiro.
                        </p>
                    </div>

                    <div className="col-12 col-md-2 text-center text-md-start">
                        <h5 className="fw-bold mb-3">Compañía</h5>
                        <ul className="list-unstyled">
                            {Compañia.map((compa, i) => (
                                <li key={i}>
                                    <NavLink
                                        to={compa.url}
                                        className="text-decoration-none text-dark small d-block mb-2"
                                    >
                                        {compa.nombre}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-12 col-md-3 text-center text-md-start">
                        <h5 className="fw-bold mb-3">Contáctanos</h5>
                        <ul className="list-unstyled">
                            {Contactanos.map((contac, i) => (
                                <li key={i}>
                                    <NavLink
                                        to={contac.url}
                                        className="text-decoration-none text-dark small d-block mb-2"
                                    >
                                        {contac.nombre}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="col-12 col-md-3 text-center text-md-start">
                        <h5 className="fw-bold mb-3">Conectemos</h5>
                        <div className="d-flex justify-content-center justify-content-md-start gap-3">
                            {Redes.map((rs, i) => (
                                <a
                                    key={i}
                                    href={rs.enlace}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="text-dark fs-5"
                                >
                                    <p className={rs.nombreClase}></p>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="text-center mt-4 pt-3 border-top">
                    <span className="small text-muted">
                        © {a} Hotel Zafiro - Todos los derechos reservados
                    </span>
                </div>
            </div>
        </footer>
    )
}