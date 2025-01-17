import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Loader from "../components/shared/Loader";
import { axiosInstance } from "../services/axios";
import TrackItem from "../components/tracks/TrackItem";
import { convertMsToTime } from "../utils/utils";

export default function SearchPage() {
  const [searchParams] = useSearchParams();

  const [tracks, setTracks] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const query = searchParams.get("query");

    async function fetchTracks() {
      try {
        setIsLoading(true);
        const { data } = await axiosInstance.get("/search?", {
          params: {
            q: query,
            type: "track",
            market: "KZ",
            limit: 10
          }
        });
        setTracks(data.tracks.items);
      } catch (error) {
        console.log("Axios Error:", error);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTracks();
  }, [searchParams]);

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="album-wrapper">
          <Loader />
        </div>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <h1 className="wrapper-title">Результаты поиска</h1>
      <div className="search-list">
        {tracks.map((track, i) => (
          <TrackItem
            number={i + 1}
            title={track.name}
            duration={convertMsToTime(track.duration_ms)}
            author={track.artists.map((item) => item.name).join(", ")}
            isExtended={true}
            imageUrl={track.album.images[0].url}
            key={track.id}
          />
        ))}
      </div>
    </div>
  );
}
