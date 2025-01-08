import AlbumList from "../components/albums/AlbumList";

export default function TopAlbumsPage() {
  return (
    <div className="wrapper">
      <h1 className="wrapper-title">Популярные альбомы</h1>
      <AlbumList />
    </div>
  );
}
