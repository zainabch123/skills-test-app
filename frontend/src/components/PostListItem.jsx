import { useEffect, useState } from "react";
import UserIcon from "./UserIcon";
import CommentsList from "./CommentsList";

const PostListItem = ({ post }) => {
  const [userInfo, setUserInfo] = useState(null);
  const [showPrevious, setShowPrevious] = useState(true);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await fetch(
          `https://boolean-uk-api-server.fly.dev/zainabch123/contact/${post.contactId}`
        );

        const data = await response.json();

        setUserInfo(data);
      } catch (error) {
        console.log("Error", error);
      }
    };

    fetchUserInfo();
  }, [post.contactId]);

  function handleChange(event) {
    setShowPrevious(!showPrevious);
  }

  return (
    <>
      {userInfo && (
        <li className="post-li">
          <UserIcon userInfo={userInfo} />
          <div className="user-info">
            <h2>
              {userInfo.firstName} {userInfo.lastName}
            </h2>
            <h3 className="post-title">{post.title}</h3>
          </div>
          <p className="post-content">{post.content}</p>
          <button className="comment-toggle" onClick={handleChange}>
            {!showPrevious
              ? "Show Previous Comments"
              : "Hide Previous Comments"}
          </button>
          <CommentsList postId={post.id} showPrevious={showPrevious} />
        </li>
      )}
    </>
  );
};

export default PostListItem;
