import { useYoutubeData } from "../Contexts/YoutubeContext";

export default function PopularVideos() {
  const { data } = useYoutubeData();
  return (
    <>
      {data && (
        <section className="my-8 mx-4">
          <h2 className="text-4xl font-bold mb-4 text-amber-500 border-b border-gray-400 inline-block">
            Most Popular Videos
          </h2>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.popularVideos.map((video) => (
              <div
                key={video.id.videoId}
                className="bg-white p-4 shadow-md rounded-md"
              >
                <a
                  href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    className="w-full h-48 object-cover mb-4 rounded-md"
                  />
                  <h2 className="text-lg font-semibold mb-2 text-slate-600">
                    {video.snippet.title}
                  </h2>
                  <p className="text-slate-500">{video.snippet.description}</p>
                </a>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
