import React from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import VideoGrid from '../components/VideoGrid';
import useVideoDetails from '../utils/useVideoDetails';

const Watch = () => {
  const { id } = useParams();
const { items, loading } = useSelector((state) => state.videos);
const { videoDetails, loader } = useVideoDetails(id);
const snippet = videoDetails?.snippet;
  return (
    <div className="p-4">
        <div className=''>
      <iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        allowFullScreen
      ></iframe>
      
      {loading ? (
        <p className="mt-4 text-gray-500">Loading video details...</p>
      ) : (
        <div className="mt-4">
          <h2 className="text-xl font-bold">{snippet?.title}</h2>
        </div>
      )}
      </div>
      
      <div className="p-4">
      {loading ? <p>Loading...</p> : <VideoGrid videos={items} />}
    </div>
    </div>
  );
};

export default Watch;
