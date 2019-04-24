import React from 'react';
import BlogCategory from './BlogCategory';
import Post from './Post';

const categories = [
    {name: 'All category', count: 8}, 
    {name: 'Server', count: 2}, 
    {name: 'Back-end', count: 2}, 
    {name: 'Front-end', count: 3}, 
    {name: 'Database', count: 1}
];

const posts = [
    {
        thumbnail: 'https://placeimg.com/200/200/animals',
        title: 'Post Title',
        category: 'Server',
        createdAt: '2019-04-24',
    },
    {
        thumbnail: 'https://placeimg.com/200/200/people',
        title: 'Post Title',
        category: 'Server',
        createdAt: '2019-04-24',
    },
    {
        thumbnail: 'https://placeimg.com/200/200/nature',
        title: 'Post Title',
        category: 'Front-end',
        createdAt: '2019-04-24',
    },
    {
        thumbnail: 'https://placeimg.com/200/200/arch',
        title: 'Post Title',
        category: 'Database',
        createdAt: '2019-04-23',
    },
    {
        thumbnail: 'https://placeimg.com/200/200/animals',
        title: 'Post Title',
        category: 'Back-end',
        createdAt: '2019-04-21',
    },
    {
        thumbnail: 'https://placeimg.com/200/200/people',
        title: 'Post Title',
        category: 'Front-end',
        createdAt: '2019-04-20',
    },
    {
        thumbnail: 'https://placeimg.com/200/200/nature',
        title: 'Post Title',
        category: 'Back-end',
        createdAt: '2019-04-19',
    },
    {
        thumbnail: 'https://placeimg.com/200/200/arch',
        title: 'Post Title',
        category: 'Front-end',
        createdAt: '2019-04-17',
    },
];

const Blog = () => {
    return (
        <>
            <div className="container">
                <BlogCategory categories={categories} />
                <ul className="post-list">
                {
                    posts.map( (p, i) => {
                        return (<Post key={`${p.title + i}`} post={p}/>)
                    })
                }
                </ul>
                <nav id="load-more">Load more <span /></nav>
            </div>
        </>
    )
}

export default Blog;