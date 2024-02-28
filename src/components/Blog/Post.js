import React from "react";
import styled from "styled-components";

function Post(props) {
  const { title, description,timestamp } = props;

  return (
    <PostContainer>
      <div className="post">
        <p className="post-title">{title}</p>
        <p className="post-message">{description}</p>
        <p className="post-timestamp">{timestamp}</p>
      </div>
    </PostContainer>
  );
}

const PostContainer = styled.div`
  .posts {
    margin: 30px;
    padding: 30px;
  }
  .post {
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 4px;
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.1);
    padding: 1rem;
    margin-bottom: 1rem;
    margin: 20px;
  }

  .post-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin: 0;
    margin-bottom: 0.5rem;
  }

  .post-message {
    margin: 0;
    margin-bottom: 1rem;
  }

  .post-timestamp {
    color: #999;
    font-size: 0.8rem;
    margin: 0;
  }
`;

export default Post;