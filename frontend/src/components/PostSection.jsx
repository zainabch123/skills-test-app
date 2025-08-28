import { useContext } from "react";
import { AppContext } from "../utils/AppContext.jsx";

const PostSection = () => {
  const { posts } = useContext(AppContext);

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
      <ul className="posts-list">
        {posts.map((post) => {
          return (
            <li key={post.id} className="post-li">
              <div className="post-user">UserName</div>
              <h3>{post.title}</h3>
              <p>{post.content}</p>  
            </li>
          )
        })}
      </ul>
    </section>
  );
};

export default PostSection;
