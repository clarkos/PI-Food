import styled from "styled-components";

let Container = styled.button`
  display: inline-block;
  font-size: 1em;


  border-radius: ${props => props.theme.glassBorderRadius};
  border: ${props => props.theme.glassBorder};
  background: ${props => props.theme.glassWhite};

  height: 3em;
  width: max-content;

  margin: 0px;
  margin-left: 10px;
  padding: 0.25em 1em;
  
  transition: box-shadow 0.4s ease;
  &:hover {
    box-shadow: ${(props) => props.theme.hoverShadow};
  }
  
  h5 {
    padding: 6px;
    text-decoration: none;
    margin: 0;
  }
  color: black;

`;

export default Container;
