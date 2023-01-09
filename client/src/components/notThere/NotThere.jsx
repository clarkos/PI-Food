import React from "react";
import { useSelector } from "react-redux";
import "./notThere.css";
import { ClearFilters } from '../../components'

export const NoFilter = () => {
  return (
    <div>
      <h1>No results</h1>
      <ClearFilters />
    </div>
  );
};

export const NoSearch = () => {
  const reference = useSelector((state) => state.reference);
  return (
    <div>
      <h1>No {reference} recipes found </h1>
    </div>
  );
};

