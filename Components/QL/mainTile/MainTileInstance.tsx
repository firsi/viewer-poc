// Library
import React, { useState } from "react";
import { useSelector } from "react-redux";

// UI Library
import { Card, Row, Col, Collapse, Space } from "antd";

import {
  PhoneIcon,
  EmailIcon,
  FaxIcon,
  WebIcon,
  FacebookIcon,
  LinkedInIcon,
  InstagramIcon,
} from "../../shared/CustomIcons";

// Components
import CustomCollapse from "../../shared/CustomCollapse";
import MainTileInstanceMore from "./MainTileInstanceMore";
import MainTileHeader from "./MainTileHeader";

const MainTileInstance: React.FC = (): JSX.Element => {
  const data = useSelector((state) => state.place.data);
  const [displayIcons, setDisplayIcons] = useState({ show: true, style: { display: "inline" } });
  const { Panel } = Collapse;

  const onChange = () => {
    if (displayIcons.show) {
      setDisplayIcons({ show: false, style: { display: "none" } });
    } else {
      setDisplayIcons({ show: true, style: { display: "inline" } });
    }
  };

  return (
    <>
      <Card>
        {data && (
          <>
            <MainTileHeader
              alternateName={data.alternateName}
              image={data.image}
              logo={data.logo}
              name={data.name}
              description={data.description}
            />
            <Row>
              <Col span={24}>
                <CustomCollapse onChange={onChange}>
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
                </CustomCollapse>
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
