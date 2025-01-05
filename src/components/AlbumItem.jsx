export default function AlbumItem() {
  return (
    <div className="album-item">
      <img
        src="https://placehold.co/360/1ed760/000000/png"
        alt=""
        className="album-poster"
      />
      <h4 className="album-title">Название альбома</h4>
      <p className="album-artist">Имя исполнителя</p>
    </div>
  );
}
