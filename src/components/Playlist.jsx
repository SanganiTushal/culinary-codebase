import { useYoutubeData } from "../Contexts/YoutubeContext";

export default function Playlist() {
  const { data } = useYoutubeData();
  return (
    <>
      {data && (
        <section className="my-10 mx-4">
          <h2 className="text-4xl font-bold mb-6 text-amber-500 border-b border-gray-400 inline-block">
            Popular Playlists
          </h2>
          <div className="grid gap-1 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.playlistInfo.map((playlist) => (
              <div key={playlist.id}>
                <img
                  src={playlist.snippet.thumbnails.standard.url}
                  alt={playlist.snippet.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <p className="text-lg font-semibold text-slate-600">
                  {playlist.snippet.title}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
