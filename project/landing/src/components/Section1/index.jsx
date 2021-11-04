import React from 'react'
import css from '../Section1/Section1.module.css'
import sectionPic from '../../images/christopher-campbell-40367.png'
export const Section1 = () => {
    return <div className={css.section1_main}>
        <div>
            <div className={css.section1_block}>
                    <h2>Why Thrive?</h2>
                    <p>Want to improve your well-being from the comfort of your 
                        own couch? Are you having trouble finding the right 
                        therapist?  Here at ThriveTalk, our licensed therapists 
                        provide the same quality care you would get in office from
                        anywhere you can access your laptop or mobile phone.
                        Become your best self with ThriveTalk.  Start therapy 
                        now with a licensed therapist!</p>
                </div>
                
                <div className={css.section1_pic}>
                    <img src={sectionPic} alt="" />
                </div>
        </div>

    </div>
}