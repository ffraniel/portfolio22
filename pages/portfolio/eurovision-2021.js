import Image from 'next/image'

export default function Eurovision2021 () {
  return (
    <div>
      <section>
        <h1>Eurovision 2021</h1>
        <h3>Eurovision lyrics quiz part 2, now with <span>Tailwind.css</span> as well as <span>React.js</span></h3>
      </section>
      <section>
        <h3>
          <a href="https://eurovision2021.surge.sh/">Visit the link</a>
        </h3>
      </section>
      <main>
        <figure>
          <Image 
            src="/images/eurovision2019/#" 
            width={180} 
            height={140} 
            alt="#" 
          />
        </figure>
        <article>
          <p>In 2021 i revisted a theme...</p>
        </article>
      </main>
    </div>
  )
};