import React from 'react';

const Home = () =>{
  return (
    <div id="home">
      <img src="/images/homepage/homepage.png" />
      <div className="flex-row">
        <p>
          Birchwood West is a web development firm focused on delivering high-end,
          enterprise quality web design to small businesses. In the digital age,
          your website is the face of your company and we get it. The problem is,
          enterprise grade development is simply unaffordable for small and local 
          industry. Overworked and understaffed is the status quo for this 
          community and the first thing to get sacrificed is web and social media 
          presence. Yet, this presence (or lack thereof) still speaks for you. 
          Take back control with help from a development firm built with you in 
          mind. Birchwood West means professional level design and development at 
          prices local businesses can afford.
        </p>
        <div className="flex-column">
          <h1 className="even">"Helpful beyond compare."</h1>
          <h1 className="odd">"A game changer for our business"</h1>
          <h1 className="even">"A much needed asset."</h1>
          <h1 className="odd">"There when we needed them."</h1>
        </div>
      </div>
    </div>
  )
}

export default Home;