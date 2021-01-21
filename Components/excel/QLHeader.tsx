import React from "react";
import { SettingOutlined } from "@ant-design/icons";
import { Button, Col, Row } from "antd";
import styled from "styled-components";

const SettingIcon = styled(SettingOutlined)`
  font-size: 24px;
  color: #b5b5c3;
`;

const styles = {
  container: {
    marginRight: "14px",
    marginTop: "14px",
    marginBottom: "",
  },
};

const QLHeader: React.FC = (): JSX.Element => (
  <Row justify="space-between" align="middle" style={styles.container}>
    <Col>
      <div className="ql-logo-box">
        <div>
          <img alt="Quick Lookup" src="/assets/logo/logo.png" width="240" />
        </div>
      </div>
    </Col>
    <Col>
      <Button type="text" icon={<SettingIcon />} />
    </Col>
  </Row>
);

export default QLHeader;
