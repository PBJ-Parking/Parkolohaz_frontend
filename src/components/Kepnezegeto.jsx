import styles from  "../css/Kepnezegeto.module.css";

import kep1 from "../../kepek/slide/kep1.webp";
import kep2 from "../../kepek/slide/kep2.webp";
import kep3 from "../../kepek/slide/kep3.webp";
import kep4 from "../../kepek/slide/kep4.webp";
import kep5 from "../../kepek/slide/kep5.webp";
import kep6 from "../../kepek/slide/kep6.webp";
import { Carousel } from "react-bootstrap";
const keplista= [kep1, kep2, kep3, kep4, kep5, kep6]

export default function Kepnezegeto() {
  return (
    <Carousel className={styles.slideshow}>
      {keplista.map((value, index) => {
        return (
          <Carousel.Item key={index}>
            <img className={styles.slideshowImage} src={value} />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}
