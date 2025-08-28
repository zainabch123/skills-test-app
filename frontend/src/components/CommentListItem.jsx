import { useState, useEffect } from "react";
import UserIcon from "./UserIcon";

const CommentsListItem = ({comment}) => {
    const [commenterInfo, setCommenterInfo] = useState(null);

    useEffect(() => {
        const fetchCommenterInfo = async () => {
          try {
            const response = await fetch(
              `https://boolean-uk-api-server.fly.dev/zainabch123/contact/${comment.contactId}`
            );
    
            const data = await response.json();
    
            setCommenterInfo(data);
          } catch (error) {
            console.log("Error", error);
          }
        };
    
        fetchCommenterInfo();
      }, [comment.contactId]);

    return (
      <>
        {commenterInfo && (
          <li className="comment-li">
            <UserIcon userInfo={commenterInfo} />
            <div className="comment-content">
              <h3>
                {commenterInfo.firstName} {commenterInfo.lastName}
              </h3>
              <p>{comment.content}</p>
            </div>
          </li>
        )}
      </>
    );
};

export default CommentsListItem;