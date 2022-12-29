import React from "react";
import Container from "../../Styles/buttons";
import { Link } from "react-router-dom";
import styled from "styled-components";

const LinkButton = ({ to, inner }) => {
  return (
    <Div as="div">
      <Link to={to}>
        <Container>{inner}</Container>
      </Link>
    </Div>
  );
};

const Div = styled.button`
  display: inline-block;
`;

export default LinkButton;
