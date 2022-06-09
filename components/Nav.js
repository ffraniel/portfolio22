import Head from 'next/head'
import Link from 'next/link'

export default function Nav () {

  return (
    <>
      <Head>
        <title>Fran The Dev</title>
        <meta name="description" content="Portfolio of Francis Whitehead, web dev to the stars" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/portfolio">Portfolio</Link>
          </li>
          <li>
            <Link href="/work">Work</Link>
          </li>
          <li>
            <a href="www.google.com">Github</a>
          </li>
          <li>
            <a href="www.google.com">LinkedIn</a>
          </li>
        </ul>
      </nav>
    </>
  )
  
}