import React, { useEffect, useState } from "react";
import Post from "./post";
import CreatePost from "./createPost";

import "../App.css"

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const resp = await fetch('https://my-worker.takatocox.workers.dev/api/posts');
    const postsResp = await resp.json();
    setPosts(postsResp);
  };

  useEffect(() => {
    getPosts();
    setInterval(getPosts, 30000); // 30 seconds
  }, []);

  return (
    <div>
      <span className="pageTitle">PostMe</span>
      <div className="postsContainer">
        {
          posts.map((post) => {
            const parsedPost = JSON.parse(post)
            return (
                  <Post key={parsedPost.id} post={parsedPost}></Post>
            )}
          )
        }
      </div>
      <CreatePost id={posts.length}></CreatePost>
    </div>
  );
};

export default Posts;