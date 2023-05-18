import React from 'react';
import './imageStyle.css'

const ImageCard = ({ imageUrl, title, description }) => {
  return (
    <div className="image-card">
      <img src={imageUrl} alt={title} />
      <div className="image-card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ImageCard;
