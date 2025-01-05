import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import AlbumList from "./components/AlbumList";
import "./assets/css/style.css";

export default function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Sidebar />
        <AlbumList />
      </div>
    </div>
  );
}
