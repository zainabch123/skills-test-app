import { useContext } from "react";
import { AppContext } from "../utils/AppContext.jsx";
import PostListItem from "./PostListItem.jsx";

const PostsList = () => {
  const { posts } = useContext(AppContext);

  const sortedPosts = [...posts].sort((a, b) => b.id - a.id);

  return (
    <ul className="posts-list">
      {sortedPosts.map((post) => (
        <PostListItem key={post.id} post={post} />
      ))}
    </ul>
  );
};

export default PostsList;
