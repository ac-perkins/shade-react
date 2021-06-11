import React from 'react';

import Post from './Post';
import PostPreviewAuthor from './PostPreviewAuthor';
import './PostReplies.css';

const PostReplies = ({ replyList = {}, parent, active, onSetActivePost }) => {
  const onTitleClick = (postId, body) => {
    onSetActivePost(postId);
  };

  const renderedReplies = replyList
    .filter((reply) => reply.parentId === parent)
    .map((reply, index) => {
      let postBodyPreview = `${reply.body.replace(/<br \/>/g, ' ')} : `;
      if (reply.body.length > 106) {
        postBodyPreview = `${reply.body
          .replace(/<br \/>/g, ' ')
          .substring(0, 105)}... : `;
      }

      return (
        <li key={reply.id} className="reply-li">
          <div className="" onClick={() => onTitleClick(reply.id, reply.body)}>
            {active !== reply.id && (
              <div className="post-replies">
                <div
                  className="post-reply"
                  dangerouslySetInnerHTML={{
                    __html: `${postBodyPreview}`,
                  }}
                ></div>
                <PostPreviewAuthor author={reply.author} />
              </div>
            )}
            {active === reply.id && <Post postContents={reply} />}
          </div>
          <PostReplies
            replyList={replyList}
            parent={reply.id}
            active={active}
            onSetActivePost={onSetActivePost}
          />
        </li>
      );
    });

  return <ul className="reply-ul">{renderedReplies}</ul>;
};

export default PostReplies;
