import React from 'react';

const Comment = ({ comment }) => {
    return (
        <li className="comment clearfix">
            <picture>
                <source srcSet={comment.desktopProfile} media="(min-width: 768px)"/>
                <source srcSet={comment.mobileProfile} />
                <img className="guest-image" src={comment.desktopProfile} alt="profile thumbnail" />
            </picture>
            <div className="comment-contents">
                <div className="guest-desc">
                {comment.isSecret || 
                    (
                        <>
                            <span className="guest-name text-wrap">{comment.nickname}</span>
                            <span className="write-date text-wrap">{comment.createdAt}</span>
                        </>
                    )
                }
                </div>
                {comment.isSecret ? 
                    <p style={{display: "inline-block"}}>비밀글입니다.</p>
                    : <p>{comment.content}</p>}
            </div>
        </li>
    );
};

export default Comment;