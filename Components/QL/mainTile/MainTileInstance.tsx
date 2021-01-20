// Library
import React, { useState } from "react";
import { useSelector } from "react-redux";

// UI Library
import { Image, Divider, Card, Row, Col, Collapse, Typography, Space } from "antd";
import basicStyle from "@iso/assets/styles/constants";

// Icons
import {
  PhoneIcon,
  EmailIcon,
  FaxIcon,
  WebIcon,
  FacebookIcon,
  LinkedInIcon,
  InstagramIcon,
} from "./MainTileInstanceIcons";

// Components
import MainTileInstanceMore from "./MainTileInstanceMore";

const MainTileInstance: React.FC = (): JSX.Element => {
  const data = useSelector((state) => state.place.data);
  const [displayIcons, setDisplayIcons] = useState({ show: true, style: { display: "inline" } });
  const { Panel } = Collapse;
  const { Text } = Typography;
  const { gutter } = basicStyle;

  const onChange = () => {
    if (displayIcons.show) {
      console.log(`Show: ${displayIcons.show}`);
      setDisplayIcons({ show: false, style: { display: "none" } });
    } else {
      console.log(`Show: ${displayIcons.show}`);
      setDisplayIcons({ show: true, style: { display: "inline" } });
    }
  };

  return (
    <>
      <Card>
        {data && (
          <>
            <Row style={{ padding: "0 0 10px 0" }}>
              <Image src={data.image} />
            </Row>
            <Row gutter={gutter} align="middle" justify="start">
              <Col span={5} flex={1}>
                <Image src={data.logo} />
              </Col>
              <Col span={1} />
              <Col>
                <Row>
                  <Space size={1} direction="vertical" align="start">
                    <Space size={1} direction="vertical" align="start">
                      <Text className="ql-entity-name">{data.name}</Text>
                    </Space>
                    <Space size={-4} direction="vertical" align="start">
                      <Text className="ql-entity-description">{data.description}</Text>
                      <Text type="secondary">{data.alternateName}</Text>
                    </Space>
                  </Space>
                </Row>
              </Col>
            </Row>
            <Divider style={{}} />
            <Row>
              <Col span={24}>
                <Collapse bordered={false} ghost expandIconPosition="right" onChange={onChange}>
                  <Panel
                    header={
                      <span style={displayIcons.style}>
                        <Space size={2} direction="horizontal" align="start">
                          <PhoneIcon />
                          <EmailIcon />
                          <FaxIcon />
                          <WebIcon />
                          <FacebookIcon />
                          <LinkedInIcon />
                          <InstagramIcon />
                        </Space>
                      </span>
                    }
                    key="1"
                  >
                    <MainTileInstanceMore />
                  </Panel>
                </Collapse>
              </Col>
            </Row>
          </>
        )}
        {/* TODO: These two are missing from displaying! Type doesn't print because of @ but additionalType isn't sent over from the API */}
        {/* <h6> {data.type}</h6>
                <h6>{data.additionalType}</h6> */}
      </Card>
    </>
  );
};

export default MainTileInstance;
