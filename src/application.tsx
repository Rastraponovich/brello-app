import { createEvent, createStore } from "effector";
import { useUnit } from "effector-react";

import styles from "./application.module.css";
import reactLogo from "./assets/react.svg";
import { Header } from "./header";
import viteLogo from "/vite.svg";

const increment = createEvent();

const counter = createStore(0).on(increment, (state) => state + 1);

export function Application() {
  const [count, setCount] = useUnit([counter, increment]);

  return (
    <>
      <Header />

      <main className={styles.main}>
        <div className={styles.logoContainer}>
          <a href="https://vitejs.dev" target="_blank">
            <img src={viteLogo} className={styles.logo} alt="Vite logo" />
          </a>

          <a href="https://react.dev" target="_blank">
            <img src={reactLogo} className={styles.logo} alt="React logo" />
          </a>
        </div>

        <h1>Vite + React</h1>

        <div className="card">
          <button type="button" onClick={setCount}>
            count is {count}
          </button>

          <p>
            Edit <code>src/App.tsx</code> and save to test HMR
          </p>
        </div>

        <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
      </main>
    </>
  );
}
