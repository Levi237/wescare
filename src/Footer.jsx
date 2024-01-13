import React from 'react';

import DescriminiationClause  from '../src/components/DiscriminationClause';

const Footer = ({ contact }) => {
    return(
        <footer>
            <div className="grid three-col">
                <section className="left">
                    <div>
                        <div data-contact-info="address">
                            <section><h3>ADDRESS:</h3></section>
                            { contact.suite && <> 
                                {contact.street} 
                            </> }
                            { contact.suite && <>
                                <br/>
                                {contact.suite}
                            </> }
                            <br/>
                            {contact.city}, {contact.state} {contact.zip} 
                        </div>
                        <div data-contact-info="email">
                            <section>
                            <h3>E-MAIL: </h3>
                            </section>
                            <section>
                            {contact.email}
                            </section>
                        </div>
                        <div data-contact-info="phone">
                            <section><h3>PHONE:</h3></section>
                            <section>
                                { contact.phone }
                            </section>
                        </div>
                        { (contact.fax !== '') &&
                        <div data-contact-info="fax">
                            <section>
                                <h3>FAX: </h3>
                                </section>
                                <section>
                                { contact.fax }
                            </section>
                        </div>
                        }
                    </div>
                </section>
                <section className="center">
                    <center>


                    <div data-contact-info="oncall">
                    <section><h1>{contact.phone}</h1></section>
                    <br/>
                        <section><h2>Available <span style={{style: 'inline-block'}}>On-Call</span></h2></section>
                        <section>
                        24 hours a day&emsp;|&emsp;7 days a week
                        </section>
                    </div>
                    </center>
                </section>
                <section className="right">
                    <DescriminiationClause/>
                </section>
            </div>
        </footer>
    );
};
export default Footer;