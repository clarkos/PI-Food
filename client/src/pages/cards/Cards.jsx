import React from 'react'
import { useSelector } from "react-redux";
import { Card, NoFilter, NoSearch, Pagination } from "../../components";


const Cards = () => {
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
    <div className="ff__cards-main">
      {recipesUnfiltered.length > 0 &&
        reference !== "" &&
        results.length === 0 && (
            <NoFilter />
        )}

      <div className="ff__cards-container">
        {!Array.isArray(recipes) ? (
          <div>
            <NoSearch />
          </div>
        ) : (
          results.map((r) => (
            <Card
              key={r.id}
              name={r.name}
              img={r.image}
              id={r.id}
              diets={r.diets}
              score={r.score}
            />
          ))
        )}
      </div>

      {results.length !== 0 && loading === false && <Pagination />}
      {/* {results.length > 0 && loading === false && <Menu />} */}
    </div>
  );
};

export default Cards

/* 


export default CardContainer;
*/