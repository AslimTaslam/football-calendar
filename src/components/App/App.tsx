import { useState, useEffect } from "react";
import {
  useGetEventsQuery,
  useLazyGetEventsQuery,
} from "../../store/football/football.api";
import { IEvent } from "../../models/models";

import NetworkWrapper from "../NetworkWrapper";
import { SearchPanel } from "../SearchPanel";
import styles from "./App.module.scss";
import { EventList } from "../EventList";

export const App = () => {
  const [events, setEvents] = useState<IEvent[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  const { isLoading, isError, data } = useGetEventsQuery(0);
  const [getEvents, { isFetching, data: moreData }] = useLazyGetEventsQuery();

  useEffect(() => {
    if (data) {
      setEvents([...data.items]);
    }
  }, [data]);

  useEffect(() => {
    if (moreData) {
      setEvents((events) => [...events, ...moreData.items]);
    }
  }, [moreData]);

  const moreEventsHandler = (offset: number, maxEvents: number) => {
    if (offset !== maxEvents) getEvents(offset);
  };

  const handleAddMore = () =>
    moreEventsHandler(events.length + 1, data ? data.total : 10);

  const searchFilter = (text: string) => setSearchTerm(text);

  const filteredEvents =
    searchTerm !== ""
      ? events.filter((item) =>
          item.teamAway.name
            .toLocaleLowerCase()
            .includes(searchTerm.toLocaleLowerCase())
        )
      : events;

  const showButton = events.length + 1 !== data?.total;
  return (
    <div className={styles["app"]}>
      <h1 className={styles["app__label"]}>Календарь футбольных матчей</h1>
      <SearchPanel searchFilter={searchFilter} searchTerm={searchTerm} />
      <NetworkWrapper
        isLoading={isLoading}
        isMoreLoading={isFetching}
        isError={isError}
      >
        <>
          <EventList events={filteredEvents} />
          {showButton && (
            <button
              className={styles["app__btn-more"]}
              onClick={handleAddMore}
              disabled={isFetching}
            >
              Загрузить ещё
            </button>
          )}
        </>
      </NetworkWrapper>
    </div>
  );
};
