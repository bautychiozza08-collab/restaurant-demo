import { useEffect, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a href="#" className="nav-brand">

        <div className="nav-logo">
          B
        </div>

        <div className="brand-text">
          <strong>Brasa Urbana</strong>
          <span>Steakhouse & Grill</span>
        </div>

      </a>

      <nav className="nav-links">
        <a href="#menu">Menú</a>
        <a href="#experience">Experiencia</a>
        <a href="#gallery">Galería</a>
        <a href="#reviews">Opiniones</a>
        <a href="#contact">Contacto</a>
      </nav>

      <a
        href="https://wa.me/5491111111111?text=Hola,%20quiero%20hacer%20una%20reserva."
        target="_blank"
        rel="noopener noreferrer"
        className="reservation-btn"
      >
        Reservar mesa
      </a>
    </header>
  );
}