import type { NextPage } from "next";
import styles from "../styles/Linkit.module.css";

const Linkit: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Linkit</h1>
      <ul className={styles.ul}>
        <li>
          Kuusjoki Wikipedia{" "}
          <a className={styles.a} href="https://fi.wikipedia.org/wiki/Kuusjoki">
            https://fi.wikipedia.org/wiki/Kuusjoki
          </a>
        </li>
        <li>
          Kuusjoki-Seura ry{" "}
          <a className={styles.a} href="https://www.kuusjoki.fi/">
            https://www.kuusjoki.fi/
          </a>
        </li>
        <li>
          Myytävät asunnot Oikotie{" "}
          <a
            className={styles.a}
            href="https://asunnot.oikotie.fi/myytavat-asunnot/salo/kuusjoki"
          >
            https://asunnot.oikotie.fi/myytavat-asunnot/salo/kuusjoki
          </a>
        </li>
        <li>
          Myytävät asunnot Etuovi{" "}
          <a
            className={styles.a}
            href="https://www.etuovi.com/myytavat-asunnot/salo/kuusjoki"
          >
            https://www.etuovi.com/myytavat-asunnot/salo/kuusjoki
          </a>
        </li>
      </ul>
    </main>
  );
};

export default Linkit;
