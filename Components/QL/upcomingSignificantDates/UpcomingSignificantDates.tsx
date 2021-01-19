import React from "react";
import { useSelector } from "react-redux";

import { upcomingSignificantDatesData } from "../../../lib/helpers/formatDataProperties";
import GenericDataComponent from "../genericData/GenericDataComponent";
import UpcomingSignificantDatesInstance from "./UpcomingSignificantDatesInstance";
import TabbedCards from "../TabbedCards";

const UpcomingSignificantDates = () => {
  const data = useSelector((state) => state.place.data);
  const dataProperties = () => upcomingSignificantDatesData(data);
  return (
    <TabbedCards title="Significant Dates">
      <UpcomingSignificantDatesInstance />
      <GenericDataComponent data={data} dataProperties={dataProperties} />
    </TabbedCards>
  );
};

export default UpcomingSignificantDates;
