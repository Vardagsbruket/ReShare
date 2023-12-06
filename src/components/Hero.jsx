import { FilterCity } from "./FilterCity";
import "./hero.css";

export const Hero = () => {
  return (
    <section className="hero-container">
      <section className="hero-wrapper">
        <h1>Sharing items locally made simple.</h1>
        <p>
          Share or donate items you no longer need, contributing to the
          well-being of your local community. If you find yourself in need of
          something, asking to borrow has never been simpler.
        </p>
        <label>Select a city to view location-based posts:</label>
        <FilterCity />
      </section>
    </section>
  );
};
