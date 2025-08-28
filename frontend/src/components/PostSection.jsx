import PostsList from "./PostsList.jsx";

const PostSection = () => {
  return (
    <section className="post-section">
      <div className="new-post-section">
        <div className="user-icon">
          <div className="user-img">UP</div>
        </div>
        <form className="new-post-form">
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
          ></input>
          <textarea
            type="text"
            id="content"
            name="content"
            placeholder="Content"
          ></textarea>
          <button className="new-post-submit" type="submit">
            Post
          </button>
        </form>
      </div>
      <PostsList />
    </section>
  );
};

export default PostSection;
