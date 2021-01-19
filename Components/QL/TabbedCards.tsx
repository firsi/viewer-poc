import React, { useState } from "react";
import { Tabs } from "antd";

const { TabPane } = Tabs;

interface ITabbedCards {
  children: React.ReactNode;
  tabHeight?: string;
  title: string;
}

const TabbedCards: React.FC<ITabbedCards> = ({ title, tabHeight = "auto", children }): JSX.Element => {
  const [position, setPosition] = useState(["left", "right"]);

  const OperationsSlot = {
    left: <div className="tab-bar-title">{title}</div>,
  };

  const slot = React.useMemo(
    () => position.reduce((acc, direction) => ({ ...acc, [direction]: OperationsSlot[direction] }), {}),
    [position]
  );

  return (
    <Tabs defaultActiveKey="1" type="card" tabBarExtraContent={slot} animated={false} style={{ height: tabHeight }}>
      {React.Children.map(children, (child, i) => (
        <TabPane tabKey={(i + 1).toString()} key={(i + 1).toString()}>
          {child}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default TabbedCards;
