import { FormEvent, useState } from "react";
import { Playlist, Song } from "../types";
import { loadPlaylists, savePlaylists } from "../utils/storage";

export default function Create() {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [songs, setSongs] = useState<Song[]>([]);

  const addSong = () => {
    const title = prompt("Song title?")?.trim();
    const artist = prompt("Artist?")?.trim();
    const duration = prompt("Duration (3:15)?")?.trim() || "3:00";
    if (!title || !artist) return;
    setSongs((prev) => [
      ...prev,
      { id: crypto.randomUUID(), title, artist, duration },
    ]);
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name) return alert("Name required");
    const newPlaylist: Playlist = {
      id: name.toLowerCase().replace(/\s+/g, "-") + "-" + Date.now(),
      name,
      description: desc,
      songs,
      createdBy: "You",
      cover: `https://picsum.photos/seed/${encodeURIComponent(name)}/300/300`,
    };
    const all = loadPlaylists();
    savePlaylists([...all, newPlaylist]);
    alert("Playlist created!");
    setName("");
    setDesc("");
    setSongs([]);
  };

  return (
    <main className="flex-1 p-10 bg-gradient-to-br from-[#0d0d1a] via-[#1a0f2e] to-[#0a0a1f] text-white min-h-screen">
      <h1 className="text-5xl font-extrabold mb-10 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 text-transparent bg-clip-text drop-shadow-[0_0_15px_rgba(255,0,255,0.8)]">
        Create Playlist
      </h1>

      <form
        onSubmit={onSubmit}
        className="max-w-xl space-y-6 bg-black/30 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-[0_0_25px_rgba(0,255,255,0.3)]"
      >
        <input
          className="w-full rounded-lg bg-white/10 p-3 outline-none text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-400"
          placeholder="Playlist name *"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="w-full rounded-lg bg-white/10 p-3 outline-none text-white placeholder-gray-400 focus:ring-2 focus:ring-pink-400"
          placeholder="Description"
          rows={3}
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h2 className="font-semibold text-lg text-cyan-300 drop-shadow-[0_0_10px_rgba(0,255,255,0.6)]">
              Songs ({songs.length})
            </h2>
            <button
              type="button"
              onClick={addSong}
              className="px-4 py-2 rounded-md bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-semibold shadow-[0_0_15px_rgba(255,0,255,0.6)] hover:scale-105 transition"
            >
              + Add song
            </button>
          </div>

          <ul className="text-sm text-gray-300 space-y-1">
            {songs.map((s, i) => (
              <li key={s.id}>
                {i + 1}. {s.title} — {s.artist} ({s.duration})
              </li>
            ))}
          </ul>
        </div>

        <button className="px-6 py-3 w-full rounded-lg bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-bold shadow-[0_0_20px_rgba(255,0,255,0.7)] hover:scale-105 transition">
          Create
        </button>
      </form>
    </main>
  );
}
