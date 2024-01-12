import React            from 'react';
import TextIo from '../../components/TextIo';

import styled from 'styled-components';
const ServicesList = () => {

    return(
        <Wrapper className="services-list-section">               
            <div className="section-container">
                <TextIo><h2>What services do we provide?</h2></TextIo>
                <br/>
                <div className="">
                    <div className="grid two-col mobile-one-col jciqa">
                        <div>
                            <ul className="ul-two-colHIDE">
                                <li>Registered Nursing</li>
                                <li>Licensed Vocational Nursing</li>
                                <li>Certified Home Health Aides</li>
                                <li>Physical Therapy</li>
                                <li>Speech Therapy</li>
                                <li>Occupational Therapy</li>
                                <li>Medical Social Work</li>
                                <li>Speciality services, such as infusion</li>
                                <li>Post Surgical Care</li>
                                <li>Coordinating supplies & </li>
                                specialty medical equipment
                                <li>Laboratory Services</li>
                            </ul>
                        </div>
                        <div>


                        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'flx-end'}}>
<img src="assisting-elderly-woman-with-crutches.jpg" />
<section style={{flexGrow: '1'}}></section>
            <section style={{}}>
                <div style={{display: 'flex', alignItems: 'flex-end', justifyContent: 'flex-end'}}>
                    <div className="container" style={{maxWidth: '300px', display: 'flex'}}>
                        <section className="title">
                            <h3><small>JOINT COMMISSION</small></h3>
                            <h3><small>INTERNATIONAL</small></h3>
                            <h3><small>QUALITY APPROVAL</small></h3>
                        </section>
                        <section>
                            <img src="JCIQA.png" alt="Joint Commission International Quality Approval"/>
                        </section>
                    </div>
                </div>
            </section>

        </div>
                        </div>
                    </div>
                </div>
            </div>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    img {
        max-width: 80%;
        margin-left: 20%;
    }
    .jciqa {
        grid-template-columns: auto 1fr;
    }

    .jciqa > div:last-of-type {
        display: flex;
        position: relative;
    }

    @media (max-width: 739px){
        img {
            max-width: 100%;
            margin-left: 0%;
            margin-bottom: 80px;
        }
        .jciqa {
            grid-template-columns: 1fr;
            gap: 64px!important;
        }
    }

`;

export default ServicesList;