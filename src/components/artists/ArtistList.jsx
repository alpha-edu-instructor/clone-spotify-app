import { useState, useEffect } from "react";
import { artistsLinks } from "../../utils/consts";
import ArtistItem from "./ArtistItem";
import Loader from "../shared/Loader";
import Error from "../shared/Error";
import { axiosInstance } from "../../services/axios";

export default function ArtistList() {
  const [artists, setArtists] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    async function getTopArtists() {
      try {
        setLoading(true);
        const ids = artistsLinks.join(",");
        const res = await axiosInstance.get("/artists", {
          params: {
            ids: ids,
            market: "KZ"
          }
        });
        setArtists(res.data.artists);
      } catch (error) {
        console.log("Error:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getTopArtists();
  }, []);

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
