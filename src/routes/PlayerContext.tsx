import { createContext, useContext, useState, useRef } from "react";
import { Song, Playlist } from "../types";

type PlayerContextType = {
  currentPlaylist: Playlist | null;
  currentSong: Song | null;
  isPlaying: boolean;
  playPlaylist: (playlist: Playlist) => void;
  playSong: (song: Song, playlist?: Playlist) => void; // added here
  togglePlayPause: () => void;
};

const PlayerContext = createContext<PlayerContextType | undefined>(undefined);

export function PlayerProvider({ children }: { children: React.ReactNode }) {
  const [currentPlaylist, setCurrentPlaylist] = useState<Playlist | null>(null);
  const [currentSong, setCurrentSong] = useState<Song | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const playPlaylist = (playlist: Playlist) => {
    setCurrentPlaylist(playlist);
    setCurrentSong(playlist.songs[0]); // start with first song
    if (audioRef.current) {
      audioRef.current.src = playlist.songs[0].url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // ✅ FIX: now inside PlayerProvider
  const playSong = (song: Song, playlist?: Playlist) => {
    if (playlist) {
      setCurrentPlaylist(playlist);
    }
    setCurrentSong(song);
    if (audioRef.current) {
      audioRef.current.src = song.url;
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <PlayerContext.Provider
      value={{
        currentPlaylist,
        currentSong,
        isPlaying,
        playPlaylist,
        playSong, // ✅ included now
        togglePlayPause,
      }}
    >
      {children}
      <audio ref={audioRef} />
    </PlayerContext.Provider>
  );
}

export function usePlayer() {
  const ctx = useContext(PlayerContext);
  if (!ctx) throw new Error("usePlayer must be used inside PlayerProvider");
  return ctx;
}
