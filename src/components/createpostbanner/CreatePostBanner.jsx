import "./CreatePostBanner.css";
import Lottie from "lottie-react";
import Animation from "../../assets/animations/Animation.json";
export const CreatePostBanner = () => {
  const style = {
    height: 75,
  };
  return (
    <div className="banner">
      <p>Your post has been successfully created</p>
      <Lottie
        animationData={Animation}
        style={style}
        className="hero-animation"
      />
    </div>
  );
};
