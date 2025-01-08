import Header from "./components/core/Header";
import Sidebar from "./components/core/Sidebar";
import "./assets/css/style.css";
import TopAlbumsPage from "./pages/TopAlbumsPage";
import { Routes, Route } from "react-router-dom";
import TopArtistsPage from "./pages/TopArtistsPage";
import SettingsPage from "./pages/SettingsPage";
import NotFoundPage from "./pages/NotFoundPage";

// top albums - /
// top artists - /artists
// settings - /settings

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<TopAlbumsPage />} />
          <Route path="/artists" element={<TopArtistsPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}
