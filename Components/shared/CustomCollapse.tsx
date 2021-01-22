import React from "react";
import styled from "styled-components";

// UI
import { Collapse } from "antd";
import { CollapseProps } from "antd/lib/collapse";

// Icons
import Icon from "@ant-design/icons";
import { DownArrowIcon } from "./CustomIcons";

const Custom = styled(Collapse)`
  &.ant-collapse-icon-position-right > .ant-collapse-item > .ant-collapse-header {
    min-height: 40px;
    padding-left: 0px;
    padding-right: 0px;
    & .ant-collapse-arrow {
      right: 0px;
    }
  }
  & .ant-collapse-content > .ant-collapse-content-box {
    padding: 0px;
  }
`;

const DownArrow = (props) => <Icon component={DownArrowIcon} {...props} />;
const CustomCollapse: React.FC<CollapseProps> = ({ children, ...rest }): JSX.Element => (
  <Custom
    bordered={false}
    ghost
    expandIconPosition="right"
    expandIcon={({ isActive }) => <DownArrow rotate={isActive ? 90 : 0} />}
    {...rest}
  >
    {children}
  </Custom>
);

export default CustomCollapse;
