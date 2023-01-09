import React from "react";
import { useSelector } from "react-redux";
import { setPageRef } from "../../redux/actions";
import { BtnTemp } from "../../components";

const Pagination = () => {
  const pageReference = useSelector((state) => state.pageReference);
  const recipes = useSelector((state) => state.recipesLoaded);

  if (recipes.length > 1) {
    return (
      <div>
        {pageReference < 1 ? (
          <p>No prev</p>
        ) : (
          <BtnTemp
            value={"Prev"}
            action={setPageRef}
            arg={pageReference - 1}
          />
        )}
        <BtnTemp 
        value={pageReference} 
        action={setPageRef} 
        arg={0} />

        {!(pageReference * 9 + 9 > recipes.length) && (
          <BtnTemp
            value={"Next"}
            action={setPageRef}
            arg={pageReference + 1}
          />
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default Pagination;
