import React from 'react'
import Typewriter from 'typewriter-effect';
import styled from "styled-components";
import '../App.css'
const MyTitleMessage = styled.h1`
  text-align: center;
  font-family: var(--main-font-family);
  font-weight: 25;
  strong {
    font-size: 1.25em;
  }
  
  div {
    color: var(--white);
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
          <div className="main text-center mb-3 small-shadow">
            Hey there! I'm
            <br />
            <span>
              <strong>Amy Gao</strong>
            </span>
          </div>
          <div className="sub small-shadow">
            <Typewriter
              options={{
                strings: ["Aspiring Software Engineer", "Data Scientist", "UofT CS 2023 Graduate", "Eager Learner"],
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