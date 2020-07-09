import React, { useState } from "react";
const PostsArea = ({ updateHandler, deleteHandler, arr }) => {
  const [txt_content, setText] = useState("");

  let posts = arr
    .slice(0)
    .reverse()
    .map((post) => (
      <div className="textarea-container" key={post.post_id}>
        <textarea
          id={`id${post.post_id}`}
          rows={5}
          onChange={(e) => setText(e.currentTarget.value)}
        >
          {post.txt_content}
        </textarea>
        <button
          className="btn btn-danger rouded btn-variant-1"
          onClick={(e) => {
            e.preventDefault();
            deleteHandler(post.post_id);
          }}
        >
          x
        </button>
        <button
          className="btn btn-info rouded btn-variant-2"
          onClick={(e) => {
            e.preventDefault();
            updateHandler(post.post_id, { txt_content });
          }}
        >
          Edit
        </button>
      </div>
    ));

  return (
      <div className="posts">
        <form>{posts}</form>
      </div>
  );
};
export default PostsArea;
