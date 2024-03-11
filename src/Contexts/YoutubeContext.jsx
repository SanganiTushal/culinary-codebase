import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const apiKey = "AIzaSyCPTeeW_YUBhrKMeXgysmPW25eO0AKhOiI";
const channelId = "UCauZxHqwMe5nkFm3wSOg_Yw";
const maxResults = 8;
const popularMaxVideos = 4;

const fetchChannelData = async () => {
  try {
    const [
      videosResponse,
      popularVideoResponse,
      channelInfoResponse,
      playlistResponse,
    ] = await Promise.all([
      axios.get(
        `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=${maxResults}`
      ),
      axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channelId}&type=video&order=viewCount&maxResults=${popularMaxVideos}&key=${apiKey}
        `),
      axios.get(
        `https://www.googleapis.com/youtube/v3/channels?key=${apiKey}&id=${channelId}&part=snippet,statistics`
      ),
      axios.get("https://www.googleapis.com/youtube/v3/playlists", {
        params: {
          part: "snippet",
          channelId: `${channelId}`,
          key: `${apiKey}`,
          maxResults: 4,
        },
      }),
    ]);
    const videos = videosResponse.data.items;
    const popularVideos = popularVideoResponse.data.items;
    const channelInfo = channelInfoResponse.data.items[0];
    const playlistInfo = playlistResponse.data.items;
    return { videos, popularVideos, channelInfo, playlistInfo };
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};

const YoutubeData = createContext();

export default function YoutubeProvider({ children }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        setError("");
        const result = await fetchChannelData();
        setData(result);
      } catch (error) {
        if (error.response?.status === 403)
          return setError(
            "API Request limit exceeded. Please remember to revisit this website after one day."
          );
        setError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <YoutubeData.Provider value={{ data, error }}>
        {children}
      </YoutubeData.Provider>
    </>
  );
}

export const useYoutubeData = () => {
  return useContext(YoutubeData);
};
