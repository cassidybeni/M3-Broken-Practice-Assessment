import React from "react";

const BerryCard = ({ berry }) => {
  return (
    <div>
      <h2>{berry.name}</h2>
      <h2>{berry.firmness}</h2>
    </div>
  );
};

export default BerryCard;
