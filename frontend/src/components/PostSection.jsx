import PostsList from "./PostsList.jsx";
import CreateNewPost from "./CreateNewPost.jsx";

const PostSection = () => {
  return (
    <section className="post-section">
      <CreateNewPost />
      <PostsList />
    </section>
  );
};

export default PostSection;
