import React            from 'react';
import TextIo           from './TextIo';

import './hero.css';
const Hero = ({ content, image }) => {

    const contentList = content.map((m, k) => {
        return <TextIo key={k}>{m}</TextIo>
    })
    
    return(
        <section className="hero-section">               
            <div>
                <section>
                    <div>
                        <img src={`/${image.src}`} alt={`${image.alt}`}/>
                        <div className="hero-info">
                            <div>
                                <h1>Faith & Hope </h1>
                                <h4>HOME HEALTH CARE, INC.</h4>
                                <div className="spacer"></div>
                                {contentList}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </section>
    );
};

export default Hero;