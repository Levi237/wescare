import React, { Component } from 'react';
import { Link }             from 'react-router-dom';

import * as routes          from '../../constants/routes';
import '../pages.css';

export default class ContactPage extends Component {
    render(){
        return (
            <div className="contact-page page-wrapper">
                <section className="page-width">
                    <h1 className="header">Sent!
                    <small>Thank you for your interest!</small>
                    </h1>
                    <Link to={routes.HOME}>RETURN HOME ➔</Link>
                </section>
            </div>
        );
    };
};