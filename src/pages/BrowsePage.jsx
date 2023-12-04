import { FilterPosts } from "../components/FilterPosts";
import { ListPosts } from "../components/ListPosts";

export const BrowsePage = () => {
  return (
    <>
      <div>
        <FilterPosts />
      </div>
      <ListPosts />
    </>
  );
};
