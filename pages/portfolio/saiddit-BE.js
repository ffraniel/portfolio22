import Image from 'next/image'

export default function SaidditBE () {
  return (
    <div>
      <section>
        <h1>title - Saiddit Back End</h1>
        <h3>subtitle with<span>highlighted info</span></h3>
      </section>
      <section>
        <h3>
          <a href="https://vast-tundra-92428.herokuapp.com">Visit the link</a>
        </h3>
      </section>
      <main>
        <figure>
          <Image 
            src="/images/saidditBE/saidditBEWebLargeTop.jpg" 
            width={180} 
            height={140} 
            alt="Front page of Saiddit BE using Node.js, Express.js and MongoDB" 
          />
        </figure>
        <article>
          <p>A RESTful back-end with all the end-points necessary to feed whatever framework (or none) one may choose for the front-end. With endpoints for articles, articles filtered by subject, comments, voting on articles, voting on comments and user profiles.</p>
        </article>
        <figure>
          <Image 
            src="/images/saidditBE/saidditBEMiddle.jpg" 
            width={180} 
            height={140} 
            alt="Saiddit BE JSON data returned on a query" 
          />
        </figure>
        <article>
          <p>I used Node.js with Express.js and MongoDB. This is part of a larger full-stack project wherein I used React.js for the front-end.</p>
        </article>
        <figure>
          <Image 
            src="/images/saidditBE/saidditBESmall.jpg" 
            width={180} 
            height={140} 
            alt="Saiddit BE JSON data returned on a query, example 2" 
          />
        </figure>
        <article>
          <p>All the endpoints are fully tested using Mocha and Chai. The database is hosted on mLab.com. The project is currently hosted on Heroku.</p>
        </article>
      </main>

    </div>
  )
};