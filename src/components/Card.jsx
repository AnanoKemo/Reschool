
import React from 'react';
import './Card.css';

const Card = ({ title, description, imageUrl, color }) => {
    return (
        <div className="card" style={{ backgroundColor: color }}>
            <img src={imageUrl} alt={title} className="card-image" />
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
        </div>
    );
};

export default Card;
