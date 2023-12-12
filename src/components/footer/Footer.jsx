import "./Footer.css";
import { FacebookShareButton, FacebookIcon } from "react-share";

export const Footer = () => {
  return (
    <div className="footer">
      <p className="made-by-text">
        A project by <a href="https://github.com/filzasaleem">Filza Saleem</a>,{" "}
        <a href="https://github.com/joona-3">Joona Miettinen</a> and{" "}
        <a href="https://github.com/Vardagsbruket">Diana Undén</a>{" "}
      </p>
      <div className="socialMedia">
        <p>Share this page on social media </p>
        <FacebookShareButton
          url={`https://stirring-florentine-c4bb3f.netlify.app/`}
          aria-aria-label="facebook button"
        >
          <FacebookIcon size={32} round />
        </FacebookShareButton>
      </div>
    </div>
  );
};
