import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DynamicColor from "../../../Styles/DynamicColor";
import PropTypes from 'prop-types';
const RecipeCard = ({ name, img, id, diets, score}) => {
  let formated = [];
  diets.map((e) => formated.push(" • ", e));


  return (
    <Container img={img}>
      <Link to={`/recipe/${id}`}>
        <Div>
          <h3>{name}</h3>
          <More>
            <DynamicColor color={score} size="25px">
              {score}
            </DynamicColor>
            <h4>{diets.length === 0 ? 'no diets associated' : formated}</h4>
          </More>
        </Div>
      </Link>
    </Container>
  );
};



RecipeCard.propTypes= {

  name: PropTypes.string.isRequired,
  score: PropTypes.string.isRequired,
  diets: PropTypes.array,
  img: PropTypes.any.isRequired,
  id: PropTypes.any.isRequired,

}

RecipeCard.defaultProps = {
  diets: [],
  score: '0',
}

const More = styled.div`
  display: flex;
`;

let Container = styled.div`
  background: ${(props) => `url(${props.img})center / cover`};
  a {
    text-decoration: none;
  }
  overflow: hidden;

  background-repeat: repeat;
  text-align: center;
  margin: 3em;
  min-width: 20em;
  min-height: 15em;
  max-height: 16em;
  border-radius: 13px;

  transition: box-shadow 0.4s ease;
  &:hover {
    box-shadow: 0px 0px 49px 5px rgba(0, 0, 0, 0.3);
  }
`;

const Div = styled.div`
  background: rgba(255, 255, 255, 0.95);
  position: relative;
  top: 74%;
  color: black;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 0.5fr 2fr;
  grid-template-areas:
    "name"
    "extra";

  transition: all 0.5s;

  ${Container}:hover & {
    transform: translateY(-40%);
  }

  span {
    padding: 0.5rem;
    border-radius: 2rem;
    height: max-content;
    margin: 1rem;
  }

  padding: 0;

  h3 {
    grid-area: name;
    margin: 10px;
    margin-bottom: 0;
    align-items: center;
    padding: 5px 10px;
    min-height: 3em;
  }

  div {
    grid-area: extra;
  }
  height: 13rem;
`;

export default RecipeCard;
