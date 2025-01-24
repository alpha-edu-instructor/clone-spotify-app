import { useEffect, useState } from "react";
import { axiosInstance } from "../services/axios";

export function useArtistData(id) {
  const [isLoading, setIsLoading] = useState(false);
  const [artistData, setArtistData] = useState({});
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    async function fetchArtistData() {
      try {
        setIsLoading(true);
        const responseArtist = await axiosInstance.get(
          `artists/${id}?market=KZ`
        );
        const responseTracks = await axiosInstance.get(
          `artists/${id}/top-tracks?market=KZ`
        );

        setArtistData(responseArtist.data);
        setTracks(responseTracks.data.tracks);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchArtistData();
  }, [id]);

  return { artistData, tracks, isLoading };
}
