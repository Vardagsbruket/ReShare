import { useSelector } from "react-redux";
import { Hero } from "../components/Hero";
import { StartPagePosts } from "../components/StartPagePosts";
import { Loading } from "../components/Loading";
import { HeroNavBar } from "../components/HeroNavBar";

export const StartHomePage = () => {
  const isLoading = useSelector((state) => state.posts.isLoading);
  return (
    <>
      <Hero />
      <HeroNavBar />
      {isLoading && <Loading />}
      {!isLoading && <StartPagePosts />}
    </>
  );
};
