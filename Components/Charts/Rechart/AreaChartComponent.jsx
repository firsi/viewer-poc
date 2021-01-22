import React from "react";
import { useSelector } from "react-redux";
import { useTheme } from "styled-components";
import { AreaChart, Area, Tooltip, ResponsiveContainer } from "recharts";
import { Card, Space, Typography } from "antd";

import { isServer } from "../../../lib/helpers/utils";

const { Text } = Typography;

const styles = {
  card: {
    border: "1px solid rgba(0, 0, 0, 0.05)",
    borderRadius: "4px",
    position: "relative",
  },
  cardBodyStyle: {
    padding: 0,
  },
  titleSpaceContainer: {
    paddingLeft: "5px",
  },
  populationTitle: {
    fontSize: "18px",
  },
  contentText: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    color: "white",
    zIndex: 1,
  },
};
const AreaChartComponent = () => {
  const data = useSelector((state) => state.timeseries.data);
  const populationData = useSelector((state) => state.place.data);
  const theme = useTheme();
  if (isServer) {
    console.error(`You should load this component with dynamic so we can get useWindowSize() to work${isServer}`);
  }

  console.log(`data: ${JSON.stringify(data)}`);
  let chartData = [];
  if (data && data.resultArray) {
    data.resultArray.forEach((elementValue) => {
      chartData.push({
        name: "",
        value: elementValue,
        pv: 2400, // TODO: These values are used for?
        amt: 2400, // TODO: These values are used for?
      });
    });
  }
  return (
    <>
      <Card bodyStyle={styles.cardBodyStyle} style={styles.card}>
        <Space direction="vertical" size={1} style={styles.titleSpaceContainer}>
          <Text strong style={styles.populationTitle}>
            {populationData.populationTotal}
          </Text>
          <Text>Population 1900-2020</Text>
        </Space>
        <Text style={styles.contentText}>Population 1900 - 2019</Text>
        <ResponsiveContainer width="100%" height={100}>
          <AreaChart
            data={chartData}
            margin={{
              top: 0,
              right: 0,
              left: 0,
              bottom: 0,
            }}
          >
            {/* <CartesianGrid strokeDasharray="3 3" /> */}
            {/* <XAxis dataKey="name" /> */}
            {/* <YAxis /> */}
            <Tooltip cursor={{ strokeDasharray: "3 3" }} />
            <Area type="monotone" dataKey="value" stroke={theme.palette.primary[1]} fill={theme.palette.primary[0]} />
          </AreaChart>
        </ResponsiveContainer>
      </Card>
    </>
  );
};

export default AreaChartComponent;
