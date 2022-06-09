import Image from 'next/image'

export default function SnicketEggs () {
  return (
    <div>
      <section>
        <h1>Snicket Eggs - free range egg shop</h1>
        <h3><span>HTML, CSS and Javascript</span> for a suprisingly pretty egg-shop site</h3>
      </section>
      <section>
        <h3>
          <a href="https://snicket-eggs.surge.sh">Visit the link</a>
        </h3>
      </section>
      <main>
        <figure>
          <Image 
            src="/images/snicket/frontpage.jpg" 
            width={180} 
            height={140} 
            alt="Snicket Eggs homepage with large jumbotron" 
          />
        </figure>
        <article>
          <p>It is important to first explain i am not dangerously infatuated with eggs. However, i am lucky that my mother keeps chickens for eggs. So when she asked me to create a website to help her sell more of her eggs how could i not?</p>
        </article>
        <figure>
          <Image 
            src="/images/snicket/frontpage2.jpg" 
            width={180} 
            height={140} 
            alt="Further example showing colour, use of images and fonts" 
          />
        </figure>
        <article>
          <h4>DESIGN</h4>
          <p>In terms of design i went for a modern, somewhat minimalist style with a simple colour pallete of black, white, a light blue that echoes the blue eggs of the Araucana breed and a peach colour which, again, echoes an egg shell colour but more vibrant.</p>
        </article>
        <figure>
          <Image 
            src="/images/snicket/frontpage3.jpg" 
            width={180} 
            height={140} 
            alt="A block of text and a gallery" 
          />
        </figure>
        <article>
          <h4>ANIMATIONS</h4>
          <p>The site uses a animations for fade in and slide in effects, and transitions when leaving a page. This requires some minor link hijacking but the fallback is standard link behaviour so that the website can be accessible. </p>
        </article>
        <figure>
          <Image 
            src="/images/snicket/meetpage1.jpg" 
            width={180} 
            height={140} 
            alt="Meet the Hens page uses Vue.js" 
          />
        </figure>
        <article>
          <h4>VUE.JS</h4>
          <p>The 'Meet the Hens' page uses Vue.js to create an interactive introduction to the various breeds kept, complete with animations.</p>
        </article>
        <article>
          <h4>OPTIMISATIONS</h4>
          <p>In order to speed up performances images are lazy loaded with the user seeing a blurry image initially. I managed to achieve a good lighthouse score whilst still using large hi-res images.</p>
        </article>
        <figure>
          <Image 
            src="/images/snicket/frontpageMob1.jpg" 
            width={180} 
            height={140} 
            alt="Front page on a mobile device" 
          />
        </figure>
        <article>
          <h4>MOBILE</h4>
          <p>The mobile design benefits from the various image optimisations.</p>
        </article>
        <figure>
          <Image 
            src="/images/snicket/meetpageMob1.jpg" 
            width={180} 
            height={140} 
            alt="Meet the Hens page on a mobile device" 
          />
        </figure>
      </main>
  </div>
  )
};