import { Link } from "react-router-dom";

function Card({ dataHousing }) {
  return (
    <div className="card">
      <Link to={`/housings/` + dataHousing.id} className="link-card">
        <img
          src={dataHousing.cover}
          alt={dataHousing.title}
          className="card-cover"
        />
        <h2 className="card-title">{dataHousing.title}</h2>
      </Link>
    </div>
  );
}

export default Card;
