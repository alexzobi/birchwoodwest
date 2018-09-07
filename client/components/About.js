import React from 'react';

const About = () =>{
  return (
    <div id="about">
      <img id="profile" src="/images/about/profile_square.jpg" />
      <div id="links">
        <a target="_blank" href="https://github.com/alexzobi">
          <img className="link-icon" src="images/about/github.png" />
        </a>
        <a target="_blank" href="https://linkedin.com/in/asobiloff">
          <img className="link-icon" src="images/about/linkedin.png" />
        </a>
        <a target="_blank" href="https://www.instagram.com/nathanaxephotography/">
          <img className="link-icon" src="images/about/instagram.png" />
        </a>
        <a target="_blank" href="http://www.lulu.com/shop/alex-sobiloff/but-why/paperback/product-23749118.html">
          <img className="link-icon" src="images/about/but-why-crop.jpg" />
        </a>
      </div>
      <div id="writing">
        <p>
          Birchwood West founder Alex Sobiloff is a software engineer, writer,
          and photographer. He started Birchwood West with a single focus in mind. 
          That was to deliver a production quality product to small businesses. As 
          the son of a single mother and long time small business owner, Alex
          was exposed to the difficulties small businesses face from a young age. A 
          gap existed between large and small businesses. With budgets lean and 
          time precious, small businesses can't afford to do it all. But balancing
          the two can be a tricky challenge. Sometimes, the best course can be tough
          to navigate.
        </p>
        <p>
          The fact is, building a web 
          presence yourself with one of the many online platforms can seem like 
          a good idea to save money. But inevitably, as time gets tight, the 
          website is the first sacrifice to be made. The result ends up being a 
          half finished and never updated site that leaves a small business 
          looking...well, small. The answer? Deliver a great product at an 
          affordable price and give small business owners their valuable time 
          back.
        </p>
      </div>
    </div>
  )
}

export default About;