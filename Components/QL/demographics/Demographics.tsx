// Libraries
import React from "react";
import { useSelector } from "react-redux";

// Components
import GenericDataComponent from "../genericData/GenericDataComponent";
import DemographicsInstance from "./DemographicsInstance";
import TabbedCards from "../TabbedCards";

// Helpers
import { demographicData } from "../../../lib/helpers/formatDataProperties";

const Demographics: React.FC = (): JSX.Element => {
  const data = useSelector((state) => state.place.data);
  const dataProperties = () => demographicData(data);

  return (
    <TabbedCards title="Demographics">
      <DemographicsInstance />
      <GenericDataComponent data={data} dataProperties={dataProperties} />
    </TabbedCards>
  );
};

export default Demographics;
