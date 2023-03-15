import { memo, FC } from "react";
import { IEvent } from "../../models/models";
import { TeamBlock } from "../TeamBlock";
import styles from "./EventCard.module.scss";

interface IProps {
  item: IEvent;
}

export const EventCard: FC<IProps> = memo(({ item }) => {
  const {
    date,
    stadium,
    teamHome,
    teamAway,
    scoreFtHome,
    scoreFtAway,
    tourNumber,
  } = item;
  const time = new Date(date).toLocaleString("ru", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  });

  const stadiumName = stadium?.name || "Неизвестно";

  return (
    <div className={styles["event-card"]}>
      <h3>{time}</h3>
      <div className={styles["event-card__teams"]}>
        <TeamBlock team={teamHome} />
        <div className={styles["event-card__score"]}>
          {scoreFtHome} : {scoreFtAway}
        </div>
        <TeamBlock team={teamAway} />
      </div>
      <div className={styles["event-card__info"]}>
        <span>Стадион {stadiumName}</span>
        <span>Тур - {tourNumber}</span>
      </div>
    </div>
  );
});
