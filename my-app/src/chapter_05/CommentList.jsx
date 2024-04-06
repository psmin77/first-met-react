import React from "react";
import Comment from "./Comment";

const comments = [
  {
    name: "홍길동",
    comment: "h2h2",
  },
  {
    name: "김춘배",
    comment: "222222",
  },
  {
    name: "이서방",
    comment: "hello~~",
  },
  {
    name: "박문수",
    comment: "배고프다",
  },
];

function CommentList(props) {
  return (
    <div>
      {comments.map((comment) => (
        <Comment name={comment.name} comment={comment.comment} />
      ))}
    </div>
  );
}

export default CommentList;
