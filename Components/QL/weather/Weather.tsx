// LIbraries
import React from "react";
import { useSelector } from "react-redux";

import { weatherDataProperties } from "lib/helpers/formatDataProperties";

// Components
import GenericDataComponent from "../genericData/GenericDataComponent";
import WeatherInstance from "./WeatherInstance";
import TabbedCards from "../TabbedCards";

const Weather: React.FC = (): JSX.Element => {
  const data = useSelector((state) => state.place.data);
  const dataProperties = () => weatherDataProperties(data);
  return (
    <>
      <TabbedCards title="Weather">
        <WeatherInstance />
        <GenericDataComponent data={data} dataProperties={dataProperties} />
      </TabbedCards>
    </>
  );
};

export default Weather;
