import Image from 'next/image'

export default function WinterBF () {
  return (
    <div>
      <section>
        <h1>Winter Boyfriend Website</h1>
        <h3>Band website built using <span>GSAP</span> for animations</h3>
      </section>
      <section>
        <h3>
          <a href="https://winterboyfriend.uk/">Visit the link</a>
        </h3>
      </section>
      <main>
        <figure>
          <Image 
            src="/images/winterbf/#" 
            width={180} 
            height={140} 
            alt="#" 
          />
        </figure>
        <article>
          <p>So i wanted to try GSAP...</p>
        </article>
      </main>
    </div>
  )
};