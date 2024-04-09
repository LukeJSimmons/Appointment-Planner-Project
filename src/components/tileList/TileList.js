import React from "react";
import Tile from "../tile/Tile";

export const TileList = ({objects}) => {
  return (
    <div>
      {objects.map((object, index) => (
        <Tile name={object.name} description={[]} /> //Replace Description with the rest of the info from contacts
      ))}
    </div>
  );
};
