import React from "react";
import { Button, Card, Table } from "antd";
import { ColumnsType } from "antd/lib/table";

// Icons
import { GrabIcon } from "@iso/assets";

// Helpers
import { IDataProperties } from "types";
import { CheckIfUrl } from "../../../lib/helpers/utils";
import { lookupByIdentifier, timeseriesByIdentifier } from "../../excel/commands/commands";

// Hooks
import useGenericDataHook from "./useGenericDataHook";

const timeSeriesFields = [
  "populationMale",
  "populationFemale",
  "year",
  "midPeriod",
  "founders",
  "investors",
  "populationTotal",
  "populationDensity",
];

interface IGenericData {
  data: any;
  dataProperties: (e?) => IDataProperties[];
  nestedArrays?: Array<string>;
}

const GenericDataComponent: React.FC<IGenericData> = ({ data, dataProperties, nestedArrays }): JSX.Element => {
  const dataSource = useGenericDataHook(data, dataProperties, nestedArrays);

  function lookup(identifier, propertyName) {
    lookupByIdentifier(identifier, propertyName);
  }

  function timeseries(identifier, propertyName) {
    timeseriesByIdentifier(identifier, propertyName);
  }

  const cellMetric = (dt) => <div className="ql-table-cell-metric">{dt}</div>;

  const cellValue = (dt) => <div className="ql-table-cell-value">{CheckIfUrl(dt)}</div>;

  function renderExcelActions(excelAction) {
    return (
      <span className="action" key={`actions-${Math.random() * 100}`}>
        <Button type="link" onClick={() => lookup(excelAction[0], excelAction[1])}>
          <img alt="" src={GrabIcon} />
        </Button>{" "}
        {timeSeriesFields.includes(excelAction[1]) && (
          <Button type="link" onClick={() => timeseries(excelAction[0], excelAction[1])}>
            <img alt="" src="/assets/icons/timeseries.svg" />
          </Button>
        )}{" "}
      </span>
    );
  }

  const columns: ColumnsType = [
    {
      title: "Metric",
      dataIndex: "name",
      key: "name",
      width: "30%",
      render: (dt) => cellMetric(dt),
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      width: "55%",
      render: (dt) => cellValue(dt),
    },
    {
      align: "right",
      title: "",
      width: "15%",
      dataIndex: "excelAction",
      key: "excelAction",
      render: (excelAction) => renderExcelActions(excelAction),
    },
  ];

  return (
    <Card>
      {data && (
        <Table
          size="small"
          showHeader
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          scroll={{ y: 350 }}
        />
      )}
    </Card>
  );
};

export default GenericDataComponent;
