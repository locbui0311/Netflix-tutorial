import React from 'react';
import { Movie } from '../types/movie';

type MovieCardProps = Movie;

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  matchPercentage,
  year,
  episode,
  rank,
  progress,
  posterUrl,
}) => {
  return (
    <div className="movie-card flex-shrink-0 w-40 md:w-48 relative">
      {rank && (
        <div className="absolute -left-4 bottom-0 text-6xl font-bold text-gray-800 z-10 drop-shadow-lg">
          {rank}
        </div>
      )}
      <div className="relative rounded-md overflow-hidden h-60 md:h-72 bg-gray-800 border-b-4 border-red-600">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50">
          {posterUrl && (
            <img src={posterUrl } alt={title} className="w-full h-full object-cover" />
          )}
        </div>
     
        <div className="absolute bottom-0 left-0 p-3">
        
          <div className="flex items-center text-xs text-gray-300">
            <span className="text-green-500 mr-1">{matchPercentage}% Match</span>
            {year && <span>{year}</span>}
            {episode && <span>{episode}</span>}
          </div>
        </div>
        {progress !== undefined && (
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-700">
            <div className={`h-full bg-red-600 w-${progress}`}></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieCard; 