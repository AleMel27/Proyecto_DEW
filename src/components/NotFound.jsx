import React from "react";
import { NavLink } from "react-router-dom";

export const NotFound = () => {
    return (
        <section className="container text-center my-5">
            <div className="p-5 bg-light border rounded shadow-sm">
                <h1 className="display-3 text-danger fw-bold">404</h1>
                <h4 className="mb-3">Página no encontrada</h4>
                <p className="text-muted mb-4">
                    La ruta a la que intentas acceder no existe.
                    Puede que hayas escrito mal la dirección o la página fue movida.
                </p>

                <div className="d-flex justify-content-center gap-3">
                    <NavLink to="/" className="btn btn-primary">
                        ⬅️ Ir al inicio
                    </NavLink>
                    <NavLink to="/reservas" className="btn btn-outline-secondary">
                        Ver reservas
                    </NavLink>
                </div>
            </div>
        </section>
    );
};