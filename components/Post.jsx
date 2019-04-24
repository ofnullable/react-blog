import React from 'react';

const Post = ({ post }) => {
    return (
        <li>
            <div className="post-item">
                <a href="javascript:void(0)">
                    <img className="post-thumbnail" src={post.thumbnail} alt={post.title}/>
                </a>
                <div className="post-desc">
                    <a href="javascript:void(0)">
                        <h1 className="post-title text-wrap">{post.title}</h1>
                    </a>
                    <span className="text-wrap">{post.category} &bull; {post.createdAt}</span>
                    <a href="javascript:void(0)">
                        <p className="post-preview">
                        회원 가입을 진심으로 축하합니다. 이 글은 비공개로 작성돼 있습니다.
                        '편집'으로 내용을 바꾸시거나, 삭제 후 '새 글을 작성'하셔도 됩니다.
                        블로그를 간단하게 소개하는 글로 편집해보는 것도 좋겠네요.
                        </p>
                        <button className="btn read-more">Read more</button>
                    </a>
                </div>
            </div>
        </li>
    );
}

export default Post;