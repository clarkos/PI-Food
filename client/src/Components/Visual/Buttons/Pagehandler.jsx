import React from "react";
import { useSelector } from "react-redux";
import { setPageReference } from '../../Redux/actions';
import Container from "../../Styles/buttons";
import PageButton from "./ActionButton";
import CenterButtons from "../../Styles/centerButtons";


const Pagehandler = () => {
  const pageReference = useSelector((state) => state.pageReference);
  const recipes = useSelector((state) => state.recipesLoaded);


  if (recipes.length > 1) {
    return (
      <CenterButtons>
        {pageReference < 1 ? (
          <Container>No prev</Container>
        ) : (
          <PageButton
          inner={'Prev'}
          action={setPageReference}
          arg={pageReference - 1}
         />


        )}
        <PageButton 
        inner={pageReference}
        action={setPageReference}
        arg={0}
        />

        {!((pageReference * 9) + 9 > recipes.length) && (
          <PageButton
         inner={'Next'}
         action={setPageReference}
         arg={pageReference + 1}
        />
        )}
      </CenterButtons>
    );
  } else {
    return null;
  }
};


export default Pagehandler;
