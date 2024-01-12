import React, { useEffect, useRef } from 'react';
import TextIo           from '../../components/TextIo';
const Info = () => {

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

    return(
        <section ref={ref} className="page-width ref hide-item see-item">
            <br/><br/><br/><br/>
            <div>
                <h3>HOW TO ACCESS OUR SERVICES:</h3>
                <br/>
                <p>
                    Individuals who meet the homebound criteria
                    may be referred for home health services.
                    Referral may include: Physicians, local
                    hospitals, board and care centers, skilled
                    nursing homes.
                </p>
                <p>
                    Within 24-48 hours, or as directed by physicians,
                    a Faith & Hope Home Health. Inc.
                    representative will contact and visit the patient
                    for admission and start of services.
                </p>
            </div>
            <br/><br/><br/><br/>
            <div className="grid two-col mobile-one-col">
                <section>
                    <img src="laboratory-supplies.png" alt="Pitri dish and dropper held up with blue liquid" />
                                    </section>
                <section>
                    <TextIo><h3>DURABLE MEDICAL EQUIPMENT</h3></TextIo>
                    <TextIo><h3>LABORATORY SERVICES</h3></TextIo>
                    <br/>
                    <p>
                        We will facilitate arrangements to be
                        made with the medical equipment
                        provider, Laboratory services will be
                        arranged and facilitated as ordered by
                        the physician. Medications prescribed
                        by the physician will be followed-up
                        with the pharmacy.
                    </p>
                </section>
            </div>
            <br/><br/>
            <div className="top-image">
                    <img className="mobile-only" src="senior-man-nursing-home-smiling-nurse-while-she-s-giving-him-pills.jpg"  alt="Nurse assisting elderly woman standing up from couch to get to her walker." />
                </div>
            <div className="bullet-points-section">
                <div className="box-info">
                    <section>
                        <img className="icon" src="icons/home_aid.png" alt="HOME HEALTH AIDE"/>
                    </section>
                    <section>
                        <TextIo><h3>CERTIFIED HOME HEALTH AIDE </h3></TextIo>
                        <h4>SERVICES INCLUDE:</h4>
                        <br/>
                        <ul>
                            <li>Complete personal care</li>
                            <li>Exercise and ambulation</li>
                            <li>Light house keeping</li>
                            (Essential to health care at home)
                            <li>Vital sign assessment</li>
                        </ul>
                    </section>
                </div>
                <div className="box-info">
                    <section>
                        <img className="icon" src="icons/physical_therapy.png" alt="PHYSICAL THERAPY SERVICES"/>
                    </section>
                    <section>
                        <TextIo><h3>PHYSICAL THERAPY </h3></TextIo>
                            <h4>SERVICES INCLUDE:</h4>
                        <br/>
                        <ul>
                            <li>Develop/improve muscle and joint functions</li>
                            <li>Improve/facilitate maximum self-care</li>
                            <li>Therapeutic exercise/establish home exercise program</li>
                            <li>Assessment of rehabilitation needs</li>
                            <li>Teaching/training</li>
                            (ex. safety, use of assisted devices, etc.)
                        </ul>
                    </section>
                </div>
                <div className="box-info">
                    <section>
                        <img className="icon" src="icons/occupational_therapy.png" alt="OCCUPATIONAL THERAPY SERVICES"/>
                    </section>
                    <section>
                        <TextIo><h3>OCCUPATIONAL THERAPY </h3></TextIo>
                            <h4>SERVICES INCLUDE:</h4>
                        <br/>
                        <ul>
                            <li>Daily living activities training</li>
                            <li>Prescribed specific therapy treatments</li>
                            (Including fine or gross motor activities)
                            <li>Adaptive machinery training</li>
                            <li>Develop/improve upper body function</li>
                        </ul>
                    </section>
                </div>
                <div className="box-image">
                {/* <img src="senior-man-nursing-home-smiling-nurse-while-she-s-giving-him-pills.jpg" alt="At home care, nurse with elderly woman in wheelchair"/> */}
                    <img src="senior-man-nursing-home-smiling-nurse-while-she-s-giving-him-pills.jpg" alt="At home care, nurse with elderly woman in wheelchair"/>
                
                    {/* <img src="assisting-care.png" alt="Nurse assisting elderly woman standing up from couch to get to her walker." /> */}
                </div>
                <div className="box-info">
                    <section>
                        <img className="icon" src="icons/speech_therapy.png" alt="SPEECH THERAPY SERVICES"/>
                    </section>
                    <section>
                        <TextIo><h3>SPEECH THERAPY </h3></TextIo>
                            <h4>SERVICES INCLUDE:</h4>
                        <br/>
                        <ul>
                            <li>Effective communication therapy</li>
                            <li>Assessment of safe swallowing and speech</li>
                            <li>Language, speech disorder treatment</li>
                            <li>Alternative voice/articulation therapy</li>
                            <li>Speech rehabilitation</li>
                        </ul>
                    </section>
                </div>
                <div className="box-info">
                    <section>
                        <img className="icon" src="icons/care.png" alt="MEDICAL AND SOCIAL SERVICES"/>
                    </section>
                    <section>
                        <TextIo><h3>MEDICAL AND SOCIAL </h3></TextIo>
                            <h4>SERVICES INCLUDE:</h4>
                        <br/>
                        <ul>
                            <li>Assessment of psychosocial status</li>
                            <li>Referrals to community resources</li>
                            <li>Identify personal and emotional impacts</li>
                            <li>Integration of financial assistance</li>
                            <li>Identify level of support by family/caregiver</li>     
                        </ul>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default Info;