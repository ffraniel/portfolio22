import Link from 'next/link';
import styles from '../styles/Portfolio.module.css';

function Portfolio() {
  return (
    <div className="container">
      <h1 className="text-title">Portfolio</h1>
      <section>
        <ul className={styles.portfolioList}>
          <li className={`${styles.portfolioLink} ${styles.capeLink}`}>

              <Link href={"/portfolio/cape"}>
                <a><h4>Membership website, using React, Firebase and more</h4></a>
              </Link>

          </li>
          <li className={`${styles.portfolioLink} ${styles.wbfLink}`}>

              <Link href={"/portfolio/winter-bf-01"}>
                <a><h4>GSAP animations fun for band website</h4></a>
              </Link>

          </li>
          <li className={`${styles.portfolioLink} ${styles.euro21}`}>

              <Link href={"/portfolio/eurovision-2021"}>
                <a><h4>React.js eurovision quiz pt2, with Tailwind.css</h4></a>
              </Link>

          </li>
          <li className={`${styles.portfolioLink} ${styles.euro19}`}>

              <Link href={"/portfolio/eurovision-2019"}>
                <a><h4>React.js eurovision quiz pt1</h4></a>
              </Link>

          </li>
          <li className={`${styles.portfolioLink} ${styles.snicket}`}>

              <Link href={"/portfolio/snicket-eggs"}>
                <a><h4>Vanilla HTML, CSS and Vue Egg Website</h4></a>
              </Link>

          </li>
          <li className={`${styles.portfolioLink} ${styles.sanssouci}`}>

              <Link href={"/portfolio/sanssouci"}>
                <a><h4>Vanilla HTML, CSS JS Band Website</h4></a>
              </Link>

          </li>
          <li className={`${styles.portfolioLink} ${styles.saidditFE}`}>

              <Link href={"/portfolio/saiddit-FE"}>
                <a><h4>Reddit Clone Frontend</h4></a>
              </Link>

          </li>
          <li className={`${styles.portfolioLink} ${styles.saidditBE}`}>

              <Link href={"/portfolio/saiddit-BE"}>
                <a><h4>Reddit Clone Backend</h4></a>
              </Link>

          </li>
        </ul>
      </section>
    </div>
  );
}

export default Portfolio;
