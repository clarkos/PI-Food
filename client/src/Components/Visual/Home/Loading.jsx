import React from "react";
import styled from "styled-components";
import loader from "../../../assets/loader.gif";

const Loading = () => {
  return (
    <Div>
      <h1>Searching...</h1>
      <Img src={loader} alt="loading" />
    </Div>
  );
};

export default Loading;

const Div = styled.div`
  display: grid;
  grid-template-rows: 10em 1fr;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: center;
`;

const Img = styled.img`
  margin-left: 40px;
`;
