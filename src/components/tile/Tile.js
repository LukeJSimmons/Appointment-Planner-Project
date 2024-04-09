import React from "react";

export const Tile = ({name, description}) => {
  return (
    <div className="tile-container">
      <p className="tile-title">{name}</p>
      {description.map((item, index) => ( //WIll not work until Tilelist is getting info correctly
        <p className="tile">{item}</p>
      ))}
    </div>
  );
};

export default Tile;
