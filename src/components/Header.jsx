import { FiSearch } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import logo from "../assets/img/logo.svg";

export default function Header() {
  return (
    <div className="header">
      <div className="header-part">
        <img
          src={logo}
          alt="Logo"
          width={32}
          height={32}
          className="header-img"
        />
      </div>
      <div className="header-part">
        <a href="test" className="home-btn">
          <GrHomeRounded />
        </a>
        <div className="search">
          <input
            type="text"
            className="search-input"
            placeholder="Что хочешь включить?"
          />
          <FiSearch className="search-icon" />
        </div>
      </div>
      <div className="header-part"></div>
    </div>
  );
}
