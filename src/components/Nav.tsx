import { NavLink } from "react-router-dom";
import { Play } from "lucide-react"; // neon play icon

const base =
  "px-3 py-2 rounded-lg transition-all duration-300 hover:scale-110";
const active =
  "bg-gradient-to-r from-pink-500 to-cyan-400 text-black font-semibold shadow-[0_0_15px_rgba(255,0,255,0.7)]";
const idle =
  "text-gray-300 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(0,255,255,0.5)]";

export default function Nav() {
  return (
    <aside className="w-60 h-screen bg-black/40 backdrop-blur-xl border-r border-white/10 p-6 flex flex-col justify-between">
      <div>
        {/* Floating Play Button */}
      <button className="self-start mt-10 p-4 rounded-full bg-gradient-to-r from-pink-500 to-cyan-400 text-black shadow-[0_0_20px_rgba(255,0,255,0.6)] hover:scale-110 transition">
        <Play size={28} />
      </button>
        
<br/><br/>
        {/* Nav Links */}
        <nav className="flex flex-col gap-3">
          {[
            { to: "/", label: "Home", end: true },
            { to: "/playlists", label: "Playlists" },
            { to: "/create", label: "Create" },
        { to: "/search", label: "Search" },
        { to: "/profile", label: "Profile" },
          ].map((i) => (
            <NavLink
              key={i.to}
              to={i.to}
              end={i.end as boolean | undefined}
              className={({ isActive }) =>
                `${base} ${isActive ? active : idle}`
              }
            >
              {i.label}
            </NavLink>
          ))}
        </nav>
      </div>

      
    </aside>
  );
}
