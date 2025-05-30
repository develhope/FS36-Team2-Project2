import React from "react";

const Card = ({ pathimg, testo }) => {
  if (testo) {
    return <p>{testo}</p>;
  }

  return <img src={pathimg} />;
};

export default Card;
