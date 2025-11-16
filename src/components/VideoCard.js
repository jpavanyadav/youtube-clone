import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ video }) => {
  const { snippet } = video;
  const videoId = video.id?.videoId || video.id; // Handles both search and trending formats

  return (
    <div className="p-2 w-72">
      <Link to={`/watch/${videoId}`}>
        <img
          src={snippet?.thumbnails?.medium?.url}
          alt={snippet?.title}
          className="rounded-lg"
        />
        <h3 className="text-sm font-semibold mt-2">{snippet?.title}</h3>
        <p className="text-xs text-gray-500">{snippet?.channelTitle}</p>
      </Link>
    </div>
  );
};

export default VideoCard;
