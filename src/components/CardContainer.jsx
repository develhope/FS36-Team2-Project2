import "./CardContainer.css";
import Card from "./Card";

const CardContainer = ({ cardArray }) => {
  return (
    <div className="card-container-wrapper">
      <div className="card-container">
        {cardArray.map((card) => (
          <Card key={card.id} id={card.id} pathimg={card.pathimg} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
