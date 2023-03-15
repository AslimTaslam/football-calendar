import { FC } from "react";
import { ITeam } from "../../models/models";
import styles from "./TeamBlock.module.scss";

interface IProps {
  team: ITeam;
}

export const TeamBlock: FC<IProps> = ({ team }) => (
  <div className={styles["team-block"]}>
    <img
      decoding="async"
      loading="lazy"
      src={`https://footballista.ru/api/img/logos/${team.logo}-middle.png?logoId=${team.logoId}`}
      alt="img"
    />
    <h4>{team.name}</h4>
  </div>
);
