import React from "react";
import dynamic from "next/dynamic";
import { useSelector } from "react-redux";
import { Card, Col, Row } from "antd";
import Demographics from "../demographics/Demographics";

const AreaChartComponent = dynamic(() => import("../../Charts/Rechart/AreaChartComponent"), { ssr: false });

const PopulationInstance: React.FC = (): JSX.Element => {
  const data = useSelector((state) => state.place.data);

  return (
    <Row>
      <Col span={24}>
        <Card>
          <AreaChartComponent />
        </Card>
      </Col>
      <Col span={24} style={{ padding: "0 10px", marginTop: "-25px" }}>
        <Demographics />
      </Col>
    </Row>
  );
};

export default PopulationInstance;
