import "./Contact.css";

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div className="contact-content">
          <span>Contacto</span>

          <h2>
            Reservá hoy.
            <br />
            Viví Brasa Urbana.
          </h2>

          <p>
            Escribinos por WhatsApp, encontranos en redes o visitanos para
            disfrutar una experiencia gastronómica distinta.
          </p>

          <div className="contact-actions">
            <a
              href="https://wa.me/5491111111111?text=Hola,%20quiero%20reservar%20una%20mesa%20en%20Brasa%20Urbana."
              target="_blank"
              className="contact-primary"
            >
              Reservar por WhatsApp
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              className="contact-secondary"
            >
              Ver Instagram
            </a>
          </div>
        </div>

        <div className="contact-card">
          <div>
            <strong>Dirección</strong>
            <p>Av. Principal 123 · Buenos Aires</p>
          </div>

          <div>
            <strong>Horario</strong>
            <p>Lun a Vie · 08:00 - 23:00</p>
          </div>

          <div>
            <strong>Teléfono</strong>
            <p>+54 11 1234 5678</p>
          </div>

          <div>
            <strong>Email</strong>
            <p>reservas@brasaurbana.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}