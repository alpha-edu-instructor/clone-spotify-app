import { Link } from "react-router-dom";
import { SINGLE_ARTIST_PAGE_ROUTE } from "../../utils/consts";

export default function ArtistItem({ id, name, profilePictureUrl }) {
  return (
    <Link
      to={SINGLE_ARTIST_PAGE_ROUTE.replace(":id", id)}
      className="artist-item"
    >
      <img src={profilePictureUrl} alt={name} className="artist-poster" />
      <h4 className="artist-name">{name}</h4>
      <p className="artist-type">Исполнитель</p>
    </Link>
  );
}
