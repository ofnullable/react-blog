import React, { memo } from 'react';

const BlogCategory = memo(({ category, isActive, clickEvent }) => {
    return (
        <>
            <li className={isActive ? 'active' : null} data-id={category.name} onClickCapture={clickEvent}>
                <a>{category.name} <span>{`(${category.count})`}</span></a>
            </li>
        </>
    );
});

export default BlogCategory;