import { useEffect, useState } from "react";
import CommentsListItem from "./CommentListItem";

const CommentsList = ({ postId, showPrevious }) => {
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

  const commentsToDisplay = comments.slice(0,3);

  return (<ul className="comments-list">

    {showPrevious ? (

    comments.map((comment) => (
        <CommentsListItem key={comment.id} comment={comment}/>
    ))) : (
       commentsToDisplay.map((comment) => (
        <CommentsListItem key={comment.id} comment={comment}/>
    ) ))}

  </ul>);
};

export default CommentsList;
