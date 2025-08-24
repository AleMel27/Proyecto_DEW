import { useEffect, useState, useRef } from "react";
import { ImagenesBaner } from "../data/imagenes_banner";
import { ImagenesCuerpo } from "../data/imagenes_cuerpo";
import { ImgCartasHabitaciones } from "../data/imagenes_cartas_habitaciones";

const Cabecera = () => {
    const [index, setIndex] = useState(0)
    const [fade, setFade] = useState(true)

    useEffect(() => {
        const id = setInterval(() => {
            setFade(false)
            setTimeout(() => {
                setIndex((i) => (i + 1) % ImagenesBaner.length)
                setFade(true)
            }, 700)
        }, 2500)

        return () => clearInterval(id)
    }, []);

    return (
        <header className="text-center">
            <img
                src={ImagenesBaner[index]}
                alt="banner"
                className={`img-banner ${fade ? "fade-in" : "fade-out"}`}
            />
        </header>
    )
}


const Slider = ({ titulo, imagenes, tipo = "simple" }) => {
    const ref = useRef(null)
    const scrollStep = 520

    const scroll = (direction) => {
        const track = ref.current
        if (!track) return
        const scrollMax = track.scrollWidth - track.clientWidth;

        track.scrollTo({
            left:
                direction === "left"
                    ? track.scrollLeft <= 0
                        ? scrollMax
                        : track.scrollLeft - scrollStep
                    : track.scrollLeft >= scrollMax - 5
                        ? 0
                        : track.scrollLeft + scrollStep,
            behavior: "smooth",
        })
    }

    return (
        <section className="mb-5">
            {titulo && <h3 className="fw-bold text-center mb-3">{titulo}</h3>}
            <div
                className="d-flex overflow-auto gap-3 px-3 pb-3"
                ref={ref}
                style={{
                    scrollBehavior: "smooth",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
            >
                {imagenes.map((src, i) => (
                    <div
                        key={i}
                        className={`flex-shrink-0 ${tipo === "card" ? "col-12 col-md-3" : "col-12 col-md-4"} d-flex`}
                    >
                        <div className="card shadow-sm border-0 h-100 w-100">
                            <img
                                src={src}
                                alt={`${titulo || "img"}-${i + 1}`}
                                className="card-img-top rounded-top"
                                style={tipo !== "card" ? { height: "250px", objectFit: "cover" } : {}}
                            />
                            {tipo === "card" && (
                                <div className="card-body text-center d-flex flex-column">
                                    <h5 className="card-title">Habitación {i + 1}</h5>
                                    <p className="card-text text-muted small flex-grow-1">
                                        Comodidad y lujo para tu descanso.
                                    </p>
                                    <button className="btn btn-primary btn-sm mt-auto">
                                        Reservar
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            <div className="d-flex justify-content-between mt-2">
                <button className="btn btn-outline-primary" onClick={() => scroll("left")}>
                    &#10092; Anterior
                </button>
                <button className="btn btn-outline-primary" onClick={() => scroll("right")}>
                    Siguiente &#10093;
                </button>
            </div>
        </section>
    )
}

const Cuerpo = () => {
    return (
        <section className="container my-5">
            <Slider titulo="Habitaciones Disponibles" imagenes={ImagenesCuerpo} />
            <Slider titulo="Más Opciones" imagenes={ImagenesCuerpo} />
            <Slider titulo="Cartas de Habitaciones" imagenes={ImgCartasHabitaciones} tipo="card" />
        </section>
    )
}


export const Home = () => {
    return (
        <>
            <Cabecera />
            <Cuerpo />
        </>
    )
}