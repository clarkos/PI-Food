import React from "react";
import styled from "styled-components";
import Input from "../../Styles/input";

const InputNum = ({ value, change, name }) => {
  return (
    <Num
      type="number"
      name={name}
      value={value}
      color={value}
      onChange={change}
      min={0} max={100}
    />
  );
};

const Num = styled(Input)`
  padding: -10px -20px;
  width: 3rem;
  font-size: 18px;
  height: 4rem;
  margin: 0;
  margin-top: 1rem;
`;

export default InputNum;
