import React, { useState } from 'react';

const BlogCategory = ({ categories }) => {
    const [category, setCategory] = useState('All category');

    const toggleActive = () => {
        const classList = document.querySelector('#category-list').classList;
        if (classList.contains('active')) {
            classList.remove('active');
        } else {
            classList.add('active');
        }
    }

    const onCategoryClick = (e) => {
        toggleActive();
        setCategory(e.target.id);
    }

    return (
        <>
            <div id="post-category" onClick={toggleActive}>
                {category}
            </div>
            <div id="category-list">
                <ul>
                {
                    categories.map( c => {
                        return (
                            <li key={c.name}>
                                <a id={c.name} onClick={onCategoryClick}>
                                    {c.name} <span>{`(${c.count})`}</span>
                                </a>
                            </li>
                        );
                    })
                }
                </ul>
            </div>
            <div id="background" onClick={toggleActive} />
        </>
    );
}

export default BlogCategory;