export default function TrackItem({
  number,
  title,
  duration,
  author,
  imageUrl,
  isExtended = false
}) {
  const classNames = isExtended
    ? "track-line track-line__extended"
    : "track-line";
  return (
    <div className={classNames}>
      <div className="track-number">{number}</div>
      {isExtended && (
        <div className="track-poster">
          <img src={imageUrl} alt="Poster" />
        </div>
      )}
      <div className="track-song">
        <h6 className="track-song__name">{title}</h6>
        <p className="track-song__author">{author}</p>
      </div>
      <div className="track-duration">{duration}</div>
    </div>
  );
}
