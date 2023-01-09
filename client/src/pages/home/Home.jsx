import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loader, SearchBar } from "../../components";
import { getRecipes } from "../../redux/actions";
import { Cards } from "../../pages";
import "./home.css";

const Home = () => { 
  const preLoad = "";
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getRecipes(preLoad));
  }, [dispatch]);

  const reference = useSelector((state) => state.reference);
  const recipesUnfiltered = useSelector((state) => state.recipesUnfiltered);
  const loading = useSelector((state) => state.loading);

  const msg = (
    <span>
      Enter some <strong>ingredient</strong> or press the{" "}
      <strong>Search</strong> button
    </span>
  );

  const looked = reference.charAt(0).toUpperCase() + reference.slice(1);

  let title =
    reference === ""
      ? msg
      : `You're looking for recipes that contains ${looked}`;

  return (
    <div className="ff__home">
      <div className="ff__home-container">
        <div className="ff__home-heading"></div>
        <div className="ff__home-searchbar">
          <p>{title}</p>
          <SearchBar />
        </div>
        <div className="ff__home-results">
          {recipesUnfiltered.length === 0 && reference === "" && !loading && (
            <h3>There are still no result</h3>
          )}
          <div className="ff__home-cards">
            {loading ? <Loader /> : <Cards />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

/* 
import React from "react";
import s from "styled-components";
import LinkButton from "../Buttons/LinkButton";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import CardContainer from "./Card/CardContainer";
import Loading from "./Loading";

export const Home = () => {

  return (
    <Container>
      <Head>
        <h1>{title} Recipes</h1>
      </Head>
      <SearchBar />
      
      )}
      
    </Container>
  );
};
*/
