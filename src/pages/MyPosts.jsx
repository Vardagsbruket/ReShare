import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardPost } from "../components/CardPost";
import { getPostsList } from "../reducers/postSlice";

export const MyPosts = () => {
  const isLoggedIn = useSelector((state) => state.posts.isLoggedIn);
  const userId = useSelector((state) => state.posts.userId);
  const allPosts = useSelector((state) => state.posts.postsList);
  const [myPosts, setMyPosts] = useState([]);
  const dispatch = useDispatch();

  

  const deletePost = async (post) => {
    try {
    //   const response = await fetch(`http://localhost:6001/posts/${id}`, {
    //     method: "DELETE",
    //   });

      const response = await fetch('http://localhost:8000/posts/' + post.id, {
        method: 'DELETE'
      })

      if (response.ok) {
        setMyPosts((prevPosts) => prevPosts.filter((post) => post.id !== idToDelete));
      } else {
        console.error("Error deleting post:", response.statusText);
      }
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  const handleDelete = (post) => {
    console.log("id of post to be deleted", post.id);
    deletePost(post);
  };

  useEffect(() => {
    if (userId && allPosts) {
      const filteredPosts = allPosts.filter((post) => post.userId === userId);
      setMyPosts(filteredPosts);
    }
  }, [userId, allPosts]);

  return (
    <div>
      {myPosts.map((post) => (
        <div key={post.id}>
          <CardPost post={post} />
          <button onClick={() => handleDelete(post)}>Delete</button>
        </div>
      ))}
    </div>
  );
};
