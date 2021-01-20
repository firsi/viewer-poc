import React from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { Card } from "antd";

const AreaChartComponent = dynamic(() => import("../../Charts/Rechart/AreaChartComponent"), { ssr: false });

const PopulationInstance: React.FC = (): JSX.Element => {
  const data = useSelector((state) => state.place.data);

  return (
    <>
      <Card>
        <AreaChartComponent />
      </Card>
    </>
  );
};

export default PopulationInstance;
