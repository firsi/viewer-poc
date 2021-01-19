// Libraries
import React from "react";
import { useSelector } from "react-redux";

// Components
import EventsInstance from "./EventsInstance";
import GenericDataComponent from "../genericData/GenericDataComponent";
import TabbedCards from "../TabbedCards";

// Helpers
import { eventsData } from "../../../lib/helpers/formatDataProperties";

const Events: React.FC = (): JSX.Element => {
  const data = useSelector((state) => state.place.data);
  const dataProperties = (e) => eventsData(e);
  const nestedArrays = ["About"];

  return (
    <TabbedCards title="Events">
      <EventsInstance />
      <GenericDataComponent data={data.event} dataProperties={dataProperties} nestedArrays={nestedArrays} />
    </TabbedCards>
  );
};

export default Events;
