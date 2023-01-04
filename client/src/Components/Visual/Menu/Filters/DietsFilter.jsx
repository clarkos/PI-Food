import React from "react";
import styled from "styled-components";
import useHistoryDistpatch from "../../../hooks/useHistoryDispatch";
import { filterDiet } from "../../../Redux/actions";
import PropTypes from "prop-types";

const DietsFilter = ({ diet }) => {
  const [history, dispatch] = useHistoryDistpatch();

  const filter = () => {
    dispatch(filterDiet(diet));
    history.push("/home");
  };

  return <Button onClick={filter}>{diet}</Button>;
};


DietsFilter.protoTypes ={
  diet: PropTypes.string.isRequired
}



const Button = styled.button`
  border-radius: ${(props) => props.theme.glassBorderRadius};
  background: ${(props) => props.theme.glassWhite};
  border: ${(props) => props.theme.darkBorder};
  margin: 0.5rem;
  padding: 0.25em 1em;

  transition: box-shadow 0.4s ease;
  &:hover {
    box-shadow: ${(props) => props.theme.hoverShadow};
  }
`;

export default DietsFilter;
