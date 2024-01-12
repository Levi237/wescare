import React, { Component } from 'react';
import './EmailForm.css'

/*  DEVELOPER NOTES:
        MailChimp email form designed to fit versatile needs.

        TEMPLATE OPTIONS
            Contact: *First, Last, *Email, Phone, Message
            Message: *First, Last, *Email, Message
            Newsletter: *Email
            Subscribe: *First, Last, *Email

        RENDER
            <EmailForm 
                form="newsletter" // select: contact, newsletter or subscribe
                _id={`${process.env.REACT_APP_MAILCHIMP_ID}`} 
                _formId={`${process.env.REACT_APP_MAILCHIMP_FORM_ID}`} 
                _src="https://coveredperfectly.us18.list-manage.com/subscribe/post?u=3899f2f3d1b88d55665fb0f93" 
                />
 */

export default class EmailForm extends Component { 
    state = {
        authFilter: ``,
        emailValue: ``,
        fNameValue: ``,
        lNameValue: ``,
        messageValue: ``,
        phoneValue: ``,
        source: ``,
    };

    render(){
        const { authFilter, emailValue, fNameValue, lNameValue, messageValue, phoneValue } = this.state;
        const { form } = this.props;

        const _src = "https://faithandhopehomehealth.us21.list-manage.com/subscribe/post?u=362c320102323fc5aa4b23b87&amp;id=0e10a62f14&amp;f_id=0028efe6f0" 
        const _id = `${process.env.REACT_APP_MAILCHIMP_ID}`
        const _formId = `${process.env.REACT_APP_MAILCHIMP_FORM_ID}` 
        
        const formSrc = `${_src}&amp;id=${_id}&amp;f_id=${_formId}`;

        return(
            <form 
                action="https://faithandhopehomehealth.us21.list-manage.com/subscribe/post?u=362c320102323fc5aa4b23b87&amp;id=0e10a62f14&amp;f_id=0028efe6f0"
                method="POST" 
                id="mc-embedded-subscribe-form" 
                name="mc-embedded-subscribe-form" 
                className={`validate email ${form}`}
                noValidate >
                { (form === 'subscribe' || form === 'contact' || form === 'message') && 
                <section className="name-section">
                    <label htmlFor='MERGE1'>
                        <input 
                            className="input"
                            type="text" 
                            name="FNAME"
                            id="MERGE1" 
                            value={fNameValue}
                            placeholder="*First Name" 
                            onChange={(e)=>{this.setState({fNameValue: e.target.value, source: form});}}
                        />
                    </label>
                    <label htmlFor='MERGE2'>
                        <input 
                            className="input"
                            type="text" 
                            name="LNAME" 
                            id="MERGE2" 
                            value={lNameValue}
                            placeholder="Last Name" 
                            onChange={(e)=>{this.setState({lNameValue: e.target.value});}}
                        />
                    </label>
                </section>
                }
                <section className="contact-section" >
                    <label htmlFor='MERGE0'>
                        <input 
                            className="input"
                            type="email" 
                            name="EMAIL" 
                            id="MERGE0"
                            value={emailValue}
                            placeholder="*Email" 
                            onChange={ (e)=>{this.setState({emailValue: e.target.value});} } 
                            autoCapitalize="off" 
                            autoCorrect="off"
                            required
                        /> 
                    </label>
                    { (form === 'contact') && 
                    <label htmlFor='MERGE4'>
                        <input 
                            className="input"
                            type="tel" 
                            name="PHONE" 
                            id="MERGE4"
                            value={phoneValue}
                            onChange={ (e)=>{this.setState({phoneValue: e.target.value});} } 
                            autoCapitalize="off" 
                            autoCorrect="off"
                            placeholder="555-555-5555" 
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                        /> 
                    </label>
                    }
                    { (form === 'newsletter') &&
                    <div className="submit">
                        <input 
                            className="input"style={{width: '40px', marginLeft: '-1px'}} type="submit" value="➔" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                    </div>
                    }
                </section>
                { (form === 'contact' || form === 'message') && 
                <section>
                    <label htmlFor='MESSAGE'>
                        <textarea 
                            type="text" 
                            maxLength="360"
                            name="MESSAGE" 
                            id="MESSAGE" 
                            value={messageValue}
                            placeholder="Message" 
                            onChange={(e)=>{this.setState({messageValue: e.target.value});}}
                            required
                        />
                    </label>
                </section>
                }
                <section>
                    <div className="auth-filter" 
                        aria-hidden="true" 
                        style={{ position: 'absolute', left: '-5000000px'}}>
                        <input 
                            type="text" 
                            name="b_0e3bf36f8cbe7c4f0019bd050_fe06177933" 
                            tabIndex="-1" 
                            value={authFilter}
                            onChange={(e)=>{this.setState({authFilter: e.target.value});}}
                            />
                    </div>
                    { (form === 'subscribe' || form === 'contact' || form === 'message') && 
                    <div className="submit">
                        <input type="submit" value="submit" name="subscribe" id="mc-embedded-subscribe" className="button"/>
                    </div>
                    }
                </section>
            </form> 
        );
    };
};