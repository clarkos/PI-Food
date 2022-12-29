import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails, setLoading } from "../../Redux/actions";
import Errorhandler from "../Errorhandler";
import "./Details.css";
import Loading from "../Home/Loading";
import DetailsContainer from "./DetailsContainer";

const DetailsRecipes = (props) => {
  const id = props.match.params.id;
  const dispatch = useDispatch();
  const details = useSelector((state) => state.recipeDetails);
  const loading = useSelector((state) => state.loading);
  const { name, summary, score, healthScore, diets, dishTypes, image, steps } = details; //prettier-ignore

  const [bool, setBool] = useState(false);
  const click = () => setBool(!bool);



  useEffect(() => {
    dispatch(setLoading());
    dispatch(getDetails(id));
  }, [id, dispatch]);

  if (loading) {
    return <Loading />;
  }
  if (name && summary && image) {
    return (
      <DetailsContainer
        bool={bool}
        click={click}
        name={name}
        summary={summary}
        score={score}
        healthScore={healthScore}
        diets={diets}
        dishTypes={dishTypes}
        image={image}
        steps={steps ? steps : [["", ["", ""]]]}
      />
    );
  } else return <Errorhandler />;
};

export default DetailsRecipes;
