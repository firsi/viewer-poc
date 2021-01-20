import React from "react";
import { useSelector } from "react-redux";

// UI Library
import { Card, Typography } from "antd";

// Icons
import { NewbornImage, GrowthImage, GenderImage, AgeImage } from "@iso/assets";

// Components
import SymmetricBarChart from "../../Charts/AntDesign/SymmetricBarChart";
import HorizontalStackedBarChart from "../../Charts/G2/HorizontalStackedBarChart";

const DemographicsInstance: React.FC = (): JSX.Element => {
  const data = useSelector((state) => state.place.data);
  const { Title, Text } = Typography;

  return (
    <>
      <Card>
        <Title level={4} style={{ textAlign: "center" }}>
          Age & Gender
        </Title>
        <img alt="" src={AgeImage} style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />

        <div style={{ margin: "auto", width: "50%" }}>
          <SymmetricBarChart />
        </div>
        <Title level={4} style={{ textAlign: "center" }}>
          Growth Rate
        </Title>
        <img alt="" src={NewbornImage} style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
        <div style={{ margin: "auto", width: "50%" }}>
          <img alt="" src={GrowthImage} />
          {data && data.demographicsGrowthRate && <Text strong>{data.demographicsGrowthRate}</Text>}
        </div>
        <img alt="" src={GenderImage} style={{ display: "block", marginLeft: "auto", marginRight: "auto" }} />
        <Title level={4} style={{ textAlign: "center" }}>
          Genders
        </Title>
        <HorizontalStackedBarChart />
      </Card>
    </>
  );
};

export default DemographicsInstance;
