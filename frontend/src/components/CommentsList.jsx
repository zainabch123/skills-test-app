import { useEffect, useState } from "react";
import CommentsListItem from "./CommentListItem";

const CommentsList = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(
          `https://boolean-uk-api-server.fly.dev/zainabch123/post/${postId}/comment`
        );

        const data = await response.json();

        const sortedComments = [...data].sort((a, b) => b.id - a.id);

        setComments(sortedComments);
      } catch (error) {
        console.log("Error", error);
      }
    };
    fetchComments();
  }, [postId]);

  return (<ul className="comments-list">
    {comments.map((comment) => (
        <CommentsListItem key={comment.id} comment={comment}/>
    ))}

  </ul>);
};

export default CommentsList;
