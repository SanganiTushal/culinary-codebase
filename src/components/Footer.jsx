import { useYoutubeData } from "../Contexts/YoutubeContext";

const instaUrl =
  "http://www.instagram.com/tushal_ni_rasoi?igsh=MWNxaDNyYXI2cDV6eQ==";
const fbUrl = "http://www.facebook.com/profile.php?id=61554226090826";
const channelId = "UCauZxHqwMe5nkFm3wSOg_Yw";

export default function Footer() {
  const { data } = useYoutubeData();
  return (
    <>
      {data && (
        <footer className="py-4 bg-amber-200 mx-4">
          <div className="flex items-center justify-center space-x-4 text-slate-500">
            {/* YouTube Channel Link */}
            <a
              href={`https://www.youtube.com/channel/${channelId}`}
              target="_blank"
              rel="noopener noreferrer"
              className=" hover:underline"
            >
              Visit my YouTube Channel
            </a>

            {/* Social Media Links */}
            <div className="flex items-center space-x-4">
              {/* Facebook Link */}
              <a
                href={fbUrl}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline"
              >
                Facebook
              </a>

              {/* Instagram Link */}
              <a
                href={instaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline"
              >
                Instagram
              </a>
            </div>
          </div>
        </footer>
      )}
    </>
  );
}
