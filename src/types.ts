export type Song = {
  id: string;
  title: string;
  artist: string;
  duration: string; // "3:45"
};

export type Playlist = {
  id: string;
  name: string;
  description?: string;
  cover?: string;
  songs: Song[];
  createdBy?: string;
};
