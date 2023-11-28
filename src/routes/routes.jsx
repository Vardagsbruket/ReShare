import { Route, Routes } from "react-router-dom";
import { BrowsePostsPage } from "../pages/browsePostsPage";
import { StartPage } from "../pages/startPage";
import { CreatePostPage } from "../pages/createPostPage";
import { DetailPage } from "../pages/detailPage";

const routes = (
  <Routes>
    <Route path="/" element={<StartPage />} />
    <Route path="/browse-posts" element={<BrowsePostsPage />} />
    <Route path="/create-post" element={<CreatePostPage />} />
    <Route path="/post/:postId" element={<DetailPage />} />
    <Route path="*" />
  </Routes>
);

export default routes;
