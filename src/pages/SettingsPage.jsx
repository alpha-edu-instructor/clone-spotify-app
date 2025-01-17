import classNames from "classnames";
import { useTheme } from "../providers/ThemeProvider";

export default function SettingsPage() {
  const { isLightTheme, toggleTheme } = useTheme();

  return (
    <div className="wrapper">
      <h1 className="wrapper-title">Настройки</h1>
      <div className="theme">
        <p className="theme-text">Темная тема</p>
        <div
          className={classNames("toggle", {
            toggle__active: isLightTheme
          })}
          onClick={toggleTheme}
        >
          <span className="toggle-round"></span>
        </div>
        <p className="theme-text">Светлая тема</p>
      </div>
    </div>
  );
}
