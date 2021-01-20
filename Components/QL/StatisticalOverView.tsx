import React from "react";
import { useSelector } from "react-redux";

// UI Libraries
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";
import { Tabs, Typography } from "antd";

// Icons
import GenericDataComponent from "./genericData/GenericDataComponent";

const { TabPane } = Tabs;
const { Title } = Typography;

const StatisticalOverView: React.FC = (): JSX.Element => {
  const data = useSelector((state) => state.place.data);
  const dataProperties = () => [];
  return (
    <>
      <div className="tab-card-container">
        <Title level={3}>Statistical OverView</Title>
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
            TODO...
            {/* <StatisticalOverViewInstance /> */}
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

export default StatisticalOverView;
