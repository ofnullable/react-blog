import React from 'react';
import BlogCategory from './BlogCategory';

const Blog = () => {
    const categories = [
        {name: 'All category', count: 0}, 
        {name: 'Server', count: 0}, 
        {name: 'Back-end', count: 0}, 
        {name: 'Front-end', count: 0}, 
        {name: 'Database', count: 0}
    ];
    return (
        <>
            <div className="container">
                <BlogCategory categories={categories} />
            </div>
        </>
    )
}

export default Blog;