import React, { useState } from "react";

const InputArea = ({ addHandler }) => {
  const [txt_content, setText] = useState("");
  
 
  const submitHandler = (e) => {
    e.preventDefault();
    addHandler({txt_content});
  }

  return (
      <div className="writePost">
        <form >
          <h2>Post</h2>
          <div className="customtxtArea">
            <textarea
              rows="10"
              cols="50"
              value={txt_content}
              onChange={(e) => setText(e.currentTarget.value)}
            />
            <button className="submbttn" type="submit" onClick={submitHandler}>
              submit
            </button>
          </div>
        </form>
      </div>
  );
};

export default InputArea;
