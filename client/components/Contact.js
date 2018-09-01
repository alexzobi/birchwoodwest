import React, {Component} from 'react';

export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      details: ''
    }
  }

  handleChange = e =>{
    e.preventDefault();
    let {name, value} = e.target;
    this.setState({[name]: value});
  }

  handleSubmit = e =>{
    console.log('submitted!', this.state);

  }
  render (){
    const {name, email, details} = this.state;
    console.log(this.state)
    return (
      <div id="contact">
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <input className='form-item'
                 name="name"
                 placeholder="Your Name" 
                 value={name}
                 />
          <input className='form-item'
                 name="email"
                 placeholder="Your Email"
                 value={email}
                />
          <textarea id="contact-details"
                    className='form-item' 
                    name='details'
                    placeholder="How can we help?"
                    value={details}
                    />
          <button id="contact-button" 
                  className="form-item" 
                  type="submit">Submit</button>
        </form>
      </div>
    )
  }
}