import React from "react";
import { Link } from "react-router-dom";
import "./card.css";

const Card = ({ name, img, id, diets, score }) => {
  let formated = [];
  diets.map((e) => formated.push(`| ${e} `));

  return (
    <div className="ff__recipeCard">
      <div className="ff__recipeCard-card">
        <img src={img} alt={name} />
        <Link to={`/recipe/${id}`}>
          <p>{name}</p>
        </Link>
        <div className="ff__recipeCard-info">
          <span>
            {diets.length === 0
              ? ("There has no diets associated")
              : (formated)
            }
          </span>
          <div className="ff__recipeCard-score">
            <p>{score}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
