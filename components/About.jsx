import React from 'react';

const About = () => {
    return (
        <>
            <div className="about-images">
                <picture>
                    <source srcSet="https://placeimg.com/1200/350/nature" media="(min-width: 768px)" />
                    <source srcSet="https://placeimg.com/350/350/nature" />
                    <img className="profile-background" src="https://placeimg.com/1200/350/nature" alt="profile background image" />
                </picture>
                <img className="profile-image" src="https://placeimg.com/200/200/animals" alt="profile image" />
            </div>
            <span className="separate-line">
                separate line
            </span>
            <div className="about-content">
                Code by Joonhak LEE
            </div>
        </>
    )
}

export default About;