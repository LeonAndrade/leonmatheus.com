import { IconLinkedinLogo, IconLogo, IconLogoGithub, IconTwitter } from "@/components/Icon";
import styles from "./Home.module.css";
import Link from "next/link";

function Home() {
  return (
    <div className={styles.page_wrapper}>
      <section className={styles.description}>
        <div className={styles.hero_text}><strong>Leon Andrade Matheus</strong></div>
        <div className={styles.hero_paragraph}>
          <p>
            Craftsperson, Ingenious Thinker, Problem Solver. <br />
            Experienced in <strong>Analytics</strong> and <strong>Software Engineering</strong>.
          </p>
          <p>
            Building better information systems for the world.<br />
            Currently working as a <strong>Senior Data Engineer</strong> at <strong>Globo</strong>.
          </p>
        </div>
      </section >
      <section className={styles.hero}>
        <div className={styles.icon_wrapper}><IconLogo height={120} width={120} /></div>
      </section >
      <section className={styles.social_strip}>
        <Link href="https://www.linkedin.com/in/leon-matheus/">
          <IconLinkedinLogo />
        </Link>
        <Link href="https://github.com/LeonAndrade">
          <IconLogoGithub />
        </Link>
        <Link href="https://twitter.com/becoming_leon">
          <IconTwitter />
        </Link>
      </section>
    </div >
  )
}

export default Home;
