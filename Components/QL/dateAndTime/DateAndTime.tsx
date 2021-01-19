// Libraries
import React from "react";
import { useSelector } from "react-redux";

// Components
import DateAndTimeInstance from "./DateAndTimeInstance";
import GenericDataComponent from "../genericData/GenericDataComponent";
import TabbedCards from "../TabbedCards";

// Helpers
import { dateAndTimeData } from "../../../lib/helpers/formatDataProperties";

const DateAndTime: React.FC = (): JSX.Element => {
  const data = useSelector((state) => state.place.data);
  const dataProperties = () => dateAndTimeData(data);

  return (
    <TabbedCards title="Today">
      <DateAndTimeInstance />
      <GenericDataComponent data={data} dataProperties={dataProperties} />
    </TabbedCards>
  );
};

export default DateAndTime;
