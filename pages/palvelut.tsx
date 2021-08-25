import type { NextPage } from "next";
import styles from "../styles/Palvelut.module.css";
import nummijarvi from "../public/nummijarvi.jpeg";
import Image from "next/image";

const Palvelut: NextPage = () => {
  return (
    <main className={styles.main}>
      <h1 className={styles.h1}>Palvelut</h1>
      <Image
        height={600}
        objectFit="cover"
        src={nummijarvi}
        alt="Nummijärven uimaranta"
      />
      <section>
        <h2> Nämä palvelut löydät Kuusjoelta:</h2>
        <ul className={styles.ul}>
          <li>Alakoulu ja päiväkoti</li>
          <li>Terveysasema (lääkäri, neuvola) ja apteekki</li>
          <li>Monitoimihalli, kuntosali, urheilukenttä, pururata</li>
          <li>Kirjasto</li>
          <li>Nuorisotila Kunnarin vintti</li>
          <li>
            Kirkko ja seurakuntatalo
            <a
              className={styles.a}
              href="https://www.salonseurakunta.fi/kirkot-ja-tilat/kirkot-ja-kappelit/kuusjoen-kirkko"
            >
              https://www.salonseurakunta.fi/kirkot-ja-tilat/kirkot-ja-kappelit/kuusjoen-kirkko
            </a>
          </li>
          <li>
            Nummijärven uimaranta
            <a
              className={styles.a}
              href="https://kohteet.visitsalo.fi/nummijarven-uimaranta/"
            >
              https://kohteet.visitsalo.fi/nummijarven-uimaranta/
            </a>
          </li>
          <li>Vähäjärven frisbeegolfrata, uimaranta ja vuokrattava sauna</li>
          <li>Kauppa (Sale)</li>
          <li>Huoltoasema</li>
          <li>Kebab-Pizzeria Sedir</li>
          <li>Parturi-kampaamoja</li>
          <li>Useita hierojia </li>
          <li>Autokorjaamo</li>
          <li>Taksipalveluita</li>
          <li>
            <p>
              Viljamakasiinin kesäkahvila ja näyttelytilat (Ylikulmantie 237,
              25330 Kuusjoki)
            </p>
          </li>
          <li>
            Paikallishistoriaan keskittynyt arkisto (Kuusjoentie 590, 25330
            Kuusjoki)
          </li>
        </ul>
      </section>
      <section>
        <h2>Harrastuksia ja toimintaa Kuusjoella:</h2>
        <ul className={styles.ul}>
          <li>
            Eläkeliitto Kuusjoki
            <a
              className={styles.a}
              href="https://www.elakeliitto.fi/yhdistykset/kuusjoki"
            >
              https://www.elakeliitto.fi/yhdistykset/kuusjoki
            </a>
          </li>
          <li>
            Humppamusiikin ystävät ry
            <a className={styles.a} href="http://humppa.fi/">
              http://humppa.fi/
            </a>
            <a className={styles.a} href="http://www.humpparalli.in/">
              http://www.humpparalli.in/
            </a>
          </li>
          <li>
            Jalon Tila
            <a
              className={styles.a}
              href="https://fi-fi.facebook.com/Jalon-Tila-327507024017200/"
            >
              https://fi-fi.facebook.com/Jalon-Tila-327507024017200/
            </a>
          </li>
          <li>
            Kuusjoen Humu ry
            <a
              className={styles.a}
              href="https://kuusjoenhumu.sporttisaitti.com/"
            >
              https://kuusjoenhumu.sporttisaitti.com/
            </a>
          </li>
          <li>
            Kuusjoen Metsästysyhdistys ry
            <a className={styles.a} href="http://www.kmy.fi/">
              http://www.kmy.fi/
            </a>
          </li>
          <li>
            Kuusjoen Taitajat ry <br/>Lisätietoja toiminnasta, kursseista ym.
            <a className={styles.a} href="mailto:kuusjoentaitajat@gmail.com">
              kuusjoentaitajat@gmail.com
            </a>
          </li>
          <li>
            Kuusjoen Ukkokerho/Leidit ry <br/>Lisätietoja toiminnasta p. 044-744 55
            50
          </li>
          <li>
            Kuusjoen VPK
            <a className={styles.a} href="http://kuusjoenvpk.fi/">
              http://kuusjoenvpk.fi/
            </a>
          </li>
          <li>
            Kuusjoki-Seura ry
            <a className={styles.a} href="https://www.kuusjoki.fi/">
              https://www.kuusjoki.fi/
            </a>
          </li>
          <li>
            Lions club Kuusjoki
            <a
              className={styles.a}
              href="https://e-clubhouse.org/sites/kuusjoki/"
            >
              https://e-clubhouse.org/sites/kuusjoki/
            </a>
          </li>
          <li>
            MLL Kuusjoki
            <a className={styles.a} href="https://kuusjoki.mll.fi/">
              https://kuusjoki.mll.fi/
            </a>
          </li>
          <li>
            Maa- ja kotitalousnaiset
            <a
              className={styles.a}
              href="https://www.facebook.com/Kuusjoenmaajakotitalousnaiset/"
            >
              https://www.facebook.com/Kuusjoenmaajakotitalousnaiset/
            </a>
          </li>
          <li>
            Partiolippukunta Kuusenkävyt
            <a className={styles.a} href="http://kuusenkavyt.com/">
              http://kuusenkavyt.com/
            </a>
          </li>
          <li>Vähäjärven frisbeegolfrata</li>
          <li>
            Vähäjärven uimaranta ja vuokrattava sauna kokoustiloineen
            <br />
            Tiskarlan pienviljelijäyhdistys p. 0400-985 591
          </li>
        </ul>
      </section>
    </main>
  );
};

export default Palvelut;
