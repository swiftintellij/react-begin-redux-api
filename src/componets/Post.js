import React from "react";

function Post({ post }) {
    const { title, body } = post;
    return (
      <div>
          <h4>{title}</h4>
          <p>{body}</p>
      </div>
    );
}

export default Post;