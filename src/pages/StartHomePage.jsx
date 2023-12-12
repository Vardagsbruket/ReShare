import { useSelector } from "react-redux";
import { Hero } from "../components/hero/Hero";
import { StartPagePosts } from "../components/startpageposts/StartPagePosts";
import { Loading } from "../components/loading/Loading";
import { HeroNavBar } from "../components/heronavbar/HeroNavBar";

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
