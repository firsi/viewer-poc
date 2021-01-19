// Libraries
import React from "react";
import GoogleMapReact from "google-map-react"; // https://github.com/google-map-react/google-map-react
import { useSelector } from "react-redux";

// UI Library
import { Card } from "antd";

const GeoLocation = () => {
  const data = useSelector((state) => state.place.data);
  const mapSettings = {
    center: {
      lat: data.latitude,
      lng: data.longitude,
    },
    zoom: 11,
  };

  return (
    <Card>
      <div style={{ height: "50vh", width: "100%", borderRadius: "5px" }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyDLJ3EJc4IbB5qTrIoGSfwdMCWfv1O-Ufk" }}
          center={mapSettings.center}
          zoom={mapSettings.zoom}
        />
      </div>
    </Card>
  );
};

export default GeoLocation;
