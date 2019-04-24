import React from 'react';
import Comment from './Comment';

const comments = [
    {
        mobileProfile: 'https://placeimg.com/45/45/animals',
        desktopProfile: 'https://placeimg.com/70/70/animals',
        nickname: 'nickname',
        createdAt: '2018-12-09 01:40:00',
        content: '안녕하세요~',
        isSecret: false,
    },
    {
        mobileProfile: 'https://placeimg.com/45/45/tech',
        desktopProfile: 'https://placeimg.com/70/70/tech',
        nickname: 'nickname',
        createdAt: '2018-12-09 01:40:00',
        content: '안녕하세요~',
        isSecret: true,
    },
    {
        mobileProfile: 'https://placeimg.com/45/45/people',
        desktopProfile: 'https://placeimg.com/70/70/people',
        nickname: 'nickname',
        createdAt: '2018-12-09 01:40:00',
        content: '안녕하세요~',
        isSecret: false,
    },
    {
        mobileProfile: 'https://placeimg.com/45/45/nature',
        desktopProfile: 'https://placeimg.com/70/70/nature',
        nickname: 'nickname',
        createdAt: '2018-12-09 01:40:00',
        content: '안녕하세요~',
        isSecret: false,
    },
];

const Guestbook = () => {

    const submitComment = (e) => {
        e.preventDefault();
        console.log('submit action');
    };

    return (
        <>
            <h1 id="guest-book"> Guestbook </h1>
            <div className="write-area">
                <form id="comment-form" onSubmit={submitComment}>
                    <textarea name="comment" tabIndex="3" placeholder="인터넷은 우리가 함께 만들어가는 소중한 공간입니다. 댓글 작성 시 타인에 대한 배려와 책임을 담아주세요." />
                    <div className="input-group clearfix">
                        <input type="checkbox" name="isSecret" id="isSecret" />
                        <label htmlFor="isSecret">비밀글로 작성하기</label>
                        <button type="submit" className="btn comment-submit">작성하기</button>
                    </div>
                </form>
            </div>
            <ul className="comment-list">
            {
                comments.map( c => {
                    return (
                        <Comment key={c.mobileProfile} comment={c}/>
                    );
                })
            }
            </ul>
        </>
    )
}

export default Guestbook;