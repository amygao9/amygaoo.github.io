import React from 'react'
import TitleMessage from '../../components/TitleMessage'
import Contact from '../../components/contact-icons/Contact'
import './Landing.css'
export default function Landing() {
    return (
        <div className = 'home'>
            <div className = 'title'>
                <TitleMessage />
            </div>
            <div className = 'btns'>
                <Contact />
            </div>
            
        </div>
    )
}
