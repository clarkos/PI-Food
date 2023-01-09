const axios = require("axios").default;

export const GET_RECIPES = "GET_RECIPES";
export const GET_TYPES = "GET_TYPES";
export const GET_DETAILS = "GET_DETAILS";
export const SET_LOADING = "SET_LOADING";
export const SET_REFERENCE = "SET_REFERENCE";
export const PAGE_REFERENCE = "PAGE_REFERENCE";
export const SORT_NAME = "SORT_NAME";
export const SORT_SCORE = "SORT_SCORE";
export const FILTER_DIET = "FILTER_DIET";
export const CLEAR_FILTERS = "CLEAR_FILTERS";
export const POST_RECIPE = "POST_RECIPE";

export const getRecipes = (name) => {
  let url = "http://localhost:3001/recipes";
  if (name !== "") {
    let fixedName = name.toLowerCase();
    url = url.concat(fixedName);
    console.log(url);
  }
  return async (dispatch) => {
    const response = await fetch(url);
    const json = await response.json();
    return dispatch({
      type: GET_RECIPES,
      payload: json,
    });
  };
};

export const getDetails = (id) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:3001/recipes/${id}`);
    const json = await response.json();
    dispatch({
      type: GET_DETAILS,
      payload: json,
    });
  };
};

export const getTypes = () => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:3001/types/`);
    const json = await response.json();
    dispatch({
      type: GET_TYPES,
      payload: json,
    });
  };
};

export const postRecipe = (data) => {
  axios.post(`http://localhost:3001/recipe`, data);
  return (dispatch) => {
    dispatch({ type: POST_RECIPE });
  };
};

export const setLoading = () => {
  return {
    type: SET_LOADING,
  };
};

export const setReference = (name) => {
  return {
    type: SET_REFERENCE,
    payload: name,
  };
};

export const setPageRef = (num) => {
  return {
    type: PAGE_REFERENCE,
    payload: num,
  };
};

export const sortName = (num) => {
  return {
    type: SORT_NAME,
    payload: num,
  };
};

export const sortScore = (num) => {
  return {
    type: SORT_SCORE,
    payload: num,
  };
};

export const filterDiet = (diet) => {
  return {
    type: FILTER_DIET,
    payload: diet,
  };
};

export const clearFilters = () => {
  return {
    type: CLEAR_FILTERS,
  };
};
