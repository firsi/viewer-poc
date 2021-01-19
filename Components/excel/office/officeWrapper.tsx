/* global console, document, Excel, Office */
/* eslint-disable no-console */
// libraries
import React from "react";
import { useSelector } from "react-redux";

// components
import DateAndTime from "../../QL/dateAndTime/DateAndTime";
import Demographics from "../../QL/demographics/Demographics";
import Events from "../../QL/events/Events";
import GeoLocation from "../../QL/geolocation/GeoLocation";
import MainTile from "../../QL/mainTile/MainTile";
import Population from "../../QL/population/Population";
import QLHeader from "../QLHeader";
import UpcomingSignificantDates from "../../QL/upcomingSignificantDates/UpcomingSignificantDates";
import Weather from "../../QL/weather/Weather";

// Hooks
import useOfficeHook from "./useOfficeHook";

interface OfficeWrapperProps {
  mainPageRendered: boolean;
}

const OfficeWrapper: React.FC<OfficeWrapperProps> = ({ mainPageRendered }): JSX.Element => {
  const data = useSelector((state) => state.place.data);
  const { isOfficeInitialized, hostIsExcel } = useOfficeHook(mainPageRendered);

  return (
    <>
      <QLHeader />
      {data && (
        <>
          <MainTile />
          <Weather />
          <GeoLocation />
          <Events />
          <Demographics />
          <Population />
          <DateAndTime />
          <UpcomingSignificantDates />
        </>
      )}
    </>
  );
};

export default OfficeWrapper;
