import React from 'react'
import "./Details.css";
import Instruccions from "./Instruccions";
import Button from "../../Styles/buttons";
import styled from "styled-components";
import GoHome from "../Buttons/GoHome";
import PropTypes from 'prop-types';

const DetailsContainer = ({bool, click, name, summary, score, healthScore, diets, dishTypes, image, steps }) => {
    return (
        <>
          <GoHome top="6%" inner="go home" />
          <div className={"container"}>
            <div className={"title"}>
              <h1>{name}</h1>
              <Container2>
              {
               diets.length === 0 ? <h4>no diets associated</h4> : diets.map((i,index) => (<h4  key={index}> • {i}</h4>)) //prettier-ignore
              }
              </Container2>
            </div>
            <Container className={"dishTypes"}>
              <h3>Dish types: </h3>
              {
                dishTypes.length === 0 ? <h4>no dish types associated</h4> : dishTypes.map((i,index) => (<div key={index}><h4>{i} •</h4></div>)) //prettier-ignore
              }
            </Container>
            <Container className={"score"}>
              <h4>Health score: {healthScore}</h4>
              <h4>User score: {score}</h4>
            </Container>
            <Container className={"summary"}>
              <h4>{summary}</h4> 
            </Container>
            <Container className={"img"}>
              <img src={image} alt={"recipe"} />
            </Container>
            {!bool && steps[0][1][0][0] !== "" && ( //first block, array of steps, first step, number/index => should be '1'
              <Container className="hideshow">
                <Button onClick={click}>show instructions</Button>
              </Container>
            )}
            {bool && steps[0][1][0][0] !== "" && (
              <Container className={"instructions"}>
                <Instruccions array={steps} action={click} />
              </Container>
            )}
          </div>
        </>
      );
}


DetailsContainer.propTypes= {
  name: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  healthScore: PropTypes.string,
  diets: PropTypes.array,
  dishTypes: PropTypes.array,
  image: PropTypes.any.isRequired,
}

DetailsContainer.defaultProps = {
  diets: [],
  dishTypes: [],
  score: '0',
  healthScore: '0',
}




const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h4 {
    margin-left: 10px;
  }
`;

const Container2 = styled.div`
  display: flex;
  align-items: center;

  h4 {
    margin-left: 10px;
  }
`;

export default DetailsContainer
