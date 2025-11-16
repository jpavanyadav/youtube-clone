import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchVideosByQuery } from '../utils/api';
import VideoGrid from '../components/VideoGrid';

const SearchResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchTerm = queryParams.get('q');

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const loadVideos = async () => {
      const results = await fetchVideosByQuery(searchTerm);
      setVideos(results);
    };
    loadVideos();
  }, [searchTerm]);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">Results for: {searchTerm}</h2>
      <VideoGrid videos={videos} />
    </div>
  );
};

export default SearchResults;
