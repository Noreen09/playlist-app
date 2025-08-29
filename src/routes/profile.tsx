import { loadPlaylists } from "../utils/storage";
import { Link } from "react-router-dom";

export default function Profile() {
  const mine = loadPlaylists();

  return (
    <main className="flex-1 p-10 bg-gradient-to-br from-[#0d0d1a] via-[#1a0f2e] to-[#0a0a1f] text-white min-h-screen">
      <h1 className="text-5xl font-extrabold mb-4 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]">
        Your Profile
      </h1>
      <p className="text-gray-400 mb-10">
        Playlists you created on this device.
      </p>

      {mine.length === 0 ? (
        <p className="text-gray-400">
          No playlists yet.{" "}
          <Link
            to="/create"
            className="text-cyan-300 underline hover:text-pink-400"
          >
            Create one
          </Link>
          .
        </p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {mine.map((p) => (
            <Link
              key={p.id}
              to={`/playlists/${p.id}`}
              className="rounded-2xl p-[2px] bg-gradient-to-br from-pink-600 via-purple-600 to-cyan-500 shadow-[0_0_20px_rgba(255,0,255,0.5)] hover:scale-105 transition"
            >
              <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6">
                {p.cover && (
                  <img
                    src={p.cover}
                    alt=""
                    className="rounded-xl mb-4 w-full h-44 object-cover shadow-[0_0_15px_rgba(0,255,255,0.4)]"
                  />
                )}
                <h3 className="font-semibold text-white">{p.name}</h3>
                <p className="text-gray-400 text-sm">{p.songs.length} songs</p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </main>
  );
}
