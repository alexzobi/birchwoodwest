import React, { Component } from 'react';
import axios from 'axios';

const initialState = {
  name: '',
  email: '',
  details: '',
  nameDirty: false,
  emailDirty: false,
  detailsDirty: false,
  nameSubmit: '',
  emailSubmit: '',
  detailsSubmit: '',
  submitted: false
}

export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = initialState;
  }

  isEmail = (value) => {
    const regex = new RegExp("[a-zA-Z\d]{1,}[@][a-zA-Z]{1,}[.][a-zA-Z]{1,}");
    return regex.test(value);
  }

  handleChange = e =>{
    e.preventDefault();
    
    let {name, value} = e.target;
    let dirtyField = `${name}Dirty`;
    let validField = `${name}Submit`;
    let validity = !dirtyField || value.length ? 'valid' : 'invalid';
    this.setState({[name]: value, [dirtyField]: true, [validField]: validity});
  }

  handleSubmit = e =>{
    e.preventDefault();
    const { name, email, details, verification } = this.state;
    if(this.isEmail(email)){
      axios.post('/api/contact', { name, email, details, verification })
        .catch(err => console.error(err));
      this.setState({submitted: true})
    } else {
      this.setState({emailSubmit:'invalid'});
    }
  }

  reset = () =>{
    this.setState(initialState)
  }

  formValidate = ()=>{
    const { name, email, details} = this.state;
    return !(name.length && email.length && details.length);
  }

  render (){
    const {name, email, details, submitted,
           nameSubmit, emailSubmit, detailsSubmit} = this.state;
    return (
      <div id="contact">
        <div className={submitted ? "visible":"hidden"} id="overlay"></div>
        <div className={submitted ? "visible":"hidden"} id="submitted">
          <p>
            Your info has been sent. Thank you so much for your 
            interest! Someone will reach out as soon as possible!
          </p>
          <button 
            className="form-item form-button" 
            onClick={()=>this.reset()}>
              Got it!
          </button>
        </div>
        <form onChange={this.handleChange} onSubmit={this.handleSubmit}>
          <input className={`form-item ${nameSubmit}`}
                 name="name"
                 placeholder="Your Name" 
                 value={name}
                 required
                 />
          <input className={`form-item ${emailSubmit}`}
                 name="email"
                 placeholder="Your Email"
                 value={email}
                 required
                />
          <textarea id="contact-details"
                    className={`form-item ${detailsSubmit}`} 
                    name='details'
                    placeholder="How can we help?"
                    value={details}
                    required
                    />
          <button type="submit"
                  className="form-item form-button" 
                  disabled={this.formValidate()}>Submit</button>
        </form>
      </div>
    )
  }
}