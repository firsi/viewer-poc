import React from "react";
import { useSelector } from "react-redux";
import { Tabs, Typography } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

// Components
import GenericDataComponent from "../genericData/GenericDataComponent";
import RelationsGraphInstance from "./RelationsGraphInstance";

const RelationsGraph: React.FC = (): JSX.Element => {
  const data = useSelector((state) => state.place.data);
  const { Title } = Typography;
  const { TabPane } = Tabs;

  const dataProperties = () => [];
  return (
    <>
      <div className="tab-card-container">
        <Title level={3}>RelationsGraph </Title>
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
            <RelationsGraphInstance />
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

export default RelationsGraph;
