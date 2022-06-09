import Image from 'next/image'

export default function Cape () {
  return (
    <div>
      <section>
        <h1>CAPE Website</h1>
        <h3>details here of <span>stuff</span> as well as <span>React.js</span></h3>
      </section>
      <section>
        <h3>
          <a href="https://cape.org.uk/">Visit the link</a>
        </h3>
      </section>
      <main>
        <figure>
          <Image 
            src="/images/cape/#" 
            width={180} 
            height={140} 
            alt="#" 
          />
        </figure>
        <article>
          <p>Working freelance for the first time...</p>
        </article>
      </main>
    </div>
  )
};