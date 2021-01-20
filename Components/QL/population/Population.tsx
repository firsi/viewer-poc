// Libraries
import React from "react";
import { useSelector } from "react-redux";

// Components
import GenericDataComponent from "../genericData/GenericDataComponent";
import PopulationInstance from "./PopulationInstance";
import TabbedCards from "../TabbedCards";

// Helpers
import { populationData } from "../../../lib/helpers/formatDataProperties";

const Population: React.FC = (): JSX.Element => {
  const data = useSelector((state) => state.place.data);
  const dataProperties = () => populationData(data);

  return (
    <TabbedCards title="Population 1900-2020">
      <PopulationInstance />
      <GenericDataComponent data={data} dataProperties={dataProperties} />
    </TabbedCards>
  );
};

export default Population;
