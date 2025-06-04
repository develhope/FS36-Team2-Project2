import React from "react";

const Card = ({ pathimg, testo, id }) => {
  if (testo) {
    return <p>{testo}</p>;
  }

  return (
    <div id={id}>
      <img src={pathimg} />
    </div>
  );
};

export default Card;
