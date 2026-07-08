import "./MenuPreview.css";

const menu = [
  {
    category: "Brunch",
    emoji: "☕",
    title: "Avocado Toast",
    description: "Pan de masa madre, palta, huevo poché y brotes frescos.",
    price: "$14",
  },
  {
    category: "Pasta",
    emoji: "🍝",
    title: "Truffle Tagliatelle",
    description: "Pasta fresca con crema de trufa, parmesano y hongos.",
    price: "$24",
  },
  {
    category: "Postre",
    emoji: "🍰",
    title: "Cheesecake Nero",
    description: "Cheesecake artesanal con frutos rojos.",
    price: "$12",
  },
  {
    category: "Bebidas",
    emoji: "🍷",
    title: "Signature Cocktail",
    description: "Gin premium, cítricos y romero fresco.",
    price: "$16",
  },
];

export default function MenuPreview() {
  return (
    <section className="menu" id="menu">

      <div className="menu-header">

        <span>Nuestro menú</span>

        <h2>
          Sabores creados
          <br />
          para recordar.
        </h2>

        <p>
          Ingredientes seleccionados, recetas de autor y una experiencia
          gastronómica que combina tradición con cocina contemporánea.
        </p>

      </div>

      <div className="menu-grid">

        {menu.map((item, index) => (
          <div className="menu-card" key={index}>

            <div className="menu-top">

              <div className="menu-icon">
                {item.emoji}
              </div>

              <span>{item.category}</span>

            </div>

            <h3>{item.title}</h3>

            <p>{item.description}</p>

            <div className="menu-bottom">

              <strong>{item.price}</strong>

              <button>
                Ver más
              </button>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
}