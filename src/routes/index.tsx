import { Link } from "react-router-dom";
import { seedPlaylists } from "../data";

export default function Home() {
  return (
    <main className="flex-1 p-10 bg-gradient-to-br from-[#0d0d1a] via-[#1a0f2e] to-[#0a0a1f] text-white">
      
      {/* Top section: Left text + Right Chill Vibes card */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 mb-14">
        
        {/* Left: App Title */}
        <div className="max-w-md text-center lg:text-left">
          <h1 className="text-6xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]">
            My <br/>Playlist App
          </h1>
          <p className="text-gray-400 mt-3 text-lg">
            Listen to your favorite songs
          </p>
        </div>

        {/* Right: Chill Vibes Card */}
        <div className="w-72 h-80 bg-black/40 backdrop-blur-lg rounded-2xl p-6 border border-white/10 shadow-[0_0_25px_rgba(0,255,255,0.3)] hover:scale-105 transition">
          <div className="w-36 h-36 mx-auto mb-6 rounded-full bg-gradient-to-tr from-pink-500 via-purple-500 to-cyan-400 shadow-[0_0_20px_rgba(255,0,255,0.8)]"></div>
          <h2 className="text-center text-2xl font-bold text-white">Chill Vibes</h2>
          <p className="text-center text-gray-400 text-sm">50 songs</p>
        </div>
      </div>

      {/* Search + Grid */}
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-cyan-400 text-transparent bg-clip-text">
          Playlists
        </h2>
        <input
          type="text"
          placeholder="Search"
          className="px-4 py-2 rounded-xl bg-white/10 border border-white/20 text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400"
        />
      </div>

      {/* Playlists Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {seedPlaylists.map((p) => (
          <Link
            key={p.id}
            to={`/playlists/${p.id}`}
            className="rounded-2xl p-[2px] bg-gradient-to-br from-pink-600 via-purple-600 to-cyan-500 shadow-[0_0_15px_rgba(255,0,255,0.5)] hover:scale-105 transition"
          >
            <div className="bg-black/40 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 mb-4 rounded-full bg-gradient-to-tr from-cyan-400 via-purple-500 to-pink-500 shadow-[0_0_15px_rgba(0,255,255,0.6)]"></div>
              <h3 className="text-lg font-semibold">{p.name}</h3>
              <p className="text-gray-400 text-sm">{p.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
