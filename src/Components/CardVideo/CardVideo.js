import React from 'react';
import './CardVideo.css';

const Card = ({ title, videoSrc }) => {
  return (
    <div className="card">
      <h2 className="card-title">{title}</h2>
      <div className="video-container">
        <iframe
          src={videoSrc}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default CardVideo;