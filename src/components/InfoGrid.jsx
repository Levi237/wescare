import React, { useEffect, useRef } from 'react';
import TextIo           from './TextIo';

import './infogrid.css'
const InfoGrid = ({ info }) => {

    const ref = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0];
            if (entry.isIntersecting){
                setTimeout(() => {
                    entry.target.classList.remove('hide-item');
                    observer.disconnect();
                }, 300)
            };
        });
        observer.observe(ref.current);
    }, []);

    const mapInfo = info.map((i, k) => {
        return (     
            <div className="box-info">
                <br/>
                <section>
                    <img className="icon" src={`icons/${i.img}`} alt="MEDICAL AND SOCIAL SERVICES"/>
                </section>               
                <section className={`section_${k}`}>
                    <br/>
                    <TextIo><h3>{i.title}</h3></TextIo>
                    <br/>
                    <p>{i.body}</p>
                </section>
                <br/>
            </div>
        );
    });

    return(
        <section className="page-width">
            <div className="info-grid-section">
                {mapInfo}
                <section ref={ref} className="box-image">
                    <img src="senior-man-nursing-home-smiling-nurse-while-she-s-giving-him-pills.jpg" alt="At home care, nurse with elderly woman in wheelchair"/>
                </section>
                <section ref={ref} className="box-image">
                    <img src="service_area.png" alt="Services area map"/>
                </section>
            </div>
        </section>
    );
};

export default InfoGrid;