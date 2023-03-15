import styles from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={styles["loader"]}>
      <div className={styles["loader__spinner-rolling"]}>
        <div className={styles["loader__spinner"]}>
          <div />
        </div>
      </div>
    </div>
  );
};
