import { useEffect } from "react";

import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

import Hero from "./components/sections/Hero";
import MenuPreview from "./components/sections/MenuPreview";
import Experience from "./components/sections/Experience";
import Gallery from "./components/sections/Gallery";
import Reservations from "./components/sections/Reservations";
import Reviews from "./components/sections/Reviews";
import Contact from "./components/sections/Contact";

import "./App.css";

export default function App() {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />

      <main>
        <Hero />

        <div className="reveal">
          <MenuPreview />
        </div>

        <div className="reveal">
          <Experience />
        </div>

        <div className="reveal">
          <Gallery />
        </div>

        <div className="reveal">
          <Reservations />
        </div>

        <div className="reveal">
          <Reviews />
        </div>

        <div className="reveal">
          <Contact />
        </div>
      </main>

      <Footer />
    </>
  );
}