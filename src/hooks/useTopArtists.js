import { useState, useEffect } from "react";
import { artistsLinks } from "../utils/consts";
import { axiosInstance } from "../services/axios";

export function useTopArtists() {
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

  return { artists, isLoading, isError };
}
