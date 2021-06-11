import React from 'react';

const Post = ({ postContents }) => {
  return (
    <div className="root-post">
      <div>
        <a
          className="root-author"
          href={`https://www.shacknews.com/user/${postContents.author}/posts`}
        >
          {postContents.author}
        </a>
      </div>
      <div dangerouslySetInnerHTML={{ __html: postContents.body }}></div>
    </div>
  );
};

export default Post;
