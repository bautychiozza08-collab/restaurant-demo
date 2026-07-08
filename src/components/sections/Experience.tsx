import "./Experience.css";

const items = [
  {
    number: "01",
    title: "Café de especialidad",
    text: "Blend seleccionado, aroma intenso y preparación cuidada en cada taza.",
  },
  {
    number: "02",
    title: "Cocina de autor",
    text: "Platos modernos con ingredientes frescos y sabores bien pensados.",
  },
  {
    number: "03",
    title: "Ambiente cálido",
    text: "Un espacio diseñado para desayunar, almorzar, merendar o quedarse horas.",
  },
];

export default function Experience() {
  return (
    <section className="experience" id="experience">
      <div className="container experience-grid">
        <div className="experience-left">
          <span className="experience-tag">La experiencia</span>

          <h2>
            No venís solo a comer.
            <span> Venís a disfrutar.</span>
          </h2>

          <p>
            Nero Bistró combina café, cocina y diseño en un espacio cálido,
            moderno y pensado para compartir buenos momentos.
          </p>
        </div>

        <div className="experience-right">
          {items.map((item) => (
            <article className="experience-item" key={item.number}>
              <span>{item.number}</span>

              <div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}