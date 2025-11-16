import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTrendingVideos } from '../redux/videoSlice';
import VideoGrid from '../components/VideoGrid';

const Home = () => {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.videos);

  useEffect(() => {
    dispatch(getTrendingVideos());
  }, [dispatch]);

  return (
    <div className="p-4">
      {loading ? <p>Loading...</p> : <VideoGrid videos={items} />}
    </div>
  );
};

export default Home;
