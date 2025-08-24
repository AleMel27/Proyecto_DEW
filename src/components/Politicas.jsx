import React, { useState, useRef, useEffect } from "react";

const infoPoliticas = [
    {
        title: "1. Información que recopilamos",
        content: (
            <ul>
                <li>Nombre completo, dirección, correo electrónico y teléfono.</li>
                <li>Información de pago, como datos de tarjeta de crédito o débito.</li>
                <li>Datos de reservas y preferencias de alojamiento.</li>
                <li>Información recopilada automáticamente mediante cookies.</li>
            </ul>
        ),
    },
    {
        title: "2. Uso de la información",
        content: (
            <ul>
                <li>Procesar y gestionar sus reservas.</li>
                <li>Proporcionar información y promociones.</li>
                <li>Mejorar la experiencia y calidad de nuestros servicios.</li>
                <li>Cumplir con obligaciones legales.</li>
            </ul>
        ),
    },
    {
        title: "3. Compartir información con terceros",
        content: (
            <p>
                No compartimos su información personal con fines comerciales. Solo
                podemos compartirla con proveedores de servicios y autoridades legales
                cuando sea requerido por ley.
            </p>
        ),
    },
    {
        title: "4. Seguridad de la información",
        content: (
            <p>
                Implementamos medidas de seguridad técnicas y administrativas para
                proteger su información personal.
            </p>
        ),
    },
    {
        title: "5. Sus derechos",
        content: (
            <ul>
                <li>Acceder a sus datos personales.</li>
                <li>Solicitar correcciones.</li>
                <li>Solicitar la eliminación de sus datos.</li>
                <li>Retirar su consentimiento en cualquier momento.</li>
            </ul>
        ),
    },
    {
        title: "6. Contacto",
        content: (
            <p>
                Para cualquier consulta, puede contactarnos en: <br />
                <strong>Email:</strong> info@hotelsafiro.com <br />
                <strong>Teléfono:</strong> +51 123 456 789
            </p>
        ),
    },
    {
        title: "7. Cambios en la Política de Privacidad",
        content: (
            <p>
                Nos reservamos el derecho de modificar esta política en cualquier
                momento. Los cambios se publicarán en nuestro sitio web. <br />
                <span className="fst-italic">
                    Última actualización: 22 de agosto de 2025
                </span>
            </p>
        ),
    },
];

export const Politicas = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <div className="container my-5">
            <h1 className="text-center text-primary mb-4">
                Políticas de Privacidad – Hotel Zafiro
            </h1>

            <div className="accordion">
                {infoPoliticas.map((item, i) => (
                    <AccordionItem
                        key={i}
                        title={item.title}
                        content={item.content}
                        isOpen={openIndex === i}
                        toggle={() => toggle(i)}
                    />
                ))}
            </div>
        </div>
    )
}

const AccordionItem = ({ title, content, isOpen, toggle }) => {
    const contentRef = useRef(null)
    const [height, setHeight] = useState(0)

    useEffect(() => {
        if (isOpen) {
            setHeight(contentRef.current.scrollHeight)
        } else {
            setHeight(0)
        }
    }, [isOpen])

    return (
        <div className="accordion-item mb-2 shadow-sm rounded">
            <h2 className="accordion-header">
                <button
                    className={`accordion-button ${isOpen ? "" : "collapsed"}`}
                    type="button"
                    onClick={toggle}
                >
                    {title}
                </button>
            </h2>
            <div
                ref={contentRef}
                className="accordion-collapse"
                style={{
                    maxHeight: `${height}px`,
                    overflow: "hidden",
                    transition: "max-height 0.4s ease",
                }}
            >
                <div className="accordion-body">{content}</div>
            </div>
        </div>
    )
}
