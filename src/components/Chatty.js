import React from 'react';
import PostWrapper from './PostWrapper';

const Chatty = ({ posts }) => {
  const chattyPosts = posts.map((post) => {
    // console.log(post);
    return <PostWrapper key={post.threadId} post={post} />;
  });

  return chattyPosts;
};

export default Chatty;
