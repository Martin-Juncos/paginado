import styles from "./Footer.module.css";
import { IoLogoFacebook, IoLogoGithub, IoLogoLinkedin } from "react-icons/io5";
function Footer() {
  return (
    <div className={styles}>
      <footer className={styles.footer}>
        <div className={styles.links}>
          <a href="">About</a>
          <a href="">Blog</a>
          <a href="">Contact</a>
        </div>
        <div className={styles.social}>
          <a href="">
            <i>
              <IoLogoFacebook />
            </i>
          </a>
          <a href="https://github.com/Martin-Juncos" target="_blank">
            <i>
              <IoLogoGithub />
            </i>
          </a>
          <a href="">
            <i>
              <IoLogoLinkedin />
            </i>
          </a>
        </div>
        <div className={styles.copyright}>
          © ByProfeMartin - All rigth reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
