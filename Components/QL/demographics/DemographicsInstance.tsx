import React from "react";
import { useSelector } from "react-redux";
import styled, { useTheme } from "styled-components";

// UI Library
import { Card, Col, Image, Row, Space, Typography } from "antd";
import Icon from "@ant-design/icons";

// Icons
import { NewBornIcon, GrowthIcon, GenderIcon } from "../../shared/CustomIcons";

// Components
import SymmetricBarChart from "../../Charts/AntDesign/SymmetricBarChart";
import HorizontalStackedBarChart from "../../Charts/G2/HorizontalStackedBarChart";

const { Title, Text } = Typography;

const styles = {
  populationCard: {
    gridArea: "population",
  },
  growthCard: {
    gridArea: "growth",
  },
  genderCard: {
    gridArea: "gender",
  },
  symetricBarContainer: {
    height: "100%",
  },
};
const BorderedCard = styled(Card)`
  border: ${({ theme }) => `1px solid ${theme.palette.grayscale[4]} !important`};
  border-radius: 4px;
  min-width: 50px;
  min-height: 80px !important;
  & .ant-card-body {
    padding: 2px 15px;
  }
  &.population-card .ant-card-body {
    max-height: 200px;
    height: 100%;
  }
  }

  &.gender-card .ant-card-body canvas {
    height: 65px !important;
  }
`;
const CardTitle = styled(Title)`
  color: ${({ theme }) => theme.palette.grayscale[1]} !important;
`;
const CSSGrid = styled.div`
  display: grid;
  grid-template:
    "population growth" 1fr
    "population gender" 1fr / 1fr 1fr;
  grid-gap: 5px;
`;
const DemographicsInstance: React.FC = (): JSX.Element => {
  const data = useSelector((state) => state.place.data);
  const theme = useTheme();
  return (
    <CSSGrid>
      <BorderedCard className="population-card" style={styles.populationCard}>
        <CardTitle level={4}>Population Pyramid</CardTitle>
        <div style={styles.symetricBarContainer}>
          <SymmetricBarChart />
        </div>
      </BorderedCard>
      <BorderedCard style={styles.growthCard}>
        <Space size={5} direction="vertical">
          <Space size={1}>
            <Icon component={NewBornIcon} />
            <CardTitle level={4}>Growth Rate</CardTitle>
          </Space>

          <Space style={{ lineHeight: "1.15" }} size={10}>
            <Icon component={GrowthIcon} size={20} />
            {data && data.demographicsGrowthRate && (
              <Text strong style={{ color: theme.palette.primary[0], fontSize: "24px" }}>
                {data.demographicsGrowthRate}
              </Text>
            )}
          </Space>
        </Space>
      </BorderedCard>
      <BorderedCard className="gender-card" style={styles.genderCard}>
        <Space size={10}>
          <Icon component={GenderIcon} size={20} />
          <CardTitle level={4}>Genders</CardTitle>
        </Space>
        <HorizontalStackedBarChart />
      </BorderedCard>
    </CSSGrid>
  );
};

export default DemographicsInstance;
