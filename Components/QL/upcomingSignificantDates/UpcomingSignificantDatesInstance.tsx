import React from "react";
import { Card, Row, Table } from "antd";
import { ColumnsType } from "antd/lib/table";
import useUpcomingSignificantDateHook from "./useUpcomingSignificantDateHook";

const UpcomingSignificantDatesInstance: React.FC = (): JSX.Element => {
  const dataSource = useUpcomingSignificantDateHook();

  const renderTypeIcon = (typeIcon) => (
    <Row>
      {typeIcon.map((type) => (
        <div key={Math.random()}> {type} </div>
      ))}
    </Row>
  );

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
  const columns: ColumnsType = [
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
      render(text, record) {
        return <></>;
      },
    },
    {
      dataIndex: "typeIcon",
      key: "typeIcon",
      render: (typeIcon) => renderTypeIcon(typeIcon),
    },
  ];

  return (
    <Card>
      <Table showHeader dataSource={dataSource} columns={columns} pagination={false} />
    </Card>
  );
};

export default UpcomingSignificantDatesInstance;
