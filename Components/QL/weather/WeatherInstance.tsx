// Libraries
import React from "react";
import { useSelector } from "react-redux";
import { Col, Row, Space, Typography } from "antd";

// Styles
import basicStyle from "@iso/assets/styles/constants";

// Icons
import {
  SunImage,
  WindRainCloudImage,
  SunRainCloudImage,
  SelectedCelsiusImage,
  UnselectedFarenheitImage,
  UnselectedKelvinImage,
} from "@iso/assets";

const WeatherInstance: React.FC = (): JSX.Element => {
  let data = useSelector((state) => state.place.data);
  const { Title, Text } = Typography;
  const { rowStyle, colStyle, gutter } = basicStyle;
  const titleStyle = { fontSize: "large", fontWeight: 700 };
  const heatStyle = { marginBottom: 0 };
  return (
    <>
      <div style={{ backgroundColor: "white", padding: 15 }}>
        {data && (
          <>
            <Row style={rowStyle} gutter={gutter}>
              <Col span={24} style={colStyle}>
                <Row>
                  <Col span={12}>
                    ,
                    <img alt="" src={SunRainCloudImage} />
                  </Col>
                  <Col span={12}>
                    <Space size={1} direction="vertical" align="start">
                      <Text style={titleStyle}>Current Temperature</Text>
                      <Title level={1} style={heatStyle}>
                        {data.weather_Temperature_Current}
                      </Title>
                      <Text type="secondary">
                        Hi: {data.weather_Temperature_High_Today} Lo: {data.weather_Temperature_Low_Today}
                      </Text>
                      <Text type="secondary">Rain 24h {data.weather_Rain_Next_24h}</Text>
                      <Text type="secondary" style={{ whiteSpace: "nowrap" }}>
                        Wind (24h avg) {data.weather_Wind_Avg_Today}
                      </Text>
                    </Space>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row style={rowStyle} gutter={gutter}>
              <Col span={12} style={colStyle}>
                <Space size={0} direction="vertical" align="start">
                  <img alt="" src={SunImage} />
                  Tomorrow
                  <Text type="secondary">
                    {data.weather_Temperature_Low_Tomorrow}/{data.weather_Temperature_High_Tomorrow}
                  </Text>
                </Space>
              </Col>
              <Col span={12}>
                <Space size={0} direction="vertical" align="start">
                  <img alt="" src={WindRainCloudImage} />
                  {data.ToDay_Day_FullName_En}
                  Day after tomorrow
                  <Text type="secondary">
                    {data.weather_Temperature_Low_TheDayAfter_Tomorrow}/
                    {data.weather_Temperature_High_TheDayAfter_Tomorrow}
                  </Text>
                </Space>
              </Col>
            </Row>

            <Row style={rowStyle} gutter={gutter}>
              <Col>
                <img alt="" src={SelectedCelsiusImage} />
              </Col>
              <Col>
                <img alt="" src={UnselectedFarenheitImage} />
              </Col>
              <Col>
                <img alt="" src={UnselectedKelvinImage} />
              </Col>
            </Row>
          </>
        )}
      </div>
    </>
  );
};

export default WeatherInstance;
