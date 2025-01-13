import { useEffect, useState } from "react";
import AlbumItem from "./AlbumItem";
import Loader from "../shared/Loader";
import Error from "../shared/Error";
import { albumLinks } from "../../utils/consts";

export default function AlbumList() {
  const [albums, setAlbums] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState(false);

  useEffect(() => {
    async function getAlbums() {
      try {
        setLoading(true);
        const ids = albumLinks.join(",");
        const response = await fetch(
          `https://api.spotify.com/v1/albums?ids=${ids}&market=KZ`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            }
          }
        );
        const data = await response.json();
        setAlbums(data.albums);
      } catch (error) {
        console.log("Error:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    getAlbums();
  }, []);

  return (
    <div className="album-wrapper">
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Error />
      ) : (
        <div className="album-grid">
          {albums.map((item) => (
            <AlbumItem
              title={item.name}
              author={item.artists[0].name}
              imageUrl={item.images[0].url}
              id={item.id}
              key={item.id}
            />
          ))}
        </div>
      )}
    </div>
  );
}
