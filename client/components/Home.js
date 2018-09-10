import React, {Component} from 'react';

export default class Home extends Component{
  constructor(props){
    super(props);
    this.carousel = React.createRef();
    this.quotes = React.createRef();
    this.state = {
      count: 0,
      images: [ {title:"cafe.jpg", quote: "Get your menu out there and your signature cup noticed."}, 
                {title:"wrench1.jpg", quote: "Boost your shop's productivity with online booking."},
                {title: "yoga.jpg", quote: "Schedule classes to make your customers happier and healthier."},
                {title: "artist.jpg", quote: "The world deserves to see your work. You deserve to be seen."},
                {title: "bar.jpg", quote: "Bring more to your bar with live updating events and specials."}]
    }
  }

  changeImage = () =>{
    let { count } = this.state;
    const carousel = this.carousel.current
    const quotes = this.quotes.current
    if(carousel){
      carousel.children[count].classList.add('hidden');
      quotes.children[count].classList.add('hidden');
      count = (count + 1) % carousel.children.length;
      carousel.children[count].classList.remove('hidden');
      quotes.children[count].classList.remove('hidden');
    }
    setTimeout(()=>{
      this.setState({count});
    },6000);
  }

  render(){
    this.changeImage();
    const { images, count, quotes } = this.state;

    return (
      <div id="home">
        <img id="landing" src="/images/homepage/homepage.png" />
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
            <h1 className="quote even">"Helpful beyond compare."</h1>
            <h1 className="quote odd">"Quick, responsive and effective."</h1>
            <h1 className="quote even">"A much needed asset."</h1>
            <h1 className="quote odd">"There when we needed them."</h1>
          </div>
        </div>
        <div id="carousel">
          <div className="carousel-group carousel-quotes" ref={this.quotes}>
            <h1 className="quote">{`${images[0]['quote']}`}</h1>
            <h1 className="quote hidden">{`${images[1]['quote']}`}</h1>
            <h1 className="quote hidden">{`${images[2]['quote']}`}</h1>
            <h1 className="quote hidden">{`${images[3]['quote']}`}</h1>
            <h1 className="quote hidden">{`${images[4]['quote']}`}</h1>
          </div>
          <div className="carousel-group" ref={this.carousel}>
            <img src={`/images/homepage/${images[0]['title']}`} />
            <img className="hidden" src={`/images/homepage/${images[1]['title']}`} />
            <img className="hidden" src={`/images/homepage/${images[2]['title']}`} />
            <img className="hidden" src={`/images/homepage/${images[3]['title']}`} />
            <img className="hidden" src={`/images/homepage/${images[4]['title']}`} />
          </div>
        </div>
      </div>
    )
  }
}
