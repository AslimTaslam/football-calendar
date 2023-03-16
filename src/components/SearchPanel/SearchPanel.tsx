import { FC, useState } from "react";
import { IEvent } from "../../models/models";
import { FaSearch } from "react-icons/fa";
import styles from "./SearchPanel.module.scss";

interface IProps {
  searchFilter: (text: string) => void;
  searchTerm: string;
}

export const SearchPanel: FC<IProps> = ({ searchFilter, searchTerm }) => (
  <div className={styles["search-panel"]}>
    <div>
      <div className={styles["search-panel__icon"]}>
        <FaSearch />
      </div>

      <input
        className={styles["search-panel__input"]}
        placeholder="Поиск матчей..."
        value={searchTerm}
        onChange={(e) => searchFilter(e.target.value)}
      />
    </div>
  </div>
);
