import "./CardContainer.css";
import Card from "./Card";
import { useGetImages } from "../hooks/useGetImages";
const CardContainer = () => {
  const { images: cardArray } = useGetImages();
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
