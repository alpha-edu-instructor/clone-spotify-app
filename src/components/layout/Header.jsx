import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import logo from "../../assets/img/logo.svg";
import { SEARCH_PAGE_ROUTE } from "../../utils/consts";

export default function Header() {
  const [searchInput, setSearchInput] = useState("");

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (searchInput) {
      navigate(SEARCH_PAGE_ROUTE + "?query=" + searchInput);
      setSearchInput("");
    }
  }

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
        <form className="search" onSubmit={handleSubmit}>
          <input
            type="text"
            className="search-input"
            placeholder="Что хочешь включить?"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <FiSearch className="search-icon" />
        </form>
      </div>
      <div className="header-part"></div>
    </div>
  );
}
