import React from 'react'
import css from './HelpCard.module.css'
const HelpCard = ({title, bgc, line}) => {
    return <div style={{backgroundColor: bgc}} className={css.helpCard}>
        <div style={{width: line}}></div>
        <h3>{title}</h3>
    </div>
}

export default HelpCard