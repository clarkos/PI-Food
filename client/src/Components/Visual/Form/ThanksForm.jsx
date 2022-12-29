import React from "react";
import LinkButton from "../Buttons/LinkButton";
import Head from "../../Styles/Head";
import CenterButtons from "../../Styles/centerButtons";
import Button from "../../Styles/buttons";

const ThanksForm = ({setDone}) => {
  return (
    <>
      <Head>
        <h1>Thanks for Submitting</h1>
        <CenterButtons>
          <Button onClick={() => setDone(false)}>Submit another recipe</Button>
          <LinkButton to="/home" inner="go home" />
        </CenterButtons>
      </Head>
    </>
  );
};

export default ThanksForm;
