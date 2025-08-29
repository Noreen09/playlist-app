import { Playlist } from "./types";

export const seedPlaylists: Playlist[] = [
  {
    id: "chill",
    name: "Chill Vibes",
    description: "Relaxing lofi & chillhop.",
    cover: "https://picsum.photos/seed/chill/300/300",
    songs: [
      { id: "s1", title: "Sunset Drive", artist: "Lofi Beats", duration: "3:45" },
      { id: "s2", title: "Raindrops", artist: "Chillhop Crew", duration: "4:20" },
    ],
    createdBy: "System",
  },
  {
    id: "workout",
    name: "Workout 🔥",
    description: "High energy bangers.",
    cover: "https://picsum.photos/seed/workout/300/300",
    songs: [
      { id: "s3", title: "Beast Mode", artist: "DJ Max", duration: "3:15" },
      { id: "s4", title: "Power Up", artist: "Fit Beats", duration: "2:58" },
    ],
    createdBy: "System",
  },
];
