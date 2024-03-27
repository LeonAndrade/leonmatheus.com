import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.home_page}>
      <div className={styles.page_wrapper}>

        <section className={styles.intro_section}>
          <div>
            Experience
          </div>
          <div>
            Writtings
          </div>
          <div>
            Projects
          </div>
          <div>
            Digital Presence
          </div>
        </section>

        <section className={styles.main_hero_section}>
          <div className={styles.hero}>
            Hi, I'm <span className={styles.hero_name}>Leon</span>.
          </div>
          <div className={styles.hero_sub}>
            Curious thinkerer of all things, educator, shaman, painter, mover, and who knows what else...
          </div>
        </section>

        <section className={styles.green_hero_section} >
          <div className={styles.green_hero_wrapper}>
            Hero Container
          </div>
        </section>

      </div >
    </div >
  )
}

export default Home;
