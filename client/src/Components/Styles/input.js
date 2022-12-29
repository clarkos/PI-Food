import styled from "styled-components";

const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  outline: none;
  border-style: solid;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-color: ${(props) => props.danger || props.theme.glassBorder};

  border-radius: 10px;

  height: 4em;
  width: 29em;

  padding-left: 15px;
  margin: 1em;

  ::placeholder {
    font-size: 17px;
    color: ${(props) => props.danger && "#FF7474"};
    color: black;
  }
`;

export default Input;
