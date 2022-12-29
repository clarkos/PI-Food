import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Button from "../../Styles/buttons";
import Head from "../../Styles/Head";
import './GetStarted.css'


const GetStarted = () => {

  return (
    <div className='Landing'>
      <Div >
        <h1>Henry Food</h1>
        <Link to="/home">
        <Linked>
          <h4>Get Started</h4>
        </Linked>
        </Link>
      </Div>
    </div>
  );
};
const Div = styled(Head)`
position: absolute;
top: 0%;
left: 0%;
margin-left: 5rem;
`;

const Linked = styled(Button)`
height:9rem;
color: black;
a{
text-decoration: none;
};
`;



export default GetStarted;
