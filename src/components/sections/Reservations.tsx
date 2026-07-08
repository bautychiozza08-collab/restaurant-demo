import "./Reservations.css";

export default function Reservations() {
  return (
    <section className="reservations" id="reservas">
      <div className="container reservation-box">
        <div className="reservation-content">
          <span>Reservas</span>

          <h2>
            Tu mesa está
            <br />
            esperando.
          </h2>

          <p>
            Reservá en minutos y viví una experiencia gastronómica cálida,
            elegante y pensada para disfrutar sin apuros.
          </p>

          <div className="reservation-actions">
            <a
              href="https://wa.me/5491111111111?text=Hola,%20quiero%20reservar%20una%20mesa%20en%20Nero%20Bistró."
              target="_blank"
              className="reserve-primary"
            >
              Reservar por WhatsApp
            </a>

            <a href="#menu" className="reserve-secondary">
              Ver menú
            </a>
          </div>
        </div>

        <div className="reservation-card">
          <h3>Horarios</h3>

          <div className="reservation-row">
            <span>Lunes a Viernes</span>
            <strong>08:00 - 23:00</strong>
          </div>

          <div className="reservation-row">
            <span>Sábados</span>
            <strong>09:00 - 00:00</strong>
          </div>

          <div className="reservation-row">
            <span>Domingos</span>
            <strong>09:00 - 22:00</strong>
          </div>

          <div className="reservation-note">
            Recomendamos reservar con anticipación para noches y fines de semana.
          </div>
        </div>
      </div>
    </section>
  );
}