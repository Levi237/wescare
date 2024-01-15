import React, { Component } from 'react';
import { Routes, Route }    from 'react-router-dom';
import * as routes          from './constants/routes';

import Header               from './Header';
import Footer               from './Footer';

import HomePage             from './pages/home';
import ContactPage          from './pages/contact';
import EmailConfirmPage     from './pages/contact/EmailConfirmPage';
import ServicesPage             from './pages/services';

export default class App extends Component {

  state = {
    contact: {
      name: 'Wescare',
      business: 'Home Health Providers, Inc.',
      logo: 'Wescare_long_logo_header.png',
      phone: '818.672.8808',
      fax: '818.672.8806',
      email: 'Wescare8888@yahoo.com',
      street: '16921 Parthenia St.',
      suite: '',
      city: 'Northridge',
      state: 'CA',
      zip: '91343',
    }
  }
  scrollToTop = () => {
    //=> add to onClick / NavLink to scroll to top of window while changing components viewed
    const top = document.getElementById('scroll-to-bar');
    top.scrollIntoView(true);
  };

  render (){
    const { contact } = this.state;
    return (
      <>
        <Header contact={contact}/>
      <section id="scroll-to-bar" style={{  width: '100vw', height: '0px'}}></section>

        <Routes>
          <Route path={routes.HOME} exact element={<>
            <HomePage contact={contact} scrollToTop={this.scrollToTop} />
          </>}></Route>
          <Route path={routes.MAIL} exact element={<>
            <ContactPage contact={contact}/>
          </>}></Route>
          <Route path={routes.SERV} exact element={<>
            <ServicesPage contact={contact} />
          </>}></Route>
          <Route path={routes.DONE} exact element={<>
            <EmailConfirmPage />
          </>}></Route>
        </Routes>
        
        <Footer contact={contact}/>
      </>
    );
  };
};   