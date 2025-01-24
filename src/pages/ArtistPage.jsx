import { useParams } from "react-router-dom";
import { PiSealCheckFill } from "react-icons/pi";
import Loader from "../components/shared/Loader";
import TrackItem from "../components/tracks/TrackItem";
import { convertMsToTime } from "../utils/utils";
import { useArtistData } from "../hooks/useArtistData";

export default function ArtistPage() {
  const { id } = useParams();
  const { artistData, isLoading, tracks } = useArtistData(id);

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
      <div className="artist-wrapper">
        <div className="artist-header">
          {artistData.images && artistData.images[0]?.url && (
            <img src={artistData.images[0].url} alt="" className="artist-img" />
          )}
          <div className="artist-content">
            <p className="artist-content__verify">
              <PiSealCheckFill />
              Подтвержденный исполнитель
            </p>
            <h1 className="artist-content__name">{artistData.name}</h1>
            <div className="artist-content__audience">
              {artistData.followers && artistData.followers.total} слушателей за
              месяц
            </div>
          </div>
        </div>
        <div className="track-table">
          <h2 className="track-table__title">Популярные треки</h2>
          <div className="track-table__body">
            {tracks.map((item, index) => {
              if (
                item.album &&
                item.album.images &&
                item.album.images[0]?.url
              ) {
                return (
                  <TrackItem
                    number={index + 1}
                    title={item.name}
                    duration={convertMsToTime(item.duration_ms)}
                    imageUrl={item.album.images[0].url}
                    isExtended={true}
                    key={item.id}
                  />
                );
              }
              return null;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
