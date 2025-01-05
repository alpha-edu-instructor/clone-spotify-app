import AlbumItem from "./AlbumItem";

export default function AlbumList() {
  return (
    <div className="wrapper">
      <h1 className="wrapper-title">Популярные альбомы</h1>
      <div className="album-wrapper">
        <div className="album-grid">
          <AlbumItem />
        </div>
      </div>
    </div>
  );
}
