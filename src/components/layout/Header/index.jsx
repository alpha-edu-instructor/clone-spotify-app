import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { GrHomeRounded } from "react-icons/gr";
import logo from "../../../assets/img/logo.svg";
import logoDark from "../../../assets/img/logo-dark.svg";
import { ALBUMS_PAGE_ROUTE, SEARCH_PAGE_ROUTE } from "../../../utils/consts";
import { useTheme } from "../../../providers/ThemeProvider";
import styles from "./Header.module.css";

export default function Header() {
  const { isLightTheme } = useTheme();
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
    <div className={styles.header}>
      <div className={styles.part}>
        <img
          src={isLightTheme ? logoDark : logo}
          alt="Logo"
          width={32}
          height={32}
        />
      </div>
      <div className={styles.part}>
        <Link href={ALBUMS_PAGE_ROUTE} className={styles.btn}>
          <GrHomeRounded />
        </Link>
        <form className={styles.search} onSubmit={handleSubmit}>
          <input
            type="text"
            className={styles.input}
            placeholder="Что хочешь включить?"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <FiSearch className={styles.icon} />
        </form>
      </div>
      <div className={styles.part}></div>
    </div>
  );
}
