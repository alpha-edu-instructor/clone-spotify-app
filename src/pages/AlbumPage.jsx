import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MdNumbers } from "react-icons/md";
import { FaRegClock } from "react-icons/fa";
import Loader from "../components/shared/Loader";
import TrackItem from "../components/tracks/TrackItem";
import { ACCESS_TOKEN } from "../utils/consts";
import { convertMsToTime } from "../utils/utils";

export default function AlbumPage() {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [albumData, setAlbumData] = useState({});
  const [artists, setArtists] = useState([]);
  const [images, setImages] = useState([]);
  const [tracks, setTracks] = useState([]);

  useEffect(() => {
    async function fetchAlbumData() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://api.spotify.com/v1/albums/${id}?market=KZ`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${ACCESS_TOKEN}`
            }
          }
        );
        const data = await response.json();
        console.log(data);
        console.log(data.tracks.items);
        setAlbumData(data);
        setArtists(data.artists);
        setImages(data.images);
        setTracks(data.tracks.items);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }
    fetchAlbumData();
  }, [id]);

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
      <div className="album-wrapper">
        <div className="album-header">
          {/* <img src={images[0].url} alt="" className="album-img" /> */}
          <div className="album-content">
            <p className="album-content__type">Альбом</p>
            <h1 className="album-content__name">{albumData.name}</h1>
            <div className="album-content__author">
              <span>{artists.map((item) => item.name)}</span>
              <div className="album-content__circle"></div>
              {/* <p>{albumData.release_date.substring(0, 4)}</p> */}
              <div className="album-content__circle"></div>
              <p>{albumData.total_tracks} треков, 42 мин. 31 сек.</p>
            </div>
          </div>
        </div>
        <div className="track-table">
          <div className="track-table__header">
            <div className="track-header__text">
              <MdNumbers />
            </div>
            <div className="track-header__text">Название</div>
            <div className="track-header__text">
              <FaRegClock />
            </div>
          </div>
          <div className="track-table__body">
            {tracks.map((track, index) => (
              <TrackItem
                key={track.id}
                title={track.name}
                number={index + 1}
                duration={convertMsToTime(track.duration_ms)}
                author={artists[0].name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
