import React, { useEffect, useState } from "react";
import { Card, Table, Button } from "antd";
import grabIcon from "@iso/assets/images/grabicon/Grab-line-Blue-inverted.png";
import { CheckIfUrl } from "../../../lib/helpers/utils";
import { lookupByIdentifier, timeseriesByIdentifier } from "../../excel/commands/commands";
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
  dataProperties: () => void;
  nestedArrays?: Array<any>;
}

const GenericDataComponent: React.FC<IGenericData> = ({ data, dataProperties, nestedArrays }): JSX.Element => {
  const dataSource = useGenericDataHook(data, dataProperties, nestedArrays);
  const columns = [
    {
      title: "Metric",
      dataIndex: "name",
      key: "name",
      width: "30%",
      render: (dt) => <div className="ql-table-cell-metric">{dt}</div>,
    },
    {
      title: "Value",
      dataIndex: "value",
      key: "value",
      width: "55%",
      render: (dt) => <div className="ql-table-cell-value">{CheckIfUrl(dt)}</div>,
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

  function renderExcelActions(excelAction) {
    return (
      <span className="action">
        <Button type="link" onClick={() => lookup(excelAction[0], excelAction[1])}>
          <img alt="" src={grabIcon} />
        </Button>{" "}
        {timeSeriesFields.includes(excelAction[1]) && (
          <Button type="link" onClick={() => timeseries(excelAction[0], excelAction[1])}>
            <img alt="" src="/assets/icons/timeseries.svg" />
          </Button>
        )}{" "}
      </span>
    );
  }

  function lookup(identifier, propertyName) {
    lookupByIdentifier(identifier, propertyName);
  }

  function timeseries(identifier, propertyName) {
    timeseriesByIdentifier(identifier, propertyName);
  }

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
