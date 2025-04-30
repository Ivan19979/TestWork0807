import Link from "next/link";
import styles from "./Navbar.module.scss";

export const Navbar = () => {
  return (
    <nav className={`navbar navbar-dark bg-success ${styles.navbar}`}>
      <div className="container">
        <Link href="/" className="navbar-brand">
          Прогнозник
        </Link>
        <div className="navbar-nav ms-auto">
          <Link href="/favorites" className={`nav-link ${styles.nav_link}`}>
            Избранное{" "}
            <i
              style={{ verticalAlign: "middle" }}
              className={"bi bi-heart"}
            ></i>
          </Link>
        </div>
      </div>
    </nav>
  );
};
