import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import axios from 'axios';

export default class Contact extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
      email: '',
      details: '',
      verified: false,
      nameDirty: false,
      emailDirty: false,
      detailsDirty: false,
      nameSubmit: '',
      emailSubmit: '',
      detailsSubmit: '',
    }
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
    const { name, email, details } = this.state;
    if(this.isEmail(email)){
      console.log('submitted!', this.state);
      console.log('form event', e);
      // axios.post('/api/contact', {name, email, details})
      //   .catch(err => console.error(err));
    } else {
      this.setState({emailSubmit:'invalid'});
    }
  }

  verify = response =>{
    if(response){
      this.setState({verified: true});
    }
  }

  formValidate = ()=>{
    const {verified, name, email, details} = this.state;
    return !(verified && name.length && email.length && details.length);
  }

  render (){
    const {name, email, details, 
           nameSubmit, emailSubmit, detailsSubmit} = this.state;
    return (
      <div id="contact">
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
          <Recaptcha 
            sitekey="6Lcd3G4UAAAAAF5JAWLlTYvOw4A2oabnBJmMgM0O"
            render='explicit'
            onloadCallback={()=>console.log('loaded')}
            verifyCallback={this.verify}
           />
          <button type="submit"
                  className="form-item form-button" 
                  disabled={this.formValidate()}>Submit</button>
        </form>
      </div>
    )
  }
}