import React from "react";
import "./CardContainer.css";
import Card from "./Card";

const CardContainer = ({ cardArray }) => {
  return (
    <div className="card-container-wrapper">
      <div className="card-container">
        <Card id="card1" pathimg="./src/assets/Card/1x1/1.jpg" />
        <Card id="card2" pathimg="./src/assets/Card/1x1/2.jpg" />
        <Card id="card3" pathimg="./src/assets/Card/1x1/3.jpg" />
        <Card id="card4" pathimg="./src/assets/Card/1x1/4.jpg" />
        <Card id="card5" pathimg="./src/assets/Card/1x1/5.jpg" />
        <Card id="card6" pathimg="./src/assets/Card/1x2/6.jpg" />
        <Card id="card7" pathimg="./src/assets/Card/2x1/7.jpg" />
        <Card id="card8" pathimg="./src/assets/Card/1x2/8.jpg" />
        <Card id="card9" pathimg="./src/assets/Card/1x1/9.jpg" />
        <Card id="card10" pathimg="./src/assets/Card/1x1/10.jpg" />
        <Card id="card11" pathimg="./src/assets/Card/2x1/11.jpg" />
        <Card id="card12" pathimg="./src/assets/Card/1x2/12.jpg" />
        <Card id="card13" pathimg="./src/assets/Card/1x1/13.jpg" />
        <Card id="card14" pathimg="./src/assets/Card/1x1/14.jpg" />
        <Card id="card15" pathimg="./src/assets/Card/2x1/15.jpg" />
        <Card id="card16" pathimg="./src/assets/Card/1x1/16.jpg" />
        <Card id="card17" pathimg="./src/assets/Card/1x1/17.jpg" />
        <Card id="card18" pathimg="./src/assets/Card/1x2/18.jpg" />
        <Card id="card19" pathimg="./src/assets/Card/2x1/19.jpg" />
        <Card id="card20" pathimg="./src/assets/Card/1x1/20.jpg" />
        <Card id="card21" pathimg="./src/assets/Card/2x1/21.jpg" />
        <Card id="card22" pathimg="./src/assets/Card/2x1/22.jpg" />
        <Card id="card23" pathimg="./src/assets/Card/2x1/23.jpg" />
        <Card id="card24" pathimg="./src/assets/Card/1x1/24.png" />
        <Card id="card25" pathimg="./src/assets/Card/1x1/25.png" />
        <Card id="card26" pathimg="./src/assets/Card/1x1/26.png" />
      </div>
    </div>
  );
};

export default CardContainer;
