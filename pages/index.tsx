import type { NextPage } from "next";
import Image from "next/image";
import cow from "../public/cow.jpeg";
import arial from "../public/kuusjoki_arial.jpg";
import arial2 from "../public/kuusjoki_arial_2.jpg";
import cafe from "../public/kuuscafe.jpg";
import cross from "../public/kuuscross.png";
import sedir from "../public/sedir.jpeg";
import styles from "../styles/Home.module.css";
import ReactiveButton from "reactive-button";
import Link from "next/link";
import Card from "../components/card";

const Home: NextPage = () => {
  return (
    <>
      <section className={styles.hero}>
        <Image src={cow} objectFit="cover" alt="Cow" layout="fill" />
      </section>
      <main className={styles.main}>
        <section className={styles.introduction}>
          <h1>Tervetuloa Kuusjoen sivuille!</h1>
          <p>
            Kuusjoki on Suomen entinen kunta ja nykyään osa Salon kaupunkia
            Varsinais-Suomen maakunnassa. Kuusjoella yhdistyvät hyvät palvelut,
            liikenneyhteydet ja maaseudun rauha. Halajaako sydämesi vanhaan
            maalaispihapiiriin tai innostutko uuden rakentamisesta, Kuusjoella
            löydät mahdollisuuksia molempiin.
          </p>
          <p>
            Kirkonkylä ja useat pienet kylät levittäytyvät metsien ja peltojen
            lomaan seuraten aluetta halkovaa jokea. Marja- ja sienimetsät,
            lenkkipolut ja pienten hiekkateiden verkosto houkuttelevat
            liikkumaan ja nauttimaan luonnosta.
          </p>
          <p>
            Runsaslukuiset yhdistykset tarjoavat monipuolista
            harrastustoimintaa, kursseja, tapahtumia, näyttelyitä ja konsertteja
            kaikenikäisille.
          </p>
        </section>
        <section>
          <h2>Tutustu palveluihin, tapahtumiin ja erikoisuuksiin</h2>
          <Card direction="right" img={{ src: cafe }}>
            <h3>Tapahtumat</h3>
            <p>
              Täältä löydät lähikuukausien tapahtumat. Katso viljamakasiinin
              kesäkahvilan ja näyttelyiden aukioloajat ja tule tapaamaan ystäviä
              sekä uusia tuttavuuksia.
            </p>
            <Link href="/tapahtumat">
              <a>
                <ReactiveButton
                  color={"yellow"}
                  idleText={"Lue lisää"}
                  buttonRef={null}
                  width={null}
                  height={null}
                  animation={true}
                />
              </a>
            </Link>
          </Card>
          <Card direction="left" img={{ src: arial }}>
            <h3>Palvelut</h3>
            <p>
              Kuusjoki tarjoaa monenlaisia palveluita. Alakoulun, kirjaston ja
              terveysaseman lisäksi löydät mm. monet mahdollisuudet urheiluun.
            </p>
            <Link href="/palvelut">
              <a>
                <ReactiveButton
                  color={"yellow"}
                  idleText={"Lue lisää"}
                  buttonRef={null}
                  width={null}
                  height={null}
                  animation={true}
                />
              </a>
            </Link>
          </Card>
          <Card direction="right" img={{ src: cross }}>
            <h3>Suomen pisin suojatie?</h3>
            <p>
              Monipuolisen ruokakaupan Salen valtava parkkipaikka on nähtävyys
              joka herättää hilpeyttä. Voisiko parkkipaikkaa halkova suojatie
              kuulua jopa Suomen pisimpien joukkoon?
            </p>
          </Card>
          <Card direction="left" img={{ src: sedir }}>
            <h3>Kebab-Pizzeria Sedir</h3>
            <p>
              Sedirin maineikkaat pizzat houkuttelevat ruokailijoita Kuusjoen
              ulkopuoleltakin.
            </p>
          </Card>
        </section>
      </main>
    </>
  );
};

export default Home;
