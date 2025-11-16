import React from 'react';
import VideoCard from './VideoCard';

const VideoGrid = ({ videos }) => (
  <div className="flex flex-wrap justify-center">
    {videos.map((video) => (
      <VideoCard key={video.etag} item={video.id} video={video} />
    ))}
  </div>
);

export default VideoGrid;
