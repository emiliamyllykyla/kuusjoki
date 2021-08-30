import Link from "next/link";
import styles from "../styles/Navbar.module.css";
import Image from "next/image";
import coatOfArms from "../public/coat-of-arms.png";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Image
          src={coatOfArms}
          alt="Kuusjoki coat of arms"
          width={66}
          height={76}
        />
        <span>Kuusjoki</span>
      </div>
      <ul className={styles.ul}>
        <li className={router.pathname == "/" ? styles.selected : ""}>
          <Link href="/">koti</Link>
        </li>
        <li className={router.pathname == "/events" ? styles.selected : ""}>
          <Link href="/tapahtumat">tapahtumat</Link>
        </li>
        <li className={router.pathname == "/palvelut" ? styles.selected : ""}>
          <Link href="/palvelut">palvelut</Link>
        </li>
        <li className={router.pathname == "/historia" ? styles.selected : ""}>
          <Link href="/historia">historia</Link>
        </li>
        <li className={router.pathname == "/linkit" ? styles.selected : ""}>
          <Link href="/">linkit</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
