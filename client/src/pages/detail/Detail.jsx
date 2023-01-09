import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetails, setLoading } from "../../redux/actions";
import { Loader, RecipeDet } from "../../components";
import "./detail.css";

const Detail = (props) => {
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
    return <Loader />;
  }
  if (name && summary && image) {
    return (
      <RecipeDet
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
  } else return <h1>Something goes wrong, please go back to home</h1>;
};

export default Detail;
