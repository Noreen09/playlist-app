import { useParams } from "react-router-dom";
import { seedPlaylists } from "../data";
import { loadPlaylists } from "../utils/storage";
import { usePlayer } from "./PlayerContext"; // ⬅ import the global player
import { useNavigate } from "react-router-dom";


export default function PlaylistDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { playPlaylist, playSong } = usePlayer(); // ⬅ get controls from context

  const playlist =
    [...seedPlaylists, ...loadPlaylists()].find((p) => p.id === id);

  if (!playlist) {
    return (
      <main className="flex-1 p-10 bg-gradient-to-br from-[#0d0d1a] via-[#1a0f2e] to-[#0a0a1f] text-white min-h-screen">
        <h1 className="text-3xl font-bold text-pink-400 drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]">
          Playlist not found 
        </h1>
      </main>
    );
  }

  return (
    <main className="flex-1 p-10 bg-gradient-to-br from-[#0d0d1a] via-[#1a0f2e] to-[#0a0a1f] text-white min-h-screen space-y-10">
      <header className="flex gap-8 items-center">
        {playlist.cover && (
          <img
            src={playlist.cover}
            alt={playlist.name}
            className="w-48 h-48 object-cover rounded-2xl shadow-[0_0_25px_rgba(0,255,255,0.4)]"
          />
        )}
        <div>
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_20px_rgba(255,0,255,0.8)]">
            {playlist.name}
          </h1>
          <p className="text-gray-400 mt-2">{playlist.description}</p>
          <p className="text-gray-500 text-sm mt-1">
            {playlist.songs.length} songs • by {playlist.createdBy ?? "Unknown"}
          </p>

          {/* ▶ Play whole playlist */}
 {/* Playlist play button */}
<button
  onClick={() => {
    playPlaylist(playlist);
    navigate("/"); // ✅ go back home
  }}
  className="mt-5 px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(0,255,255,0.6)] hover:scale-105 transition"
>
  ▶ Play
</button>
</div>
</header>
{/* Songs list */}
<ul className="mt-6 space-y-3">
  {playlist.songs.map((s) => (
    <li
      key={s.id}
      onClick={() => {
        playSong(s, playlist);
        navigate("/"); // ✅ go back home
      }}
      className="flex items-center justify-between p-4 bg-black/30 backdrop-blur-md hover:bg-black/50 transition cursor-pointer"
    >
      <span>{s.title}</span>
      <span className="text-sm opacity-70">{s.artist}</span>
    </li>
  ))}
</ul>

    </main>
  );
}
