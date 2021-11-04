import React from 'react'
import css from './Main.module.css'
import mainPic from '../../images/Mask Group 1px .png'
import HelpCard from '../HelpCard'
import {Section1} from '../Section1'

const MainPage = () => {

    const data = [
        {
            bg: "#FFE2DE",
            title: 'Weight Lifting',
            line: 'width:255px'
        },
        {
            bg: "#C4E769",
            title: "Running  & Spinning"
        },
        {
            bg: "#62D0DF",
            title: "Pumping Iron"
        },
        {
            bg: "#0052C1",
            title: "Pumping Iron"
        },
    ]
    

    return <div className={css.mainPage}>
        <div className={css.container}>
            <nav>
                <span>Thrivetalk</span>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Blog</li>
                </ul>
                <button>CONTACT US</button>
            </nav>

            <div className={css.mainBlock}>
                <div className={css.section1}>
                    <p className={css.item}>Thrivetalk</p>
                    <h1 className={css.header}>HELPING YOU THRIVE IN ALL AREAS OF LIFE</h1>
                    <p className={css.main_item}>Our highly talented therapists can help you with a range of issues 
                        including relationships, sex, PTSD, depression, social anxiety, 
                        or even just caring for yourself more.</p>
                        <div>
                            <button className={css.btn1}>WHO AM I</button>
                            <button className={css.btn2}>WHAT DO I DO</button>
                        </div>
                </div>

                <div>
                    <img src={mainPic} alt="" />
                </div>
            </div>

        </div>

        <div>
            <Section1/>
        </div>


        <div className={css.helpMain}>
            <div className={css.helpContainer}>
                <h3>ABOUT US</h3>
                <p className={css.helpItem}>We want to help you thrive! Whether you are just looking for 
                    someone to talk to, or are struggling with a mental wellness 
                    issue we’re here to help.  Our highly talented therapists can 
                    help you with a range of issues including relationships, sex, 
                    PTSD, depression, social anxiety, 
                    or even just caring for yourself more.</p>
                </div>

            <h5>WE CAN HELP YOU WITH</h5>

            <div className={css.helpData}>
                {
                    data.map((el, id) => {
                        return <HelpCard
                                bgc={el.bg}
                                title={el.title}
                                line={el.line}
                                key={id}
                        />
                    })
                }
            </div>
        </div>

    </div>
}

export default MainPage