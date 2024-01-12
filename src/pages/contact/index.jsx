import React, { Component } from 'react';
import '../pages.css';
import styled from 'styled-components';

import EmailForm            from '../../components/EmailForm';

export default class ContactPage extends Component {
    render(){
        const { contact } = this.props;

        let phone = contact.phone.replaceAll('.', '-');
        return (
            <div className="contact-page page-wrapper">
                <section className="page-width">
                    <div className="grid two-col mobile-one-col">
                        <div>
                            <h1 className="header">Contact Us</h1>
                            <div data-contact-info="phone">
                                <section className="contact-buttons" style={{}}>
                                <a href={`tel:1-${phone}`} target="_blank" rel="noopener noreferrer">
                                    <h4 className="button">
                                        <svg xmlns="http://www.w3.org/2000/svg" id="Layer_3" height="512" viewBox="0 0 32 32" width="512" data-name="Layer 3"><path d="m30.035 22.6c-.082-.065-6.035-4.356-7.669-4.048-.78.138-1.226.67-2.121 1.735-.144.172-.49.584-.759.877a12.517 12.517 0 0 1 -1.651-.672 13.7 13.7 0 0 1 -6.321-6.321 12.458 12.458 0 0 1 -.672-1.651c.294-.27.706-.616.882-.764 1.06-.89 1.593-1.336 1.731-2.118.283-1.62-4.005-7.614-4.05-7.668a2.289 2.289 0 0 0 -1.705-.97c-1.738 0-6.7 6.437-6.7 7.521 0 .063.091 6.467 7.988 14.5 8.025 7.888 14.428 7.979 14.491 7.979 1.085 0 7.521-4.962 7.521-6.7a2.283 2.283 0 0 0 -.965-1.7z"/></svg>
                                        &nbsp;Phone
                                    </h4>
                                </a>
                                <a href={`mailto:${contact.email}`} target="_blank" rel="noopener noreferrer"><h4 className="button">
                                   <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 74 74" height="74" viewBox="0 0 74 74" width="74"><g id="Layer_1" display="none"><g display="inline"><g><path d="m65 61.2h-56c-3.3 0-6-2.7-6-6v-36.4c0-3.3 2.7-6 6-6h56c3.3 0 6 2.7 6 6v36.5c0 3.3-2.7 5.9-6 5.9z" className="path-fill"/></g><g><path d="m4.4 14.2 26.1 28.2c3.5 3.8 9.4 3.8 12.9 0l26.1-28.2" className="path-fill"/></g><g><g><path d="m19.1 44.3c-4.9 5.3-7.8 8.6-12.7 13.9" className="path-fill"/></g><path d="m67.6 58.2c-4.9-5.3-7.8-8.6-12.7-13.9" className="path-fill"/></g></g></g><g id="Layer_2"><g><path d="m73 18.8c0-1.4-.4-2.7-1-3.9l-20.8 22.4c4.4 4.7 8 8.7 11.5 12.6 2.8 3.1 5.7 6.2 8.9 9.8.9-1.3 1.4-2.8 1.4-4.4z"/><path d="m31.4 40.8c1.5 1.6 3.4 2.4 5.6 2.4 2.1 0 4.1-.9 5.6-2.4l26.6-28.8c-1.2-.8-2.7-1.2-4.2-1.2h-56c-1.6 0-3 .5-4.2 1.2z"/><path d="m59.8 52.6c-3.4-3.8-7-7.7-11.3-12.3l-3 3.2c-2.2 2.4-5.3 3.7-8.5 3.7-3.2 0-6.3-1.4-8.5-3.7l-3-3.2c-4.3 4.6-7.8 8.5-11.3 12.3-2.8 3.1-5.7 6.2-8.9 9.8 1.1.6 2.3.9 3.7.9h56c1.3 0 2.6-.3 3.7-.9-3.3-3.6-6.1-6.7-8.9-9.8z"/><path d="m22.8 37.3-20.8-22.4c-.6 1.1-1 2.5-1 3.9v36.5c0 1.6.5 3.2 1.4 4.4 3.3-3.6 6.1-6.7 8.9-9.8 3.5-3.9 7.1-7.8 11.5-12.6z"/></g></g><g id="Layer_3" display="none"><g display="inline"><g><g><path d="m37 47.2c-3 0-5.9-1.3-7.9-3.5l-25.8-27.8 2.9-2.7 25.8 27.8c1.3 1.4 3.1 2.2 5 2.2 1.9 0 3.7-.8 5-2.2l25.8-27.8 2.9 2.7-25.8 27.8c-2 2.2-4.9 3.5-7.9 3.5z" fill="#faaf22"/></g></g><g><g><g><path d="m6.4 60.2c-.5 0-1-.2-1.4-.5-.8-.8-.9-2-.1-2.8 2.4-2.6 4.4-4.8 6.3-6.9 2-2.1 3.9-4.3 6.4-6.9.8-.8 2-.9 2.8-.1s.9 2 .1 2.8c-2.4 2.6-4.4 4.8-6.3 6.9-2 2.1-3.9 4.3-6.4 6.9-.3.4-.8.6-1.4.6z" fill="#faaf22"/></g></g><g><path d="m67.6 60.2c-.5 0-1.1-.2-1.5-.6-2.4-2.6-4.4-4.8-6.3-6.9-2-2.1-3.9-4.3-6.4-6.9-.8-.8-.7-2.1.1-2.8.8-.8 2.1-.7 2.8.1 2.5 2.7 4.4 4.8 6.4 7 1.9 2.1 3.9 4.3 6.3 6.9.8.8.7 2.1-.1 2.8-.3.2-.8.4-1.3.4z" fill="#faaf22"/></g></g><g><g><path d="m65 63.2h-56c-4.4 0-8-3.6-8-8v-36.4c0-4.4 3.6-8 8-8h56c4.4 0 8 3.6 8 8v36.5c0 4.4-3.6 7.9-8 7.9zm-56-48.4c-2.2 0-4 1.8-4 4v36.5c0 2.2 1.8 4 4 4h56c2.2 0 4-1.8 4-4v-36.5c0-2.2-1.8-4-4-4z" fill="#faaf22"/></g></g></g></g><g id="Layer_4" display="none"><g display="inline" fill="#faaf22"><path d="m73 18.8c0-1.4-.4-2.7-1-3.9l-20.8 22.4c4.4 4.7 8 8.7 11.5 12.6 2.8 3.1 5.7 6.2 8.9 9.8.9-1.3 1.4-2.8 1.4-4.4z"/><path d="m31.4 40.8c1.5 1.6 3.4 2.4 5.6 2.4 2.1 0 4.1-.9 5.6-2.4l26.6-28.8c-1.2-.8-2.7-1.2-4.2-1.2h-56c-1.6 0-3 .5-4.2 1.2z"/><path d="m59.8 52.6c-3.4-3.8-7-7.7-11.3-12.3l-3 3.2c-2.2 2.4-5.3 3.7-8.5 3.7-3.2 0-6.3-1.4-8.5-3.7l-3-3.2c-4.3 4.6-7.8 8.5-11.3 12.3-2.8 3.1-5.7 6.2-8.9 9.8 1.1.6 2.3.9 3.7.9h56c1.3 0 2.6-.3 3.7-.9-3.3-3.6-6.1-6.7-8.9-9.8z"/><path d="m22.8 37.3-20.8-22.4c-.6 1.1-1 2.5-1 3.9v36.5c0 1.6.5 3.2 1.4 4.4 3.3-3.6 6.1-6.7 8.9-9.8 3.5-3.9 7.1-7.8 11.5-12.6z"/></g></g></svg>
                                   &nbsp;Email
                                   </h4></a>
                                </section>
                            </div>
                        </div>
                        <div>
                            <div data-contact-info="oncall">
                                <section><h3>Available On-Call</h3></section>
                                <section>
                                24 hours a day&nbsp;|&nbsp;7 days a week
                                </section>
                            </div>
                        </div>
                    </div>
                    <br/><br/>
                    <EmailForm form="contact" />
                </section>
            </div>
        );
    };
};

const Wrapper = styled.div`
.path-fill {
    fill:none;
    stroke:#000;
    stroke-width:4;
    stroke-linecap:round;
    stroke-linejoin:round;
    stroke-miterlimit:10;
}
`;