import { useEffect, useState } from "react";
import UserIcon from "./UserIcon";

const PostListItem = ({ post }) => {
  const [userInfo, setUserInfo] = useState(null);

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
      </li>
    )}
    </>
  );
};

export default PostListItem;
