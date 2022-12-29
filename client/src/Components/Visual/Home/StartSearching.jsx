import React from "react";
import styled from "styled-components";
import sushi from "../../../assets/fun-sashimi.png";

const StartSearching = () => {
  return (
    <Div>
      <Title>The recipes will be shown here </Title>

      <Img src={sushi} />
    </Div>
  );
};

export default StartSearching;

const Img = styled.img`
  height: 25em;
  grid-area: cartoon;
  margin: auto;
`;

const Title = styled.h1`
  display: inline-block;
  grid-area: title;
  width: fit-content;
  margin: auto;
`;

const Div = styled.div`
  height: 30em;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr 3fr;
  grid-template-areas:
    "title"
    "cartoon";
`;
