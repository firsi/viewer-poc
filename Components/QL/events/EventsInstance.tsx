// Libraries
import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { useSelector } from "react-redux";

// UI Library
import { Card, List, message, Spin } from "antd";

// Helpers
import { getDayOfMonth, getNameOfMonthOfYear } from "../../../lib/helpers/utils";
import SingleEvent from "./SingleEvent";

// ABOUT: The component is infinit-scroll-ready
// Uses Antd List component from here https://ant.design/components/list/
// And WHEN we are ready for real infinite scrolling and virtualized rendering we should look there for examples!

const EventsInstance: React.FC = (): JSX.Element => {
  const [loading, setLoading] = useState<boolean>(false);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const data = useSelector((state) => state.place.data);

  const handleInfiniteOnLoad = () => {
    setLoading(true);
    if (data.event && data.event.length > 14) {
      message.warning("Infinite List loaded all");
      setLoading(false);
      setHasMore(false);
    }
  };

  return (
    <div className="infinite-container">
      <Card>
        {data.event && (
          <InfiniteScroll
            initialLoad={false}
            pageStart={0}
            loadMore={handleInfiniteOnLoad}
            hasMore={!loading && hasMore}
            useWindow={false}
          >
            <List
              dataSource={data.event}
              renderItem={(event: any) => (
                <List.Item key={event?.name + Math.random()}>
                  <SingleEvent
                    dayOfMonth={getDayOfMonth(event.startDate)}
                    description={event.description}
                    image={event.image}
                    name={event.name}
                    nameOfMonth={getNameOfMonthOfYear(event.startDate)}
                  />
                </List.Item>
              )}
            >
              {loading && hasMore && (
                <div className="infinite-loading-container">
                  <Spin />
                </div>
              )}
            </List>
          </InfiniteScroll>
        )}
      </Card>
    </div>
  );
};

export default EventsInstance;
