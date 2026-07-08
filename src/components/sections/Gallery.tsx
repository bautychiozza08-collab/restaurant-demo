import "./Gallery.css";

const images = [
  {
    url: "https://images.unsplash.com/photo-1544025162-d76694265947",
    title: "Rib Eye Premium",
    tag: "Carnes",
    large: true,
  },
  {
    url: "https://images.unsplash.com/photo-1559339352-11d035aa65de",
    title: "Bruschettas",
    tag: "Entradas",
  },
  {
    url: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
    title: "Pizza Italiana",
    tag: "Especial",
  },
  {
    url: "https://images.unsplash.com/photo-1504674900247-0877df9cc836",
    title: "Pasta Fresca",
    tag: "Chef",
  },
  {
    url: "https://images.unsplash.com/photo-1528605248644-14dd04022da1",
    title: "Ambiente",
    tag: "Restaurant",
    large: true,
  },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">

      <div className="container">

        <div className="section-title">

          <span>Nuestra galería</span>

          <h2>
            Cada plato
            <br />
            merece una foto.
          </h2>

        </div>

        <div className="gallery-grid">

          {images.map((image, index) => (
            <article
              key={index}
              className={`gallery-card ${image.large ? "large" : ""}`}
            >
              <img src={`${image.url}?auto=format&fit=crop&w=900&q=80`} />

              <div className="gallery-overlay">

                <span>{image.tag}</span>

                <h3>{image.title}</h3>

              </div>

            </article>
          ))}

        </div>

      </div>

    </section>
  );
}