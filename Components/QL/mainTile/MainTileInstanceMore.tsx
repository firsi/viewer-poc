import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { Col, Divider, Row, Space, Tooltip, Typography } from "antd";
import { formatSocialLink, formatUrl } from "lib/helpers/utils";
import {
  PhoneIcon,
  EmailIcon,
  FaxIcon,
  WebIcon,
  FacebookIcon,
  LinkedInIcon,
  InstagramIcon,
} from "./MainTileInstanceIcons";

const { Link, Paragraph, Title, Text } = Typography;

const CustomLink = styled(Link)`
  &.ant-typography {
    color: ${(props) => props.theme.palette.text[0]};
    overflow-wrap: break-word;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    max-width: 110px;
    display: inline-block;
  }
`;

const CustomText = styled(Text)`
  @media screen and (max-width: 380px) {
    max-width: 100px;
  }
`;

const FixSizeRow = styled(Row)`
  overflow: auto;
  max-height: 150px;
`;

const styles = {
  addressContainer: {
    marginTop: "20px",
  },
};
const MainTileInstanceMore: React.FC = (): JSX.Element => {
  const data = useSelector((state) => state.place.data);

  return (
    <>
      {data && (
        <>
          {data.geo && (
            <Row style={styles.addressContainer}>
              {data.geo.address && (
                <>
                  <Col xs={12}>
                    <Space direction="vertical" size={1}>
                      {data.geo.address.telephone && (
                        <Space size={10} direction="horizontal" align="start">
                          <PhoneIcon />
                          <Tooltip title={data.geo.address.telephone}>
                            <CustomText ellipsis>{data.geo.address.telephone}</CustomText>
                          </Tooltip>
                        </Space>
                      )}
                      {data.geo.address.email && (
                        <Space size={10} direction="horizontal" align="start">
                          <EmailIcon />
                          <Tooltip title={data.geo.address.email}>
                            <CustomText ellipsis>{data.geo.address.email}</CustomText>
                          </Tooltip>
                        </Space>
                      )}
                      {data.geo.address.faxNumber && (
                        <Space size={10} direction="horizontal" align="start">
                          <FaxIcon />
                          <Tooltip title={data.geo.address.faxNumber}>
                            <CustomText ellipsis>{data.geo.address.faxNumber}</CustomText>
                          </Tooltip>
                        </Space>
                      )}
                    </Space>
                  </Col>
                  <Col xs={12}>
                    <Space size={1} direction="vertical">
                      {data.url && (
                        <Space size={10} direction="horizontal" align="start">
                          <WebIcon />
                          <CustomLink href={data.url} underline target="_blank">
                            {formatUrl(data.url)}
                          </CustomLink>
                        </Space>
                      )}
                      {data.contactInfo_facebook && (
                        <Space size={10} direction="horizontal" align="start">
                          <FacebookIcon />
                          <CustomLink href={data.contactInfo_facebook} underline target="_blank">
                            facebook/{formatSocialLink(data.contactInfo_facebook)}
                          </CustomLink>
                        </Space>
                      )}
                      {data.contactInfo_linkedIn && (
                        <Space size={10} direction="horizontal" align="start">
                          <LinkedInIcon />
                          <CustomLink href={data.contactInfo_linkedIn} underline target="_blank">
                            linkedin/{formatSocialLink(data.contactInfo_linkedIn)}
                          </CustomLink>
                        </Space>
                      )}
                    </Space>
                  </Col>
                </>
              )}
            </Row>
          )}
          <Row>
            {data.contactInfo_instagram && (
              <>
                <Space size={2} direction="horizontal" align="start">
                  <InstagramIcon />
                  <CustomLink href={data.contactInfo_instagram} underline target="_blank">
                    instagram/{formatSocialLink(data.contactInfo_instagram)}
                  </CustomLink>
                </Space>
              </>
            )}
          </Row>

          <FixSizeRow>
            <Divider />
            <Paragraph>{data.disambiguatingDescription}</Paragraph>
          </FixSizeRow>
          <FixSizeRow>
            <Divider />
            <Space size={1} direction="vertical" align="start">
              <Title level={3} style={{ fontWeight: 700 }}>
                Government
              </Title>
              <Space size={1} direction="horizontal" align="start">
                <Text strong>Mayor: </Text>
                <Text>Dagur B. Eggertsson</Text>
              </Space>
              {/* <Text type="secondary">...and some data that is missing from the json!</Text> */}
            </Space>
          </FixSizeRow>
          <FixSizeRow>
            <Divider />
            <Space size={1} direction="vertical" align="start">
              <Space size={1} direction="horizontal" align="start">
                <Text strong>Area: </Text>
                <Text>273 km2</Text>
              </Space>
              <Space size={1} direction="horizontal" align="start">
                <Text strong>Founded: </Text>
                <Text>1786</Text>
              </Space>
              {/* <Text type="secondary">...and some more data that is missing from the json!</Text> */}
            </Space>
          </FixSizeRow>
          <FixSizeRow>
            <Divider />
            <Space size={1} direction="vertical" align="start">
              <div>
                <Text strong>Colleges and Universities: </Text>
                <Text>Reykjavik Universitiy </Text>
              </div>
              <div>
                <Text strong>Neighborhoods: </Text>
                <Text>Centre, Staðir, Hlemmur, Bryggjuhverfið </Text>
              </div>
              {/* <Text type="secondary">...and some more data that is missing from the json!</Text> */}
            </Space>
          </FixSizeRow>
        </>
      )}
    </>
  );
};

export default MainTileInstanceMore;
