import React from "react";
import { Col, Image, Row, Space, Typography } from "antd";

interface IEvent {
  dayOfMonth: number;
  description: string;
  image: string;
  name: string;
  nameOfMonth: string;
}
const { Title, Text } = Typography;
const SingleEvent: React.FC<IEvent> = ({ dayOfMonth, description, image, name, nameOfMonth }): JSX.Element => (
  <Row gutter={8} justify="start">
    <Col span={4} style={{}}>
      <Space size={-10} direction="vertical" align="start">
        <Title level={3}>{nameOfMonth}</Title>
        <Title level={2}>{dayOfMonth}</Title>
      </Space>
    </Col>
    <Col span={12}>
      <Row justify="start">
        <strong>{name}</strong>
      </Row>
      <Row justify="start">
        <Text>{description}</Text>
      </Row>
    </Col>
    <Col span={8}>
      <Row justify="start">
        <Image src={image} />
      </Row>
    </Col>
  </Row>
);

export default SingleEvent;
