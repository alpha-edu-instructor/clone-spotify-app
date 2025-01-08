export default function ArtistItem({ name, profilePictureUrl }) {
  return (
    <div className="artist-item">
      <img src={profilePictureUrl} alt={name} className="artist-poster" />
      <h4 className="artist-name">{name}</h4>
      <p className="artist-type">Исполнитель</p>
    </div>
  );
}
