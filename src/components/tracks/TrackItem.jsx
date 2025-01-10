export default function TrackItem({ number, title, duration, author }) {
  return (
    <div className="track-line">
      <div className="track-number">{number}</div>
      <div className="track-song">
        <h6 className="track-song__name">{title}</h6>
        <p className="track-song__author">{author}</p>
      </div>
      <div className="track-duration">{duration}</div>
    </div>
  );
}
