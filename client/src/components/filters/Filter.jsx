import React from "react";
import useHistoryDistpatch from "../../hooks/useHistoryDispatch";
import { useSelector } from "react-redux";
import { clearFilters, filterDiet } from "../../redux/actions";
import { BtnTemp } from "../../components";
import "./filter.css";

export const DietsFilter = ({ diet }) => {
  const [history, dispatch] = useHistoryDistpatch();
  const filter = () => {
    dispatch(filterDiet(diet));
    history.push("/home");
  };
  return <button onClick={filter}>{diet}</button>;
};

export const ClearFilters = () => {
  return (
    <div>
      <BtnTemp action={clearFilters} value={"CLEAR"} />
    </div>
  );
};

export const NoResults = () => {
  return (
    <div>
      <h1>No results</h1>
      <ClearFilters />
    </div>
  );
};

export const NoResSearch = () => {
  const reference = useSelector(state => state.reference)

  return (
      <div>
          <h1>No {reference} recipes found </h1>
      </div>
  )
}

/* 
import PropTypes from "prop-types";

DietsFilter.protoTypes ={
  diet: PropTypes.string.isRequired
}
*/
