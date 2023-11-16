import React, { useState } from 'react';

const Video = () => {
  const [showVideo, setShowVideo] = useState(false);

  const handleButtonClick = () => {
    setShowVideo(true);
  };

  return (
    <div>
      <button
        onClick={handleButtonClick}
        style={{
          position: "relative",
          marginLeft: "30vh",
          marginTop: "5px",
          padding: "20px",
          borderRadius: "20px",
          backgroundColor: "#007BFF",
          color: "#fff",
        }}
      >
        Show Video
      </button>

      {showVideo && (
        <div>
          <iframe
            width="560"
            height="315"
            src="https://youtu.be/WQoB2z67hvY?si=t1jKF8fQDuo2D6oR"
            title="Embedded YouTube Video"
            frameBorder="0"
            allowFullScreen
            style={{ marginTop: "20px" }}
          ></iframe>
        </div>
      )}
    </div>
  );
};

export default Video;
