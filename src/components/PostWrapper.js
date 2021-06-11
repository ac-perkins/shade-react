import React, { useState } from 'react';
import './PostWrapper.css';
import Post from './Post';
import PostReplies from './PostReplies';

const PostWrapper = ({ post }) => {
  const [activePost, setActivePost] = useState(null);

  // Getting active post from children
  const setActivePostHandler = (selectedActivePost) => {
    const newActivePost = selectedActivePost;

    console.log('parent active post:', newActivePost);

    setActivePost(selectedActivePost);
  };

  const postContents = post.posts[0];

  return (
    <div>
      <Post postContents={postContents} />
      <PostReplies
        replyList={post.posts.slice(1)}
        parent={post.posts[0].threadId}
        active={activePost}
        onSetActivePost={setActivePostHandler}
      />
    </div>
  );
};

export default PostWrapper;
