import { Route, Routes } from "react-router-dom";
import { BrowsePage } from "../pages/BrowsePage";
import { StartHomePage } from "../pages/StartHomePage";
import { PublishPostPage } from "../pages/PublishPostPage";
import { DetailPage } from "../pages/detailPage";

const routes = (
  <Routes>
    <Route path="/" element={<StartHomePage />} />
    <Route path="/browse-posts" element={<BrowsePage />} />
    <Route path="/create-post" element={<PublishPostPage />} />
    <Route path="/post/:postId" element={<DetailPage />} />
    <Route path="*" />
  </Routes>
);

export default routes;
