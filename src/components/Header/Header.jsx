import clsx from "clsx";
import styles from "./styles.module.css";
import { Form } from "react-router-dom";

function Header({ username, className }) {
  const headerClassNames = clsx(className, styles.container);

  return (
    <header className={headerClassNames}>
      <div className={styles.message}>
        Welcome to Google Keep{" "}
        <span className={styles.username}>{username}</span>
      </div>
      <Form method="POST" action="/logout">
        <button className={styles.button}>Exit</button>
      </Form>
    </header>
  );
}

export default Header;
