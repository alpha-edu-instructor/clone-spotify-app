import ArtistItem from "./ArtistItem";
import Loader from "../shared/Loader";
import Error from "../shared/Error";
import { useTopArtists } from "../../hooks/useTopArtists";

export default function ArtistList() {
  const { artists, isLoading, isError } = useTopArtists();

  return (
    <div className="artist-wrapper">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error />
      ) : (
        <div className="artist-grid">
          {artists.map((artist) => (
            <ArtistItem
              name={artist.name}
              profilePictureUrl={artist.images[0].url}
              id={artist.id}
              key={artist.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
