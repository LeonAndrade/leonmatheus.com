import Link from "next/link";

import { IconLogo } from "@/components/Icon";
import styles from "./Home.module.css";

const sections = [
  "About",
  "Experience",
  "Projects",
  "Writings",
]

function SectionsHeader({ section }: { section: string }) {
  return (
    <Link className={styles.section_item} href={`/${section.toLowerCase()}`}>
      <div >{section}</div>
    </Link>
  )
}


function Home() {
  return (
    <div className={styles.page_wrapper}>

      <section className={styles.intro}>
        {sections.map(s => (<SectionsHeader section={s} />))}
      </section>

      <section className={styles.description}>
        <div className={styles.hero_text}>👋 Hi, I'm <strong>Leon Matheus</strong>!</div>
        <div className={styles.hero_paragraph}>
          <p>
            Craftsperson, Ingenious Thinker, Problem Solver.
          </p>
          <p>
            I am experienced in <strong>Analytics</strong> and <strong>Sofwtare Engineering</strong>.
          </p>
          <p>
            I make it easier for other people to reason about things in dense information environments.
          </p>
          <p>
            Currently working as a <strong>Senior Data Engineer</strong> at <strong>Globo</strong>.
          </p>
        </div>
      </section>

      <section className={styles.hero}>
        <div className={styles.icon_wrapper}><IconLogo height={120} width={120} /></div>
      </section >

    </div >
  )
}

export default Home;
