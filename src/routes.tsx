import { RouteObject } from "react-router-dom";
import Layout from "./routes/layout";
import Home from "./routes/index";
import Playlists from "./routes/playlists";
import PlaylistDetail from "./routes/playlists.$id";
import Create from "./routes/create";
import Search from "./routes/search";
import Profile from "./routes/profile";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "playlists", element: <Playlists /> },
      { path: "playlists/:id", element: <PlaylistDetail /> },
      { path: "create", element: <Create /> },
      { path: "search", element: <Search /> },
      { path: "profile", element: <Profile /> },
    ],
  },
];

export default routes;
