import { useState, useContext } from "react";
import { AppContext } from "../utils/AppContext";
import App from "../App";

const CreateNewPost = () => {
  const { fetchAllPosts } = useContext(AppContext);
  const [newPost, setNewPost] = useState({
    id: "",
    title: "",
    content: "",
    contactId: 2,
  });

  function handleSubmit(event) {
    event.preventDefault();

    const addNewPost = async () => {
      try {
        const response = await fetch(
          "https://boolean-uk-api-server.fly.dev/zainabch123/post",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newPost),
          }
        );

        const data = await response.json();

        await fetchAllPosts();

        setNewPost({
          title: "",
          content: "",
          contactId: 2,
        });
      } catch (error) {
        console.log("Error", error);
      }
    };

    addNewPost();
  }

  function handleInput(event) {
    const { name, value } = event.target;
    setNewPost({
      ...newPost,
      [name]: value,
    });
  }

  return (
    <div className="new-post-section">
      <div className="user-icon">
        <div className="user-img">UP</div>
      </div>
      <form className="new-post-form" onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="Title"
          value={newPost.title}
          onChange={handleInput}
        ></input>
        <textarea
          type="text"
          id="content"
          name="content"
          placeholder="Content"
          value={newPost.content}
          onChange={handleInput}
        ></textarea>
        <button className="new-post-submit" type="submit">
          Post
        </button>
      </form>
    </div>
  );
};

export default CreateNewPost;
