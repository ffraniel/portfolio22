import Image from 'next/image'

export default function Eurovision2019 () {
  return (
    <div>
      <section>
        <h1>Eurovision 2019</h1>
        <h3>Guess the nationality of the song from a small given snippet of the lyrics. Built with <span>React.js</span></h3>
      </section>
      <section>
        <h3>
          <a href="https://eurovision2019.surge.sh/">Visit the link</a>
        </h3>
      </section>
      <main>
        <figure>
          <Image 
            src="/images/eurovision2019/eurovision2019front.jpg" 
            width={180} 
            height={140} 
            alt="Front page of Eurovision app" 
          />
        </figure>
        <article>
          <p>In 2018 i made a Eurovision lyrics quiz app with React.js. I threw it together with some particularly hack-y use of Cheerio and Request.js to fetch the data and i pieced together the game in React.js. As you can see below the design was super basic.</p>
        </article>
        <figure>
          <Image 
            src="/images/eurovision2019/eurovision2018.jpg" 
            width={180} 
            height={140} 
            alt="The 2018 version of the game, altogether less pretty" 
          />
        </figure>
        <article>
          <p>As Eurovision 2019 rolled onto the horizon i thought i would make an updated version. Plus it's good to see, even in a relatively throwaway project such as this, how very far my coding has developed. I set a rule of not spending a long time on it. And yet i was able to create a vastly superior design. </p>
        </article>
        <figure>
          <Image 
            src="/images/eurovision2019/eurovision2019question.jpg" 
            width={180} 
            height={140} 
            alt="Questions and options" 
          />
        </figure>
        <article>
          <p>This time around I included use of the Speech Synthesis API available in modern browsers to speak the lyrics back to the player.</p>
        </article>
        <figure>
          <Image 
            src="/images/eurovision2019/eurovision2019answerMob.jpg" 
            width={180} 
            height={140} 
            alt="Showing the correct answer and whether the user was correct" 
          />
        </figure>
        <article>
          <p>The web scraping took minutes rather than the hours it did last year. Every element of the code was improved with a full rewrite. It's a goofy project but i really like Eurovision and it's a nice excuse to have some creative coding fun.</p>
        </article>
        <figure>
          <Image 
            src="/images/eurovision2019/eurovision2019results.jpg" 
            width={180} 
            height={140} 
            alt="Results page with the score out of 5" 
          />
        </figure>
      </main>
    </div>
  )
};