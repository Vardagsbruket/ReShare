import { FilterCity } from "../filter/FilterCity";
import "./Hero.css";

export const Hero = () => {
  return (
    <section className="hero-container">
      <section className="hero-wrapper">
        <h1>Sharing items locally made simple.</h1>
        <p>
          Have a lot of stuff you rarely use, but still need sometimes? Share
          them with your neighbors so they don’t have to buy their own. In
          return, you can ask them to lend you what you need for this specific
          occasion, project or trip. If you find yourself in need of something,
          borrowing from a neighbor has never been simpler.
          <span className="bold">
            <br />
            Both the environment, your wallet and your local community will
            thank you!
          </span>
        </p>
        <FilterCity />
      </section>
    </section>
  );
};
