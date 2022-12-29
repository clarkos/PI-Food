import React from "react";
import styled from "styled-components";
import { clearFilters } from "../../../Redux/actions";
import Button from "../../Buttons/ActionButton";

const ClearFilters = () => {
  return (
    <Div>
      <Button action={clearFilters} inner={"CLEAR"} />
    </Div>
  );
};


const Div = styled.div`
  button {
    margin: 10px;
  }
  `;

export default ClearFilters;