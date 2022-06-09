import Image from 'next/image'

export default function SaidditFE () {
  return (
    <div>
      <section>
        <h1>Saiddit Front End</h1>
        <h3>Front end of a Reddit Clone using <span>React</span></h3>
      </section>
      <section>
        <h3>
          <a href="https://sleepy-atoll-80436.herokuapp.com/">Visit the link</a>
        </h3>
      </section>
      <main>
        <figure>
          <Image 
            src="/images/saidditFE/saidditFull.jpg" 
            width={180} 
            height={140} 
            alt="Front page of Saiddit FE using React" 
          />
        </figure>
        <article>
          <p>The aim was to create a Reddit style single-page-app using React.js. In the app you would be able to read articles, sort them by subject matter, vote on the articles, post comments under an article, vote on those comments and view a user profile page. </p>
          <p>I used React.js and React Router for the routing. You can filter by subject using the topic buttons. I did not use any style frameworks preferring instead to write the CSS myself. I used Proptype checking to make sure I had complete control of the data I was passing around my app. </p>
        </article>
        <figure>
          <Image 
            src="/images/saidditFE/saidditFEMid.jpg" 
            width={180} 
            height={140} 
            alt="Another section of the display" 
          />
        </figure>
        <article>
          <p>I used the fonts ‘Varela’ and ‘Playfair Display’, both from Google Fonts. ‘Varela’ is an elegant sans-serif design, great for extended reading without being boring or ugly, while ‘Playfair Display’, for headings and titles, is a little bit more ornate. </p>
        </article>
        <figure>
          <Image 
            src="/images/saidditFE/saidditFEComments.jpg" 
            width={180} 
            height={140} 
            alt="Comments section of Saiddit front end" 
          />
        </figure>
        <article>
          <p>The page has a responsive design allowing for comfortable viewing on mobile, tablet or desktop.</p>
        </article>
        <figure>
          <Image 
            src="/images/saidditFE/saidditFESmallProfile.jpg" 
            width={180} 
            height={140} 
            alt="Profile page of Saiddit front end, showing responsiveness in action" 
          />
        </figure>
      </main>
  </div>
  )
};