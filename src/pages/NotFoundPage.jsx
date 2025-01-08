import notFoundImage from "../assets/img/not-found.svg";
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="wrapper">
      <div className="nf-container">
        <img src={notFoundImage} alt="Not Found" className="nf-img" />
        <h2 className="nf-title">
          Ничего на найдено. Перейдите на <Link to="/">главную</Link>{" "}
        </h2>
      </div>
    </div>
  );
}
