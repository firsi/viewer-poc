// Libraries
import React from "react";
import { useSelector } from "react-redux";

// UI Library
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Tabs, Typography } from "antd";

// Components
import GenericDataComponent from "../genericData/GenericDataComponent";
import SpecialDaysInstance from "./SpecialDaysInstance";

const SpecialDays: React.FC = (): JSX.Element => {
  const data = useSelector((state) => state.place.data);
  const { Title } = Typography;
  const { TabPane } = Tabs;

  const dataProperties = () => [];
  return (
    <>
      <div className="tab-card-container">
        <Title level={3}>Special Days </Title>
        <Tabs type="card" defaultActiveKey="1">
          <TabPane
            tab={
              <span>
                {" "}
                <CaretLeftOutlined />{" "}
              </span>
            }
            key="1"
          >
            <SpecialDaysInstance />
          </TabPane>
          <TabPane
            tab={
              <span>
                {" "}
                <CaretRightOutlined />{" "}
              </span>
            }
            key="2"
          >
            <GenericDataComponent data={data} dataProperties={dataProperties} />
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};

export default SpecialDays;
