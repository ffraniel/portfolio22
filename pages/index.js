import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main>  
      <section className={styles.jumbotron}>
        <div>
          <h1>Fran the Dev</h1>
          <span className={styles.underline}></span>
          <h3>Frontend / Javascript / Web Developer</h3>
        </div>
      </section>
      <section className="container">
        <article>
          <h1 className="text-title">Me</h1>
          <p>I am a frontend developer who loves making things that work. I really like working with <span>React.js</span>, but also like getting in the weeds with the <span>CSS</span>. </p>
          <a className={styles.cv} href="https://docs.google.com/document/d/1qGrkf0itGhaHhQBLxRIQHtJmUiXIfzZzL4wZ6ZcM9-Y/edit?usp=sharing">Hey, why not check out my CV now!</a>
          <figure className={styles.imageContainer}>
            <Image 
              className={styles.imgPortrait}
              src="/images/portrait-fsw.jpg"
              height={480}
              width={480}
              alt="Fran Whitehead smiling at the camera goofily"
            />
          </figure>
        </article>
        <article>
          <h3 className="text-title">Work experience</h3>
          <p>I have worked in a couple of agencies, primarily in a <span>vanilla JS</span> and <span>Sass</span> environment where the focus was cross-browser <span>compatibility</span> and <span>accessibility</span> as much as bringing designs to life. Working with backend devs and clients to get projects completed. Also, I have worked <span>freelance</span> on the website for <a href="https://cape.org.uk/">https://cape.org.uk/</a>, built using React, Firebase and GraphCMS.</p>
        </article>
        <article>
          <h3 className="text-title">Extraccuricula</h3>
          <p>Other fun coding projects i have done include my Eurovision lyrics guessing game, initially built for 2018 (no longer live), updated in 2019, and again in 2021, in the final version using <span>Tailwind CSS</span>.</p>
          <p>I also dabble in fullstack elements, such as <span>Node.js, Express.js, MongoDB</span> and more. I have experience using and creating both <span>RESTful APIs</span> and <span>GraphQL APIs</span>.</p>
        </article>
        <article>
          <h3 className="text-title">Fantastic Web Experiences</h3>
          <p>I love to develop beautiful <span>responsive</span> websites and use exciting technology but the bottom line is how effective the website or service is at satisfying the users. I like to keep that in mind at all times, no matter what i am developing, in order to give consistently great user <span>experience</span>.</p>
        </article>
      </section>
    </main>
  )
}
