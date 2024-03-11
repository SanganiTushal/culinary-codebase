import { useYoutubeData } from "../Contexts/YoutubeContext";

const channelId = "UCauZxHqwMe5nkFm3wSOg_Yw";

export default function Header() {
  const { data, error } = useYoutubeData();

  return (
    <>
      {error && <h1 className="text-red-500 font-bold text-3xl">{error}</h1>}
      {data && (
        <div className="bg-hero mb-10">
          <header className="flex items-center justify-between p-4 text-slate-600  mb-6">
            <div className="flex items-center">
              <a
                href={`https://www.youtube.com/channel/${channelId}`}
                target="_blank"
                rel="noopener noreferrer"
                className=" hover:underline"
              >
                <img
                  src={data.channelInfo.snippet.thumbnails.medium.url}
                  alt={data.channelInfo.snippet.title}
                  className="w-12 h-12 mr-4 rounded-full"
                />
              </a>

              <h2 className="text-2xl font-bold  text-amber-500">
                {data.channelInfo.snippet.title}
              </h2>
            </div>

            <div className="flex space-x-4">
              <p className="text-lg font-bold">
                <span className="text-amber-500">
                  {data.channelInfo.statistics.subscriberCount}
                </span>{" "}
                Subscribers
              </p>
              <span>|</span>
              <p className="text-lg font-bold">
                <span className="text-amber-500">
                  {(data.channelInfo.statistics.viewCount / 1000000).toFixed(2)}
                  M
                </span>{" "}
                Views
              </p>
            </div>
          </header>

          <div className="p-8 mb-4">
            <h1 className="text-5xl font-bold mb-4 text-amber-500">
              A Wide Range Of Delicious Recipes
            </h1>
            <p className="text-lg text-slate-500">
              Welcome to "Tushal Ni Rasoi" – the heart and soul of Indian
              culinary exploration! 🍲🌶️ Join me in my kitchen as I unlock the
              secrets of authentic Indian recipes, blending tradition with a
              modern twist. From the sizzle of spices to the simmering of
              curries, my channel is your go-to destination for a flavorful
              journey through the diverse and vibrant tapestry of Indian
              cuisine. Subscribe now to "Tushal Ni Rasoi" and let's embark on a
              delicious adventure together, where every recipe tells a story and
              every bite is a taste of India's rich culinary heritage! 🌶️🔥✨
            </p>
          </div>
        </div>
      )}
    </>
  );
}
