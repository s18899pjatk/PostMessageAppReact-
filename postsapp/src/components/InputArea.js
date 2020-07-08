import React, { Fragment, useState } from "react";

const InputArea = () => {
  const [txt_content, setText] = useState("");
  const addHandler = async (e) => {
    e.preventDefault();

    try {
      const body = { txt_content };
      const response = await fetch("http://localhost:5003/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      window.location = "/";
      console.log(response);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <Fragment>
      <div className="writePost">
        <form onSubmit={addHandler}>
          <h2>Post</h2>
          <div className="customtxtArea">
            <textarea
              rows="10"
              cols="50"
              value={txt_content}
              onChange={(e) => setText(e.currentTarget.value)}
            />
            <button className="submbttn" type="submit">
              submit
            </button>
          </div>
        </form>
      </div>
    </Fragment>
  );
};

export default InputArea;
