import { FilterPosts } from "../components/FilterPosts";
import { ListPosts } from "../components/ListPosts";

export const BrowsePage = () => {
  return (
    <>
      <div>
        <h2>Browse Posts</h2>
      </div>
      <div>
        <FilterPosts />
      </div>
      <ListPosts />
    </>
  );
};
