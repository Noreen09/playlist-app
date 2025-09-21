import { Playlist } from "../types";

const KEY = "my_playlists_v1";

export function loadPlaylists(): Playlist[] {
  const raw = localStorage.getItem(KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw) as Playlist[];
  } catch {
    return [];
  }
}

export function savePlaylists(list: Playlist[]) {
  localStorage.setItem(KEY, JSON.stringify(list));
}

// ✅ new helper
export function savePlaylist(playlist: Playlist) {
  const playlists = loadPlaylists();
  playlists.push(playlist);
  savePlaylists(playlists);
}
