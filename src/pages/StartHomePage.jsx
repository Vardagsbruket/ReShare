import { useSelector } from "react-redux";
import { Hero } from "../components/Hero";
import { StartPagePosts } from "../components/StartPagePosts";
import { Loading } from "../components/Loading";


export const StartHomePage = () => {
  const isLoading = useSelector((state) => state.posts.isLoading);
  return (
    <>
      <Hero />
      {isLoading && <Loading/> }
      {!isLoading &&<StartPagePosts />}
    </>
  );
};
