import { useState, useEffect } from "react";
import { artistsLinks, ACCESS_TOKEN } from "../../utils/consts";
import ArtistItem from "./ArtistItem";
import Loader from "../core/Loader";
import Error from "../core/Error";

export default function ArtistList() {
  const [artists, setArtists] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    async function getTopArtists() {
      try {
        setLoading(true);
        const ids = artistsLinks.join(",");
        const response = await fetch(
          `https://api.spotify.com/v1/artists?ids=${ids}&market=KZ`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`
            }
          }
        );
        const data = await response.json();
        console.log(data.artists);
        setArtists(data.artists);
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
              key={artist}
            />
          ))}
        </div>
      )}
    </div>
  );
}
