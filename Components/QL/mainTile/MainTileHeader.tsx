import React from "react";
import { Col, Image, Row, Space, Typography } from "antd";
import basicStyle from "@iso/assets/styles/constants";

interface IMainTileHeader {
  alternateName: string;
  description: string;
  image: string;
  logo: string;
  name: string;
}

const styles = {
  titleContainer: {
    marginTop: "10px",
  },
};
const { Text } = Typography;
const { gutter } = basicStyle;
const MainTileHeader: React.FC<IMainTileHeader> = ({ image, logo, name, description, alternateName }): JSX.Element => (
  <>
    <Row>
      <Image src={image} />
    </Row>
    <Row gutter={gutter} align="middle" justify="start" style={styles.titleContainer}>
      <Col>
        <Space size="large">
          <Image src={logo} width="50px" />
          <Space size={1} direction="vertical" align="start">
            <Space size={1} direction="vertical" align="start">
              <Text className="ql-entity-name">{name}</Text>
            </Space>
            <Space size={-4} direction="vertical" align="start">
              <Text className="ql-entity-description">{description}</Text>
              <Text type="secondary">{alternateName}</Text>
            </Space>
          </Space>
        </Space>
      </Col>
    </Row>
  </>
);

export default MainTileHeader;
