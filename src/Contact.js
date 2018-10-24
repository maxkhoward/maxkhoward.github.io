import React, { Component } from "react";

class Contact extends Component {
  constructor() {
    super();
    this.state = {
      showphone: false,
      showmail: false,
      showtwitter: false
    };
    this.reveal = this.reveal.bind(this);
  }

  reveal(contactMethod) {
    if (contactMethod === 'phone') {
      this.setState({ showphone: !this.state.showphone });
    }
    else if (contactMethod === 'mail') {
      this.setState({ showmail: !this.state.showmail });
    }
    else if (contactMethod === 'twitter') {
      this.setState({ showtwitter: !this.state.showtwitter });
    }
  }

  render() {
    return (
      <div className="page-content contact reg-page">
        <div className="page-title">
          <h1>Get in touch</h1>
          <p>Click your preferred contact method</p>
        </div>
        <div className="contact-box">
          <div className="contact-method">
            <i className="fas fa-phone" onClick={ () => this.reveal('phone') }></i>
            { this.state.showphone ?
              <p className="contact-detail visible"><a className="link" href="tel:+1-778-245-0413">778-245-0413</a></p>
            :
              <p className="contact-detail"><a className="link" href="">XXX</a></p>
            }
          </div>
          <div className="contact-method">
            <i className="fas fa-envelope" onClick={ () => this.reveal('mail') }></i>
            { this.state.showmail ?
              <p className="contact-detail visible"><a className="link" href="mailto:maxkhoward@gmail.com">maxkhoward@gmail.com</a></p>
            :
              <p className="contact-detail"><a className="link" href="">XXX</a></p>
            }
          </div>
          <div className="contact-method">
            <i className="fab fa-twitter" onClick={ () => this.reveal('twitter') }></i>
            { this.state.showtwitter ?
              <p className="contact-detail visible"><a className="link" target="new" href="https://twitter.com/maxkhoward">@maxkhoward</a></p>
            :
              <p className="contact-detail"><a className="link" target="new" href="">XXX</a></p>
            }
          </div>
        </div>
      </div>
    );
  }
}
 
export default Contact;
