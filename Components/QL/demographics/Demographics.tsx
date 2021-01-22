// Libraries
import React from "react";
import { useSelector } from "react-redux";
import { Collapse } from "antd";

// Components
import CustomCollapse from "Components/shared/CustomCollapse";
import DemographicsInstance from "./DemographicsInstance";

const { Panel } = Collapse;
const Demographics: React.FC = (): JSX.Element => (
  <CustomCollapse>
    <Panel header="" key={1}>
      <DemographicsInstance />
    </Panel>
  </CustomCollapse>
);

export default Demographics;
