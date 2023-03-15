import goalIcon from "./goalIcon.svg";
import styles from "./ErrorMessage.module.scss";

export const ErrorMessage = () => (
  <div className={styles["error-message"]}>
    <h2 className={styles["error-message__label"]}>Упс... Ошибка</h2>
    <img
      src={goalIcon}
      alt="error icon"
      className={styles["error-message__icon"]}
    />
    <p>Что то пошло не так</p>
  </div>
);
