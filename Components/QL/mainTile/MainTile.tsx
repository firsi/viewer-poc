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

  return (
    <TabbedCards title="&nbsp;" tabHeight="auto">
      <MainTileInstance />
      <GenericDataComponent data={data} dataProperties={dataProperties} />
    </TabbedCards>
  );
};

export default MainTile;
