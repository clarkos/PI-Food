import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

import Pagehandler from "../../Buttons/Pagehandler";
import Menu from "../../Menu/Menu";
import RecipeCard from "./RecipeCard";
import NoResultsFilter from "../NoResults/NoResultsFilter";
import NoResultsSearch from "../NoResults/NoResultsSearch";



const CardContainer = () => {
  const loading = useSelector((state) => state.loading);
  const recipes = useSelector((state) => state.recipesLoaded);
  const recipesUnfiltered = useSelector((state) => state.recipesUnfiltered);
  const reference = useSelector((state) => state.reference);
  const page = useSelector((state) => state.pageReference);

  let index = page * 9;
  let end = index + 9;
  let results =
    (recipes === [] || !Array.isArray(recipes)) ? [] : recipes.slice(index, end);

  return (
    <>
      {recipesUnfiltered.length > 0 &&
        reference !== "" &&
        results.length === 0 && (
            <NoResultsFilter />
        )}

      <Container>
        {!Array.isArray(recipes) ? (
          <>
            <div></div>
            <NoResultsSearch />
          </>
        ) : (
          results.map((r) => (
            <RecipeCard
              key={r.id}
              name={r.name}
              img={r.image}
              id={r.id}
              diets={r.diets}
              score={r.score}
            />
          ))
        )}
      </Container>

      {results.length !== 0 && loading === false && <Pagehandler />}
      {results.length > 0 && loading === false && <Menu />}
    </>
  );
};

export default CardContainer;

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: repeat(auto-fit, 1fr);
  height: max-content;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }

  @media (max-width: 800px) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
`;
