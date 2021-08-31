import type { NextPage } from "next";
import styles from "../styles/Tapahtumat.module.css";
import Image from "next/image";
import kuusjokipaiva from "../public/kuusjoki-paiva.jpeg";

const Tapahtumat: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Tapahtumat</h1>
      <Image
        height={400}
        objectFit="cover"
        src={kuusjokipaiva}
        alt="Sirkusesitys Kuusjoki-päivänä vuonna 2020"
      />
      <section>
        <h2>Elokuu 2021</h2>
        <h3>Sunnuntai 1.8.2021</h3>
        <p>
          Viljamakasiinin näyttelyt ja kesäkahvila: Eläkeliiton kesäkahvila
          (1.8.2021 klo 12:00)
        </p>
        <p>Arkisto avoinna (7.8.2021 klo 10:00)</p>
        <h3>Sunnuntai 8.8.2021</h3>
        <p>
          Viljamakasiinin näyttelyt ja kesäkahvila avoinna: Eläkeliiton
          lettukahvila (8.8.2021 klo 12:00)
        </p>
        <h3>Sunnuntai 15.8.2021</h3>
        <p>
          Viljamakasiinin näyttelyt ja kesäkahvila avoinna (15.8.2021 klo 12:00)
        </p>
        <p>
          Kuusjoki-päivä: koko perheen kotiseutupäivä. Tervetuloa mukaan!
          (15.8.2021 klo 12:00)
        </p>
        <h3>Sunnuntai 22.8.2021</h3>
        <p>
          Viljamakasiinin näyttelyt ja kesäkahvila avoinna: Makasiinin väen
          kesäkahvilasunnuntai (22.8.2021 klo 12:00)
        </p>
        <h3>Sunnuntai 29.8.2021</h3>
        <p>
          Viljamakasiinin näyttelyt ja kesäkahvila avoinna: MLL:n kesäkahvila
          (29.8.2021 klo 12:00)
        </p>
      </section>
      <section>
        <h2>Syyskuu 2021</h2>
        <h3>Lauantai 4.9.2021</h3>
        <p>Arkisto avoinna (4.9.2021 klo 10:00)</p>
      </section>
      <section>
        <h2>Lokakuu 2021</h2>
        <h3>Lauantai 2.10.2021</h3>
        <p>Arkisto avoinna (2.10.2021 klo 10:00)</p>
        <h3>Lauantai 30.10.2021</h3>
        <p>KarnevaaliYö Kuusjoella-tapahtuma (30.10.2021 klo 18:00)</p>
      </section>
    </main>
  );
};

export default Tapahtumat;
