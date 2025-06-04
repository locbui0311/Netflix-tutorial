import React from 'react';

interface PlayerProps {
  videoUrl: string;
  title: string;
}

const Player: React.FC<PlayerProps> = ({ videoUrl, title }) => {
  return (
    <div className="relative w-full h-[56.25vw] bg-netflix-black">
      <div className="absolute top-0 left-0 w-full h-full">
        <video
          className="w-full h-full object-cover"
          src={videoUrl}
          controls
          autoPlay
          poster={`https://image.tmdb.org/t/p/original/${title}`}
        />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-netflix-black to-transparent" />
    </div>
  );
};

export default Player; 