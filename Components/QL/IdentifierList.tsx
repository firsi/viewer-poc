// Libraries
import React from "react";
import { useSelector } from "react-redux";
import { Tabs, Typography } from "antd";
import { CaretLeftOutlined, CaretRightOutlined } from "@ant-design/icons";

// Components
import GenericDataComponent from "./genericData/GenericDataComponent";

// Helpers
import { identifierListData } from "../../lib/helpers/formatDataProperties";

const { TabPane } = Tabs;
const { Title } = Typography;

const IdentifierList: React.FC = (): JSX.Element => {
  const data = useSelector((state) => state.place.data);

  // Mock data:
  let obj = { name: "", value: "" };
  data.identifierList = [obj, obj, obj, obj];
  data.identifierList[0].name = "Wikipedia";
  data.identifierList[0].value = "https://en.wikipedia.org/wiki/Reykjavik";
  data.identifierList[1].name = "Travel World";
  data.identifierList[1].value = "https://travelworld.com/visit/Reykjavik";
  data.identifierList[2].name = "Britanica";
  data.identifierList[2].value = "https://britanica.com/unique/Reykjavik";
  data.identifierList[3].name = "Leit.is";
  data.identifierList[3].value = "https://www.leit.is/everything-you-need-to-know-about-reykjavik";

  // TODO: Finish work with arrays... See https://dev.azure.com/quicklookup/QuickLookup/_workitems/edit/548

  const dataProperties = () => identifierListData(data);
  return (
    <>
      <div className="tab-card-container">
        <Title level={3}>IdentifierList</Title>
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
            There is data in the data part...
            {/* <IdentifierListInstance /> */}
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

export default IdentifierList;
