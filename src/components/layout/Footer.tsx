import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">

      <div className="container footer-grid">

        <div>
          <h2>NERO</h2>

          <p>
            Café de especialidad, brunch y cocina de autor en un ambiente
            moderno pensado para disfrutar cada momento.
          </p>
        </div>

        <div>
          <h4>Horario</h4>

          <p>Lunes a Viernes</p>
          <p>08:00 - 23:00</p>

          <p>Sábados y Domingos</p>
          <p>09:00 - 00:00</p>
        </div>

        <div>
          <h4>Contacto</h4>

          <p>Av. Principal 123</p>
          <p>Buenos Aires</p>
          <p>+54 11 1234 5678</p>
          <p>hola@nerobistro.com</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2026 Nero Bistró · Sitio desarrollado por Nexora.
      </div>

    </footer>
  );
}