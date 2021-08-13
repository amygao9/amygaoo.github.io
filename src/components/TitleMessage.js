import React from 'react'
import Typewriter from 'typewriter-effect';
import styled from "styled-components";
import '../App.css'
const MyTitleMessage = styled.h1`
  text-align: center;
  font-family: var(--main-font-family);
  strong {
    font-size: 1.10em;
  }
  
  div {
    color: var(--black);
    .main {
        font-size: 50px;
    }
    .sub {
        font-size: 27px;
    }
  }
`;

function TitleMessage() {
  return (
    <MyTitleMessage class = "title">
      <div className="titleMessage">
        <div className="heading">
          <div className="main text-center mb-3">
            Hi, I'm   
            
            <span>
              <strong> Amy Gao 👋🏼</strong>
            </span>
          </div>
          <div className="sub">
            <Typewriter
              options={{
                strings: ["Aspiring Software Engineer", "Data Scientist", "UofT Computer Science Class of 23'", "Eager Learner"],
                autoStart: true,
                loop: true,
                delay: 50
              }}
            />
          </div>
        </div>
      </div>
    </MyTitleMessage>
  )
};

export default TitleMessage;