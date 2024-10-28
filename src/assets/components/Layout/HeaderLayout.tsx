import { Outlet } from "react-router-dom";
import styles from "./HeaderLayout.module.css";
import css from "../global-css/master.css"

const HeaderLayout = () => {
  return (
    <>
      <div>
        <footer className={styles.Footer}>
            <h1>Hej jag är en footer</h1>
        </footer>
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default HeaderLayout;
