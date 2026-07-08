import "./Reviews.css";

const reviews = [
  {
    name: "Sofía Martínez",
    text: "La atención fue excelente y la comida increíble. Ideal para una cena especial.",
    detail: "Cliente verificada",
  },
  {
    name: "Tomás Herrera",
    text: "El ojo de bife estaba perfecto. Ambiente cálido, buena música y servicio de diez.",
    detail: "Google Reviews",
  },
  {
    name: "Camila Ríos",
    text: "Fui a almorzar y terminé reservando para volver el fin de semana. Muy recomendable.",
    detail: "Reserva online",
  },
];

export default function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <div className="container">
        <div className="reviews-header">
          <span>Opiniones</span>

          <h2>
            Lo que dicen
            <br />
            nuestros clientes.
          </h2>
        </div>

        <div className="reviews-grid">
          {reviews.map((review) => (
            <article className="review-card" key={review.name}>
              <div className="stars">★★★★★</div>

              <p>"{review.text}"</p>

              <div className="review-user">
                <div className="review-avatar">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <strong>{review.name}</strong>
                  <span>{review.detail}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}