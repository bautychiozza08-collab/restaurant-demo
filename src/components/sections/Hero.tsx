import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-noise"></div>

      <div className="container hero-grid">
        <div className="hero-content">
          <span className="hero-tag">🔥 Cocina de fuego · Steakhouse premium</span>

          <h1>
            El sabor de la brasa,
            <span> llevado a otro nivel.</span>
          </h1>

          <p>
            Cortes seleccionados, platos de autor y una experiencia cálida
            pensada para disfrutar cada momento.
          </p>

          <div className="hero-actions">
            <a href="#menu" className="hero-btn primary">
              Ver menú
            </a>

            <a
              href="https://wa.me/5491111111111?text=Hola,%20quiero%20hacer%20una%20reserva."
              target="_blank"
              className="hero-btn secondary"
            >
              Reservar mesa
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>4.9</strong>
              <span>Google Reviews</span>
            </div>

            <div>
              <strong>+12</strong>
              <span>Cortes premium</span>
            </div>

            <div>
              <strong>20:00</strong>
              <span>Horario ideal</span>
            </div>
          </div>
        </div>

        <div className="hero-card">
          <span>Especial de la casa</span>
          <h3>Ojo de bife a la brasa</h3>
          <p>
            Sellado perfecto, papas rústicas, vegetales grillados y salsa de la casa.
          </p>

          <div className="hero-card-bottom">
            <strong>$18.900</strong>
            <a href="#reservas">Reservar</a>
          </div>
        </div>
      </div>
    </section>
  );
}