import type { NextPage } from "next";
import Image from "next/image";
import cow from "../public/cow.jpeg";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <>
      <div className={styles.hero}>
        <Image
          className={styles.heroImage}
          src={cow}
          objectFit="cover"
          objectPosition="center"
          alt="Cow"
          layout="fill"
        />
      </div>
      <div className={styles.main}>
        <h2>Tervetuloa Kuusjoki-Seura ry:n sivuille!</h2>
        <p>
          Tutustu Arkiston ja Viljamakasiinin toimintaan. Tul mukka! Meil o
          mukava!
        </p>
        <h3>Tule kurkkaamaan arkistolle!</h3>
        <p>Etsitkö jotain tietoa tai kuvaa Kuusjokeen liittyen?</p>
        <p>
          Haluaisitko tulla Arkistolle tutkimaan vanhoja kuvia, lehtiä, karttoja
          tai muuta materiaalia Kuusjoelta? Autamme parhaamme mukaan.
        </p>
        <p>
          Voit ottaa yhteyttä sähköpostitse. Osoitteet löytyvät kohdasta
          yhteystiedot.
        </p>
        Tervetuloa!
      </div>
    </>
  );
};

export default Home;
