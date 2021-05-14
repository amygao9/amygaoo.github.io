import React from 'react'
import Profile from '../../assets/picture.jpg'
import Image from 'react-bootstrap/Image'
import './About.css'
export default function About() {
    return (
        <div className = 'about small-shadow'>
            
            <div className = 'about-info'>
                About Me!
                <Image className="profile justify-content-end" src = {Profile}/>
                <div className = 'description medium-shadow'>
                    Hey! I'm Amy!
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>

            </div>
            
            
        </div>
    )
}
 