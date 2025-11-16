import { useEffect, useState } from 'react';


const useVideoDetails = (videoId) => {
  const [videoDetails, setVideoDetails] = useState(null);
  const [loader, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const res = await fetch(
          `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
        );
        const data = await res.json();
        setVideoDetails(data.items?.[0]);
      } catch (err) {
        console.error('Failed to fetch video details:', err);
      } finally {
        setLoading(false);
      }
    };

    if (videoId) fetchVideoDetails();
  }, [videoId]);

  return { videoDetails, loader };
};

export default useVideoDetails;
