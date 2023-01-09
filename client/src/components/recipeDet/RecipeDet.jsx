import React from "react";
import { StepDet } from "../../components";
// import { Detail } from "../../pages"
import "./recipeDet.css";

const RecipeDet = ({
  bool,
  click,
  name,
  summary,
  score,
  healthScore,
  diets,
  dishTypes,
  image,
  steps,
}) => {
  return (
    <div className="ff__detail">
      <div className="ff__detail-container">
        <div className="ff__detail-title">
          <p>{name}</p>
          <span>
            <ul>
              {diets.length === 0 ? (
                <h4>no diets associated</h4>
              ) : (
                diets.map((i, index) => <li key={index}>{i}</li>)
              )}
            </ul>
          </span>
        </div>
        <div className="ff__detail-image">
          <img src={image} alt={name} />
        </div>
        <div className="ff__detail-shortInfo">
          <div className="ff__detail-score">
            <p>
              Health score: <strong>{healthScore}</strong> - User score:{" "}
              <strong>{score}</strong>
            </p>
          </div>
          <div className="ff__detail-dish">
            <p>Dish types: </p>
            <ul>
              {dishTypes.length === 0 ? (
                <span>no dish types associated</span>
              ) : (
                dishTypes.map((i, index) => <li key={index}>{i}</li>)
              )}
            </ul>
          </div>
        </div>

        <div className="ff__detail-summary">
          <span>Key benefits</span>
          <p>{summary}</p>
        </div>
        {!bool &&
          (steps[0][1][0][0]) !== "" && ( //first block, array of steps, first step, number/index => should be '1'
            <div className="ff__detail-instructions_hideshow">
              <button onClick={click}>Do you wanna try it?</button>
            </div>
          )}
        {bool && steps[0][1][0][0] !== "" && (
          <div className="ff__detail-instructions">
            <StepDet array={steps} action={click} />
          </div>
        )}
      </div>
    </div>
  );
};

export default RecipeDet;
