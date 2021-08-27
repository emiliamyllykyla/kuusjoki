import KuusFooter from "../public/kuusfooter.svg";
import styles from "../styles/Footer.module.css"

const Footer = () => {
  return (
    <>
      <div
        style={{
          height: 100,
          backgroundImage: `url(${KuusFooter.src})`,
        }}
      />
      <div className={styles.footerText}>
        Kuusjoki 2021 ©
      </div>
    </>
  );
};

export default Footer;
