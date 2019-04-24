import React, { memo } from 'react';

const Menu = memo(({ active, title }) => {
    return (
        <div>
            <a className={active ? "nav-item active" : "nav-item"} id={title}>
                {title}
            </a>
        </div>
    )
})

export default Menu;