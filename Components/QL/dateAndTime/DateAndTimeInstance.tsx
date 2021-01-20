/* eslint-disable import/no-unresolved */
// Libraries
import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

// UI library
import { Card, Col, Row, Space, Typography } from "antd";

// Icons
import {
  VeturImage,
  SagitariusImage,
  Group198Image,
  DifferenceImage,
  SunriseImage,
  SunsetImage,
  DayLengthImage,
  MoonStateImage,
} from "@iso/assets";

// helpers
import { getTimeDifference } from "../../../lib/helpers/utils";

// TODO: Move styles to CSS when ready...
const qlBlue = "#3F6587";
const qlGray = "#F2F2F2";
const borderRadius = "5px";
const rowBottomMargin = 0;
const rowTopMargin = 0;
const textLeftMargin = 5;
const gutter = 4;
const lightColor = { color: "white" };
const darkColor = { color: qlBlue };

const DarkRow = styled(Row)`
  border: 1px solid;
  border-radius: 5px;
  background: ${qlBlue};
  color: white;
  width: 100%;
`;
const GrayRow = styled(Row)`
  border-radius: 5px;
  background: ${qlGray};
  color: ${qlBlue};
  width: 100%;
`;

const DateAndTimeInstance: React.FC = (): JSX.Element => {
  const { Text, Title } = Typography;
  let data = useSelector((state) => state.place.data);
  const { plusMinus, hoursDiff } = getTimeDifference(data.toDay_Time_UTC_24h);
  data.toDay_timeDifference_between_clients_location_and_this_place = hoursDiff;

  const showRow1 = (): JSX.Element => (
    <Row gutter={gutter}>
      <Col span={16}>
        <DarkRow>
          <Col span={10}>
            {/* TODO: Make this title larger and stretch (flex-it) it down to content in the next col */}
            <Title level={1} style={{ color: "white", marginLeft: textLeftMargin }}>
              {data.toDay_Number_Of_Day_In_Month}
            </Title>
          </Col>
          <Col span={14}>
            <Row>
              <Space size={5} direction="vertical" align="start">
                <Title level={5} style={lightColor}>
                  {data.toDay_Day_Month_Text}
                </Title>
                <Title level={5} style={lightColor}>
                  {data.toDay_Year_Number}
                </Title>
              </Space>
            </Row>
          </Col>
        </DarkRow>
      </Col>
      <Col span={8}>
        <DarkRow style={{ height: "50%" }} justify="center" align="middle">
          Week {data.toDay_Week_Number}
        </DarkRow>
        <DarkRow style={{ height: "50%" }} justify="center" align="middle">
          Day {data.toDay_Day_Year_Number}
        </DarkRow>
      </Col>
    </Row>
  );
  const showRow2 = (): JSX.Element => (
    <Row gutter={gutter} style={{ marginTop: rowTopMargin, marginBottom: rowBottomMargin }}>
      <Col span={16}>
        <GrayRow justify="center" align="middle" style={{ height: "35px" }}>
          <div style={{ marginLeft: textLeftMargin }}>
            <Text strong>
              {data.toDay_Day_FullName_En}/{data.toDay_Day_FullName_CurrentCulture}
            </Text>
          </div>
        </GrayRow>
      </Col>
      <Col span={4}>
        <GrayRow justify="center" style={{ height: "35px" }}>
          <div style={{ margin: "5px" }}>
            <img alt="" src={VeturImage} />
          </div>
          {/* {data.toDay_Season} */}
        </GrayRow>
      </Col>
      <Col span={4}>
        <GrayRow justify="center" style={{ height: "35px" }}>
          <div style={{ margin: "5px" }}>
            <img alt="" src={SagitariusImage} />
          </div>
          {/* {data.toDay_Zodiac} */}
        </GrayRow>
      </Col>
    </Row>
  );
  const showRow3 = (): JSX.Element => (
    <Row gutter={gutter} style={{ marginTop: rowTopMargin, marginBottom: rowBottomMargin }}>
      <Col span={16}>
        <DarkRow justify="start">
          <Space size={0} style={{ marginLeft: textLeftMargin }} direction="vertical" align="start">
            <Text style={lightColor}>{data.name} Time</Text>
            <Title style={{ color: "white", marginBottom: 0 }}>{data.toDay_Time_UTC_24h}</Title>
            <Text style={lightColor}> UTC/GMT/EST</Text>
          </Space>
        </DarkRow>
      </Col>
      <Col span={8}>
        <Row style={{ borderRadius, background: qlGray, marginBottom: 5, height: "50%" }} justify="center">
          <Space size={2} direction="horizontal" align="center">
            <img alt="" src={Group198Image} />
            {data.toDay_DaylightSavings === "true" ? (
              <Text style={darkColor}> Has DLS</Text>
            ) : (
              <Text style={darkColor}> No DLS</Text>
            )}
          </Space>
        </Row>
        <Row
          gutter={gutter}
          style={{
            borderRadius,
            background: qlGray,
            marginLeft: 0.1,
            marginRight: 0.1,
            marginBottom: rowBottomMargin,
            height: "45%",
          }}
          justify="center"
        >
          <Space size={2} direction="horizontal" align="center">
            <img alt="" src={DifferenceImage} />
            <Text style={darkColor}>
              {plusMinus}
              {data.toDay_timeDifference_between_clients_location_and_this_place}
            </Text>
          </Space>
        </Row>
      </Col>
    </Row>
  );
  const showRow4 = (): JSX.Element => (
    <Row
      gutter={gutter}
      style={{ borderRadius, background: qlGray, marginBottom: 0, marginLeft: 0.1, marginRight: 0.1 }}
    >
      <Col span={6}>
        <Row justify="center" align="middle">
          <img alt="" src={SunriseImage} />
        </Row>
        <Row justify="center" align="middle">
          <Text style={darkColor}>{data.toDay_Sun_Rise}</Text>
        </Row>
      </Col>
      <Col span={6}>
        <Row justify="center" align="middle">
          <img alt="" src={SunsetImage} />
        </Row>
        <Row justify="center" align="middle">
          <Text style={darkColor}>{data.toDay_Sun_Set}</Text>
        </Row>
      </Col>
      <Col span={6}>
        <Row justify="center" align="middle">
          <img alt="" src={DayLengthImage} />
        </Row>
        <Row justify="center" align="middle">
          <Text style={darkColor}>{data.toDay_Sun_Duration}</Text>
        </Row>
      </Col>
      <Col span={6}>
        <Row justify="center" align="middle">
          <img alt="" src={MoonStateImage} />
        </Row>
        <Row justify="center" align="middle">
          <Text style={darkColor}>{data.toDay_MoonState_Number}</Text>
        </Row>
      </Col>
    </Row>
  );

  return (
    <>
      <Card>
        {showRow1()}
        {showRow2()}
        {showRow3()}
        {showRow4()}
      </Card>
    </>
  );
};

export default DateAndTimeInstance;
