import YoutubeProvider from "../src/Contexts/YoutubeContext";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Playlist from "./components/Playlist";
import PopularVideos from "./components/PopularVideos";
import RecentVideos from "./components/RecentVideos";

const App = () => {
  return (
    <YoutubeProvider>
      <Header />
      <RecentVideos />
      <PopularVideos />
      <Playlist />
      <Footer />
    </YoutubeProvider>
  );
};

export default App;
