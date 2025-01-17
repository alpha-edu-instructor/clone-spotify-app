import classNames from "classnames";
import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";
import { useTheme } from "../../providers/ThemeProvider";

export default function Layout(props) {
  const { isLightTheme } = useTheme();

  // useEffect(() => {
  //   document.body.style.background === isLightTheme ? "#fff" : "#000";
  // }, [isLightTheme]);

  return (
    <div
      className={classNames("app", {
        light: isLightTheme
      })}
    >
      <Header />
      <div className="container">
        <Sidebar />
        {props.children}
      </div>
    </div>
  );
}
