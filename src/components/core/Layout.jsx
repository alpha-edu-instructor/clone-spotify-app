import Header from "../layout/Header";
import Sidebar from "../layout/Sidebar";

export default function Layout(props) {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        {props.children}
      </div>
    </div>
  );
}
