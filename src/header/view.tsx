import clsx from "clsx";

import { containerStyles } from "../container";
// import { Logo } from "../logo";
import styles from "./header.module.css";

const user = {
  name: "Jane Spoonfighter",
  email: "janspoon@fighter.dev",
  image: "https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/avatars/avatar-5.png",
};

console.log(styles);

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={clsx(containerStyles, styles.nav)}>
        <div className={styles.navButtons}>
          <button type="button" className={styles.navButton}>
            <span className={styles.navButtonIcon} />
            Members
          </button>

          <button type="button" className={clsx(styles.navButton, styles.navButtonSelected)}>
            <span className={styles.navButtonIcon} />
            Members
          </button>
        </div>

        {/* <Logo /> */}
        <img className={styles.avatar} src={user.image} alt={user.name} />
      </nav>
    </header>
  );
}
