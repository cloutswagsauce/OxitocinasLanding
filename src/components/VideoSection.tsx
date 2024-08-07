// components/VideoSection.js
import { title } from 'process';
import React from 'react';

const VideoSection = ({}) => {
  return (
    <section className="video-section">
      <h2></h2>
      <div className="video-container">
      
      <iframe width="660" height="415" src="https://www.youtube.com/embed/HnRUR86PTxU?si=s7BPQXOmic7IEm6M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <style jsx>{`
        .video-section {
          text-align: center;
          margin: 40px 0;
        }
        .video-container {
          display: flex;
          justify-content: center;
          margin: 20px 0;
        }
        iframe {
          max-width: 100%;
          border-radius: 8px;
          box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </section>
  );
};

export default VideoSection;
