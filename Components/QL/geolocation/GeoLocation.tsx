// Libraries
import React from "react";
import { useSelector } from "react-redux";

// helpers
import { geolocationData } from "../../../lib/helpers/formatDataProperties";

// Components
import GenericDataComponent from "../genericData/GenericDataComponent";
import GeoLocationInstance from "./GeoLocationInstance";
import TabbedCards from "../TabbedCards";

const GeoLocation: React.FC = (): JSX.Element => {
  const data = useSelector((state) => state.place.data);

  const dataProperties = () => geolocationData(data);
  return (
    <TabbedCards title="GeoLocation">
      <GeoLocationInstance />
      <GenericDataComponent data={data} dataProperties={dataProperties} />
    </TabbedCards>
  );
};

export default GeoLocation;
