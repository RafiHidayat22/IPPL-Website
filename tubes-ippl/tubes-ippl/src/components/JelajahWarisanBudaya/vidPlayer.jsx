import React from 'react';
import ReactPlayer from 'react-player';

const VideoPlayer = ({ url }) => {
  return (
    <div style={{ maxWidth: '900px', margin: '0 auto', paddingTop: '20px' }}>
      <ReactPlayer
        url={url}
        controls={true}
        width="100%"
        height="450px"
      />
    </div>
  );
};

export default VideoPlayer;
