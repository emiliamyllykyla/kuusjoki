import Image from "next/image";
import { Slide } from "react-awesome-reveal";
import styles from "../styles/Home.module.css";

const Card = (props: {
  img: { src: StaticImageData; alt?: string };
  direction: "left" | "right";
  children: React.ReactElement[];
}) => (
  <Slide
    triggerOnce
    cascade
    direction={props.direction}
    className={styles.card}
    fraction={1}
    duration={1000}
  >
    <>
      <Image
        className={styles.cardImg}
        src={props.img.src}
        height={100}
        width={300}
        alt={props.img.alt}
        objectFit="cover"
      />
      <div className={styles.cardText}>{props.children}</div>
    </>
  </Slide>
);

export default Card;
