import styles from "./Container.module.css"

const Container = ({ children }) => {
  return <div className={styles.parentContaienr}>{children}</div>;
};

export default Container;
