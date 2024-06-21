import Link from "next/link";
import styles from '../styles/styComponents/foooter.module.css'; 

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <h3 className={styles.heading}>Contato</h3>
            <p>geovanispop@gmail.com</p>
          </div>
          <div className={styles.gridItem}>
            <h3 className={styles.heading}>Redes Sociais</h3>
            <div className={styles.socialLinks}>
              <Link className={styles.link} href="https://www.linkedin.com/in/geovani-orsoli-gongora-6b8481223/" passHref>
                Linkedin
              </Link>
            </div>
            <div className={styles.socialLinks}>
              <Link className={styles.link} href="https://github.com/geovaniorsoli" passHref>
                Github
              </Link>
            </div>
          </div>
          <div className={styles.gridItem}>
            <h3 className={styles.heading}>Desenvolvido por</h3>
            <p>Geovani Orsoli Gongora</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
