import React from "react";
import Tile from "../tile/Tile";

export const TileList = ({items}) => {
  return (
    <div>
      {items.map((item, index) => (
        <Tile name={item.name} description={Object.values(item).splice(1)} /> //Replace Description with the rest of the info from contacts
      ))}
    </div>
  );
};
