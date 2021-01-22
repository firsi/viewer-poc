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
import BorderedContainer from "Components/shared/BorderedContainer";
import { getTimeDifference } from "../../../lib/helpers/utils";

const { Text, Title } = Typography;

const gutter = 4;
const DarkRow = styled(Row)`
  border: 1px solid;
  border-radius: 5px;
  background: ${({ theme }) => theme.palette.primary[0]};
  color: white;
  width: 100%;
  & .today-container .ant-space-item {
    margin-left: 5px;
  }
  & .month-year-container .ant-space-item {
    margin-bottom: 0px !important;
    & strong {
      font-size: 16px;
      line-height: 1;
    }
  }
  & .day {
    line-height: 0.9;
    font-size: 46px;
    font-weight: 700;
  }
`;
const GrayRow = styled(Row)`
  border-radius: 5px;
  background: ${({ theme }) => theme.palette.grayscale[4]};
  color: ${({ theme }) => theme.palette.primary[0]};
  width: 100%;
`;

const NoMarginRow = styled(Row)`
  margin-top: 0;
  margin-bottom: 0;
`;

const LightText = styled(Text)`
  color: white;
`;

const LightTitle = styled(Title)`
  color: white;
`;

const DarkText = styled(Text)`
  color: ${({ theme }) => theme.palette.primary[0]};
`;

const DateAndTimeInstance: React.FC = (): JSX.Element => {
  let data = useSelector((state) => state.place.data);
  const { plusMinus, hoursDiff } = getTimeDifference(data.toDay_Time_UTC_24h);
  data.toDay_timeDifference_between_clients_location_and_this_place = hoursDiff;

  const showRow1 = (): JSX.Element => (
    <Row gutter={gutter}>
      <Col span={16}>
        <DarkRow align="center">
          <Col span={24}>
            <Space size={1} className="today-container" align="center">
              <LightText className="day">{data.toDay_Number_Of_Day_In_Month}</LightText>
              <Space className="month-year-container" direction="vertical">
                <LightText className="month" strong>
                  {data.toDay_Day_Month_Text}
                </LightText>
                <LightText strong>{data.toDay_Year_Number}</LightText>
              </Space>
            </Space>
          </Col>
        </DarkRow>
      </Col>
      <Col span={8}>
        <DarkRow style={{ height: "50%" }} justify="center" align="middle">
          <LightText>Week</LightText>&nbsp; <LightText strong>{data.toDay_Week_Number}</LightText>
        </DarkRow>
        <DarkRow style={{ height: "50%" }} justify="center" align="middle">
          <LightText>Day </LightText>&nbsp; <LightText strong>{data.toDay_Day_Year_Number}</LightText>
        </DarkRow>
      </Col>
    </Row>
  );
  const showRow2 = (): JSX.Element => (
    <NoMarginRow gutter={gutter}>
      <Col span={16}>
        <Row align="middle" style={{ height: "35px" }}>
          <div style={{ marginLeft: 5 }}>
            <Text strong>
              {data.toDay_Day_FullName_En}/{data.toDay_Day_FullName_CurrentCulture}
            </Text>
          </div>
        </Row>
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
    </NoMarginRow>
  );
  const showRow3 = (): JSX.Element => (
    <NoMarginRow gutter={gutter}>
      <Col span={16}>
        <DarkRow justify="start">
          <Space size={0} style={{ marginLeft: 5 }} direction="vertical" align="start">
            <LightText>{data.name} Time</LightText>
            <Title style={{ color: "white", marginBottom: 0 }}>{data.toDay_Time_UTC_24h}</Title>
            <LightText> UTC/GMT/EST</LightText>
          </Space>
        </DarkRow>
      </Col>
      <Col span={8}>
        <GrayRow style={{ marginBottom: 5, height: "50%" }} justify="center">
          <Space size={2} direction="horizontal" align="center">
            <img alt="" src={Group198Image} />
            {data.toDay_DaylightSavings === "true" ? <DarkText> Has DLS</DarkText> : <DarkText> No DLS</DarkText>}
          </Space>
        </GrayRow>
        <GrayRow
          gutter={gutter}
          style={{
            marginLeft: 0.1,
            marginRight: 0.1,
            marginBottom: 0,
            height: "45%",
          }}
          justify="center"
        >
          <Space size={2} direction="horizontal" align="center">
            <img alt="" src={DifferenceImage} />
            <DarkText>
              {plusMinus}
              {data.toDay_timeDifference_between_clients_location_and_this_place}
            </DarkText>
          </Space>
        </GrayRow>
      </Col>
    </NoMarginRow>
  );
  const showRow4 = (): JSX.Element => (
    <GrayRow gutter={gutter} style={{ marginBottom: 0, marginLeft: 0.1, marginRight: 0.1 }}>
      <Col span={6}>
        <Row justify="center" align="middle">
          <img alt="" src={SunriseImage} />
        </Row>
        <Row justify="center" align="middle">
          <DarkText>{data.toDay_Sun_Rise}</DarkText>
        </Row>
      </Col>
      <Col span={6}>
        <Row justify="center" align="middle">
          <img alt="" src={SunsetImage} />
        </Row>
        <Row justify="center" align="middle">
          <DarkText>{data.toDay_Sun_Set}</DarkText>
        </Row>
      </Col>
      <Col span={6}>
        <Row justify="center" align="middle">
          <img alt="" src={DayLengthImage} />
        </Row>
        <Row justify="center" align="middle">
          <DarkText>{data.toDay_Sun_Duration}</DarkText>
        </Row>
      </Col>
      <Col span={6}>
        <Row justify="center" align="middle">
          <img alt="" src={MoonStateImage} />
        </Row>
        <Row justify="center" align="middle">
          <DarkText>{data.toDay_MoonState_Number}</DarkText>
        </Row>
      </Col>
    </GrayRow>
  );

  return (
    <BorderedContainer>
      <Card>
        {showRow1()}
        {showRow2()}
        {showRow3()}
        {showRow4()}
      </Card>
    </BorderedContainer>
  );
};

export default DateAndTimeInstance;
