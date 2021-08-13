import React from 'react'
import Image from "react-bootstrap/Image";
import './Skills.css'
import { skills } from "./Skills-data";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export default function Skills() {
    return (
        <div className = 'skills'>
            Skills
            <div className = 'skills-info'>
                Languages
                <div className = 'row' id = 'languages'>
                    
                    <div className = 'box small-shadow'></div>
                    <div className = 'box small-shadow'></div>
                </div>
                <br></br>
                Frontend
                <div className = 'row' id = 'frontend'>
                    
                    <div className = 'box small-shadow'></div>
                    <div className = 'box small-shadow'></div>
                    <div className = 'box small-shadow'></div>
                    <div className = 'box small-shadow'></div>
                    <div className = 'box small-shadow'></div>
                    <div className = 'box small-shadow'></div>

                </div>
                <br></br>
                Backend
                <div className = 'row' id = 'backend'>
                    
                    {skills.backend.map((skill, index) => (
                    <div className = 'box small-shadow p-2'>
                      <a className="text-dark text-decoration-none" href={skill.link} target="_blank" rel="noopener noreferrer">
                        <Image src={skill.imgSrc} alt={skill.imgAltText} rounded className="image-style m-1"></Image> {skill.skillName}
                      </a>
                    </div>
                  ))}
                </div>

            </div>
        </div>
    )
}
