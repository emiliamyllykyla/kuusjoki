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
          <Link href="/">
            home
          </Link>
        </li>
        <li className={router.pathname == "/test" ? styles.selected : ""}>
          <Link href="/test">
            test
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
