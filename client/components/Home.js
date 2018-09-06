import React, {Component} from 'react';

export default class Home extends Component{
  constructor(props){
    super(props);
    this.carousel = React.createRef();
    this.quotes = React.createRef();
    this.state = {
      count: 0,
      images: [ {src:"https://imgur.com/xB86lBS", quote: "Get your menu out there and your signature cup noticed."}, 
                {src:"https://imgur.com/Y6aBNWr", quote: "Boost your shop's productivity with online booking."},
                {src: "https://imgur.com/NHoyrc8", quote: "Schedule classes to make your customers happier and healthier."},
                {src: "https://imgur.com/DDeFwRr", quote: "The world deserves to see your work. You deserve to be seen."},
                {src: "https://imgur.com/Z3zNPbV", quote: "Bring more to your bar with live updating events and specials."}]
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
        <img id="landing" src="https://imgur.com/z6o7e0b" />
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
          <div className="carousel-imgs" ref={this.quotes}>
            <h1 className="quote">{`${images[0]['quote']}`}</h1>
            <h1 className="quote hidden">{`${images[1]['quote']}`}</h1>
            <h1 className="quote hidden">{`${images[2]['quote']}`}</h1>
            <h1 className="quote hidden">{`${images[3]['quote']}`}</h1>
            <h1 className="quote hidden">{`${images[4]['quote']}`}</h1>
          </div>
          <div className="carousel-imgs" ref={this.carousel}>
            <img src={`${images[0]['src']}`} />
            <img className="hidden" src={`${images[1]['src']}`} />
            <img className="hidden" src={`${images[2]['src']}`} />
            <img className="hidden" src={`${images[3]['src']}`} />
            <img className="hidden" src={`${images[4]['src']}`} />
          </div>
        </div>
      </div>
    )
  }
}
