import React, { useState, useRef } from 'react';
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
    const [category, setCategory] = useState(categories[0].name);
    const onRef = useRef('');

    const toggleActive = () => {
        const classList = onRef.current.classList;
        if (classList.contains('active')) {
            classList.remove('active');
        } else {
            classList.add('active');
        }
    }

    const onCategoryClick = (e) =>  {
        const activeCategory = e.currentTarget.dataset.id;
        if ( category !== activeCategory ) {
            toggleActive();
            setCategory(activeCategory);
        }
    }

    const listingPosts = () => {
        return posts.filter( p => {
            if (category !== 'All category') return p.category === category;
            else return true;
        })
        .map( (p, i) => <Post key={`${p.title + i}`} post={p} /> );
    }

    return (
        <>
            <div className="container">
                <div id="post-category" onClick={toggleActive}>
                    {category}
                </div>
                <div id="category-list" ref={onRef}>
                    <ul>
                    {
                        categories.map( c => {
                            return <BlogCategory key={c.name} category={c} isActive={c.name === category} clickEvent={onCategoryClick} />;
                        })
                    }
                    </ul>
                </div>
                <div id="background" onClick={toggleActive} />
                <ul className="post-list">
                { listingPosts() }
                </ul>
                <nav id="load-more">Load more <span /></nav>
            </div>
        </>
    )
}

export default Blog;