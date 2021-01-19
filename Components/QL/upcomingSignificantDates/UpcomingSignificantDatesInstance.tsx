import React from "react";
import { Card, Row, Table } from "antd";
import useUpcomingSignificantDateHook from "./useUpcomingSignificantDateHook";

const UpcomingSignificantDatesInstance = () => {
  const dataSource = useUpcomingSignificantDateHook();
  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
      render(text, record) {
        return renderReligiousNationalHoliday(text, record);
      },
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render(text, record) {
        return renderReligiousNationalHoliday(text, record);
      },
    },
    {
      dataIndex: "dayType",
      key: "dayType",
      render(text, record) {},
    },
    {
      dataIndex: "typeIcon",
      key: "typeIcon",
      render: (typeIcon) => renderTypeIcon(typeIcon),
    },
  ];

  const renderTypeIcon = (typeIcon) => {
    <Row>
      {typeIcon.map((type) => (
        <div key={Math.random()}> {type} </div>
      ))}
    </Row>;
  };

  const renderReligiousNationalHoliday = (text, record) => {
    if (record.dayType === "religiousNationalHoliday") {
      return {
        props: {
          style: { color: "red" },
        },
        children: <div>{text}</div>,
      };
    }
    return {
      props: {
        style: {},
      },
      children: <div>{text}</div>,
    };
  };

  return (
    <Card>
      <Table showHeader dataSource={dataSource} columns={columns} pagination={false} />
    </Card>
  );
};

export default UpcomingSignificantDatesInstance;
