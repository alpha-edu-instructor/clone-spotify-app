import { IoIosAlbums } from "react-icons/io";
import { HiMiniUsers } from "react-icons/hi2";
import { IoMdSettings } from "react-icons/io";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-content">
        <div className="sidebar-header">
          <h2 className="sidebar-title">Панель управление Spotify</h2>
        </div>
        <div className="sidebar-links">
          <a href="test" className="sidebar-link">
            <div className="sidebar-link__icon">
              <IoIosAlbums />
            </div>
            <p className="sidebar-link__title">Альбомы</p>
          </a>
          <a href="test" className="sidebar-link">
            <div className="sidebar-link__icon">
              <HiMiniUsers />
            </div>
            <p className="sidebar-link__title">Исполнители</p>
          </a>
          <a href="test" className="sidebar-link">
            <div className="sidebar-link__icon">
              <IoMdSettings />
            </div>
            <p className="sidebar-link__title">Настройки</p>
          </a>
        </div>
      </div>
      <div className="sidebar-footer">
        Этот проект создан исключительно в учебных целях. Все права на
        оригинальный дизайн и функциональность принадлежат Spotify.
      </div>
    </div>
  );
}
