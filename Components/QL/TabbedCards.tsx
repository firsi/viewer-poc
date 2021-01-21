import React from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

interface ITabbedCards {
  children: React.ReactNode;
  tabHeight?: string;
  title: string;
  titleColor?: string;
  titleSize?: string;
}

const TabTitle = ({ title, titleColor, titleSize }) => (
  <div className="tab-bar-title" style={{ color: titleColor, fontSize: titleSize }}>
    {title}
  </div>
);

const TabbedCards: React.FC<ITabbedCards> = ({
  title,
  titleColor,
  titleSize,
  tabHeight = "auto",
  children,
}): JSX.Element => (
  <Tabs
    defaultActiveKey="1"
    type="card"
    tabBarExtraContent={{ left: <TabTitle title={title} titleColor={titleColor} titleSize={titleSize} /> }}
    animated={false}
    style={{ height: tabHeight }}
  >
    {React.Children.map(children, (child, i) => (
      <TabPane tabKey={(i + 1).toString()} key={(i + 1).toString()}>
        {child}
      </TabPane>
    ))}
  </Tabs>
);
export default TabbedCards;
