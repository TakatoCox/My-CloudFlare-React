import React from "react";

const Post = (props) => {
  const { title, content, username} = props.post;
  return (
    <div className="postContainer">
      <span className="postUsername">{username}</span>
      <div className="postBody">
        <span className="postTitle">{title}</span>
        <p className="postContent">{content}</p>
      </div>
    </div>
  );
};

export default Post;