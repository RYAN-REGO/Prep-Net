import React from "react";
import "./Update.css";

const Update = ({ postsCount}) => {
  return (
    <>
      <p className="update_text">
        More than {postsCount} Interview Experiences submitted
      </p>
    </>
  );
};

export default Update;
