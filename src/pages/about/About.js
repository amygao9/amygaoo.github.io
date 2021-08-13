import React from 'react'
import Profile from '../../assets/linkedin.jpeg'
import Image from 'react-bootstrap/Image'
import styled from "styled-components";
import './About.css'

const Strong = styled.span`
    font-size: 1.25em;
    font-weight: bold;
`;
const Highlight = styled.span`
    font-weight: bold;
    color: var(--blue);
`;
const Subp = styled.span`
    color: grey;
`;

export default function About() {
    return (
        <div className = 'about'>
            
            <div className = 'about-info'>
                <Image className="profile" src = {Profile}/>
                
            </div>
            <div className = 'description'>
                    <Strong>Hey there! 😃</Strong> <br></br> <br></br>
                    I'm a Computer Science Senior at the <Highlight>University of Toronto.</Highlight> 
                    <br></br>
                    Software Engineer Intern <Highlight>@ Red Hat.</Highlight> <br></br>
                    I'm currently working on Red Hat's Cloud Engineering team, working with <Highlight>Kubernetes, Openshift and Operators.</Highlight> <br></br>
                    <br></br>
                    <Subp>
                        In my free time I enjoy play volleyball with friends, trying new food and going on hikes.
                        <br></br>
                        
                    </Subp>
                    <br></br>
                    To get in touch with me, feel free to add me on Linkedin.
                     
                    
            </div>
            
            
        </div>
    )
}
 