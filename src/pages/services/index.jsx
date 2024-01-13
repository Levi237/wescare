import React, { Component }     from 'react';
import '../pages.css';

import ServicesList              from './ServicesList';
import Hero                     from '../../components/Hero';

export default class ServicesPage extends Component {
    state = {
        content: ['Known for dedicated & quality', 'care within the home.'],
        image: {
            src: 'assisting-standing-care.png',
            alt: 'Caregiver advising elderly patient to her walker'
        }
    }
    render(){
        const { content, image } = this.state;
        const { contact } = this.props;
        return (
            <div className="services-page">
                <Hero contact={contact} content={content} image={image} />
                <div className="home-page page-wrapper">
                <ServicesList />
                </div>
            </div>
        );
    };
};