import React from "react";
import { useSelector } from "react-redux";
import { Card, Image, Typography } from "antd";

const { Title } = Typography;

/* const tableColumns = () => {
  [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Url",
      dataIndex: "url",
      key: "url",
    },
  ];
};

// TODO: Add this data to the API
const tableDataSource = () => {
  [
    {
      key: "1",
      name: "Wikipedia",
      url: "https://en.wikipedia.org/wiki/Reykjavik",
    },
    {
      key: "2",
      name: "Travel World",
      url: "https://travelworld.com/visit/Reykjavik",
    },
    {
      key: "3",
      name: "Britanica",
      url: "https://britanica.com/unique/Reykjavik",
    },
    {
      key: "4",
      name: "Leit.is",
      url: "https://www.leit.is/everything-you-need-to-know-about-reykjavik",
    },
  ];
}; */
const MainListTile: React.FC = (): JSX.Element => {
  const data = useSelector((state) => state.place.data);

  return (
    <>
      <Title level={3}>MainListTile</Title>
      <Card hoverable>
        {false && (
          <>
            {/* TODO: Add data and use Table from antd */}
            <div>Name: {data.name}</div>
            <div>Type: {data.type}</div>
            <div>Additional Type: {data.additionalType}</div>
            <div>
              <Image src={data.image} />
            </div>
          </>
        )}
      </Card>
    </>
    // Here below is the table layout I had prepared...
    // <LayoutWrapper>
    // <Box>
    // 	<div className="isoInvoiceTable">
    // 		<h3 className="isoWidgetLabel">Main List Tile</h3>

    // 		<Scrollbars
    // 			style={{ width: '100%', height: 'calc(60vh - 70px)' }}
    // 		>
    // 			<TableWrapper
    // 				rowSelection="radio"
    // 				dataSource={tableDataSource}
    // 				columns={tableColumns}
    // 				pagination={false}
    // 				className="invoiceListTable"
    // 			/>
    // 		</Scrollbars>
    // 	</div>
    // </Box>
    // </LayoutWrapper>
  );
};

export default MainListTile;
