import { Route, Routes } from "react-router-dom";
import { BrowsePage } from "../pages/BrowsePage";
import { StartHomePage } from "../pages/StartHomePage";
import { PublishPostPage } from "../pages/PublishPostPage";
import { DetailPage } from "../pages/DetailPage";
import { AboutPage } from "../pages/AboutPage";
import { NotFound } from "../pages/NotFound";

const routes = (
  <Routes>
    <Route path="/" element={<StartHomePage />} />
    <Route path="/browse-posts" element={<BrowsePage />} />
    <Route path="/create-post" element={<PublishPostPage />} />
    <Route path="/post/:postId" element={<DetailPage />} />
    <Route path="/about" element={<AboutPage />} />
    <Route path="*" element={<NotFound />}/>
  </Routes>
);

export default routes;
