import { useState } from "react";
import { Playlist, Song } from "../types";
import { savePlaylist } from "../utils/storage";
import { useNavigate } from "react-router-dom";
import { allSongs } from "../songs"; // ✅ import library

export default function Create() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [cover, setCover] = useState("");
  const [songs, setSongs] = useState<Song[]>([]);
  const navigate = useNavigate();

  const toggleSong = (song: Song) => {
    if (songs.some((s) => s.id === song.id)) {
      setSongs(songs.filter((s) => s.id !== song.id)); // remove if already added
    } else {
      setSongs([...songs, song]); // add if not there
    }
  };

  const handleSubmit = () => {
    if (!name || songs.length === 0) {
      alert("Please enter a name and select at least one song!");
      return;
    }

    const newPlaylist: Playlist = {
      id: Date.now().toString(),
      name,
      description,
      cover: cover || "https://picsum.photos/seed/custom/300/300",
      songs,
      createdBy: "You",
    };

    savePlaylist(newPlaylist);
    navigate("/profile");
  };

  return (
    <main className="flex-1 p-10 text-white bg-gradient-to-br from-[#0d0d1a] via-[#1a0f2e] to-[#0a0a1f] min-h-screen space-y-6">
      <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text">
        Create a Playlist
      </h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Playlist name"
        className="w-full p-3 rounded bg-white/10 text-white outline-none"
      />
      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full p-3 rounded bg-white/10 text-white outline-none"
      />
      <input
        value={cover}
        onChange={(e) => setCover(e.target.value)}
        placeholder="Cover image URL (optional)"
        className="w-full p-3 rounded bg-white/10 text-white outline-none"
      />

      <h2 className="text-xl font-semibold mt-6">Select Songs 🎶</h2>
      <div className="space-y-2 bg-black/30 p-4 rounded-lg">
        {allSongs.map((s) => (
          <label key={s.id} className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={songs.some((song) => song.id === s.id)}
              onChange={() => toggleSong(s)}
            />
            <span>
              {s.title} — <span className="text-gray-400">{s.artist}</span>
            </span>
          </label>
        ))}
      </div>

      <button
        onClick={handleSubmit}
        className="px-6 py-3 rounded-lg bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-bold hover:scale-105 transition"
      >
        Save Playlist
      </button>
    </main>
  );
}
