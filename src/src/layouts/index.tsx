import { Link, Outlet } from "umi";
import styles from "./index.less";

export default function Layout() {
  return (
    <div className={styles.navs}>
      <div style={{ height: "80px", background: "#040d40" }} />
      <Outlet />
    </div>
  );
}
