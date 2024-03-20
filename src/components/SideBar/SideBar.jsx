import clsx from "clsx";

import bracesUrl from "../../assets/braces.svg";
import trashUrl from "../../assets/trash.svg";
import styles from "./styles.module.css";
import { NavLink } from "react-router-dom";

function SideBar({ className, numOfActive, numOfTrash }) {
  const containerClassNames = clsx(className, styles.container);

  return (
    <aside className={containerClassNames}>
      <ul className={styles.list}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              clsx(styles["list-item"], {
                [styles.active]: isActive,
              })
            }
          >
            <img src={bracesUrl} alt="" />
            Notes
            <div>({numOfActive})</div>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/trash"
            className={({ isActive }) =>
              clsx(styles["list-item"], {
                [styles.active]: isActive,
              })
            }
          >
            <img src={trashUrl} alt="" />
            Trash
            <div>({numOfTrash})</div>
          </NavLink>
        </li>
      </ul>
    </aside>
  );
}

export default SideBar;
