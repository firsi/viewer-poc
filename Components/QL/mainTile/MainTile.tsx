// Libraries
import React from "react";
import { useSelector } from "react-redux";

// Components
import GenericDataComponent from "../genericData/GenericDataComponent";
import MainTileInstance from "./MainTileInstance";
import TabbedCards from "../TabbedCards";

// Helpers
import { mainTileData } from "../../../lib/helpers/formatDataProperties";

const MainTile: React.FC = (): JSX.Element => {
  const data = useSelector((state) => state.place.data);
  const dataProperties = () => mainTileData(data);

  // Change color hard coding
  return (
    <div style={{ marginTop: "-24px" }}>
      <TabbedCards title={data.name} titleColor="rgba(0,0,0,0.85)" titleSize="14px" tabHeight="auto">
        <MainTileInstance />
        <GenericDataComponent data={data} dataProperties={dataProperties} />
      </TabbedCards>
    </div>
  );
};

export default MainTile;
