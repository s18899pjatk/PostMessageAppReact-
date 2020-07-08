import React, { Fragment, useState, useEffect } from "react";
const PostsArea = () => {
  const [arr, setArray] = useState([]);
  const [txt_content, setText] = useState("");

  const deleteHandler = async (id) => {
    try {
      const deletePost = await fetch(`http://localhost:5003/posts/${id}`, {
        method: "DELETE",
      });
      console.log(deletePost);
      setArray(arr.filter((arr) => arr.post_id !== id));
    } catch (error) {
      console.error(error.message);
    }
  };

  const updateHandler = async (id) => {
    try {
      const body = { txt_content };
      const response = await fetch(`http://localhost:5003/posts/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  const getPosts = async () => {
    try {
      const response = await fetch("http://localhost:5003/posts");
      const jsonData = await response.json();
      setArray(jsonData);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

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
            updateHandler(post.post_id);
          }}
        >
          Edit
        </button>
      </div>
    ));

  return (
    <Fragment>
      <div className="posts">
        <form>{posts}</form>
      </div>
    </Fragment>
  );
};
export default PostsArea;
