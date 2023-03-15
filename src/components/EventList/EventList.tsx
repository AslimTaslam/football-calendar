import { FC, memo } from "react";
import { IEvent } from "../../models/models";
import styles from "./EventList.module.scss";
import { EventCard } from "../EventCard";

interface IProps {
  events: IEvent[];
}

export const EventList: FC<IProps> = memo(({ events }) => (
  <div className={styles["event-list"]}>
    {events.map((item) => (
      <EventCard item={item} key={item._id} />
    ))}
  </div>
));
