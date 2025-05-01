import { Link, NavLink, Routes, Route } from "react-router-dom";
import Stats from "../pages/StatsPage";
import Spells from "../pages/SpellsPage";
import Skills from "../pages/SkillsPage";
import Actions from "../pages/ActionsPage";
import Feats from "../pages/FeatsPage";
import "bootstrap/dist/css/bootstrap.min.css"; // Make sure to import Bootstrap CSS


function Header() {
  return (
    <>
<header className="text-white d-flex align-items-center w-100" style={{ backgroundColor: '#800020' }}>
  <nav className="d-flex w-100">
    <NavLink to="/stats" className={({ isActive }) => `fw-bold text-center px-3 py-3 flex-fill text-decoration-none ${isActive ? 'bg-dark-red text-white' : 'text-white'}`}>Stats</NavLink>
    <NavLink to="/spells" className={({ isActive }) => `fw-bold text-center px-3 py-3 flex-fill text-decoration-none ${isActive ? 'bg-dark-red text-white' : 'text-white'}`}>Spells</NavLink>
    <NavLink to="/skills" className={({ isActive }) => `fw-bold text-center px-3 py-3 flex-fill text-decoration-none ${isActive ? 'bg-dark-red text-white' : 'text-white'}`}>Skills</NavLink>
    <NavLink to="/actions" className={({ isActive }) => `fw-bold text-center px-3 py-3 flex-fill text-decoration-none ${isActive ? 'bg-dark-red text-white' : 'text-white'}`}>Actions</NavLink>
    <NavLink to="/feats" className={({ isActive }) => `fw-bold text-center px-3 py-3 flex-fill text-decoration-none ${isActive ? 'bg-dark-red text-white' : 'text-white'}`}>Feats</NavLink>
  </nav>
</header>


      <main>
        <Routes>
          <Route path="/" element={<Stats />} />
          <Route path="/stats" element={<Stats />} />
          <Route path="/spells" element={<Spells />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/actions" element={<Actions />} />
          <Route path="/feats" element={<Feats />} />
        </Routes>
      </main>
    </>
  );
}

export default Header;
