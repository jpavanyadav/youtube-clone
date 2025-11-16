export const fetchVideos = async (endpoint) => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/${endpoint}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  return data.items;
};

export const fetchVideosByQuery = async (query) => {
  const res = await fetch(
    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${query}&type=video&maxResults=20&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
  const data = await res.json();
  return data.items;
};
