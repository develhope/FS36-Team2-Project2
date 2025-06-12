import "./CardContainer.css";
import Card from "./Card";

const CardContainer = () => {
  const cardArray = [
    { id: "card1", pathimg: "./src/assets/Card/1x1/1.jpg" },
    { id: "card2", pathimg: "./src/assets/Card/1x1/2.jpg" },
    { id: "card3", pathimg: "./src/assets/Card/1x1/3.jpg" },
    { id: "card4", pathimg: "./src/assets/Card/1x1/4.jpg" },
    { id: "card5", pathimg: "./src/assets/Card/1x1/5.jpg" },
    { id: "card6", pathimg: "./src/assets/Card/1x2/6.jpg" },
    { id: "card7", pathimg: "./src/assets/Card/2x1/7.jpg" },
    { id: "card8", pathimg: "./src/assets/Card/1x2/8.jpg" },
    { id: "card9", pathimg: "./src/assets/Card/1x1/9.jpg" },
    { id: "card10", pathimg: "./src/assets/Card/1x1/10.jpg" },
    { id: "card11", pathimg: "./src/assets/Card/2x1/11.jpg" },
    { id: "card12", pathimg: "./src/assets/Card/1x2/12.jpg" },
    { id: "card13", pathimg: "./src/assets/Card/1x1/13.jpg" },
    { id: "card14", pathimg: "./src/assets/Card/1x1/14.jpg" },
    { id: "card15", pathimg: "./src/assets/Card/2x1/15.jpg" },
    { id: "card16", pathimg: "./src/assets/Card/1x1/16.jpg" },
    { id: "card17", pathimg: "./src/assets/Card/1x1/17.jpg" },
    { id: "card18", pathimg: "./src/assets/Card/1x2/18.jpg" },
    { id: "card19", pathimg: "./src/assets/Card/2x1/19.jpg" },
    { id: "card20", pathimg: "./src/assets/Card/1x1/20.jpg" },
    { id: "card21", pathimg: "./src/assets/Card/2x1/21.jpg" },
    { id: "card22", pathimg: "./src/assets/Card/2x1/22.jpg" },
    { id: "card23", pathimg: "./src/assets/Card/2x1/23.jpg" },
    { id: "card24", pathimg: "./src/assets/Card/1x1/24.png" },
    { id: "card25", pathimg: "./src/assets/Card/1x1/25.png" },
    { id: "card26", pathimg: "./src/assets/Card/1x1/26.png" },
  ];

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
