import "../styles/ActivityCard.css";

const ActivityCard = ({ src, title, detailText }) => {
  return (
    <div className="activity-card">
      <li className="list-container">
        <div className="listimg" style={{backgroundImage:`url(${src})`}}>
          {/* <img src={src} alt="" /> */}
        </div>
        <div className="details">
          <h3>{title} </h3>
          <p>{detailText}</p>
        </div>
      </li>
    </div>
  );
};

export default ActivityCard;
