import React, { useRef } from "react";
import { useSelector } from "react-redux";
import "./Menu.css";
import DietsDiv from "./Divs/DietsDiv";
import { sortName, sortScore } from "../../Redux/actions";
import ClearFilters from "./Filters/ClearFilters";
import FilterDiv from "./Divs/SortDiv";
import useHandleClick from "../../hooks/useHandleClick";
import styled from "styled-components";
import Button from "../../Styles/buttons";

const Menu = () => {
  const reference = useRef(null);
  const [bool, setBool] = useHandleClick(reference, false);
  const recipes = useSelector((state) => state.recipesLoaded);
  const onClick = () => setBool(!bool);

  return (
    <div className={`menu-container`}>
      {(recipes) && (
        <Trigger onClick={onClick}>
          <span>Filter</span>
        </Trigger>
      )}
      <Nav ref={reference} className={`menu ${bool && "active"}`}>
        <ul>

            <h3>Results: {recipes.length}</h3>

          <li>
            <FilterDiv
              innerLeft={"Desc"}
              innerRight={"Asc"}
              actionLeft={sortName}
              actionRight={sortName}
              argLeft={1}
              argRight={-1}
              title={"Name"}
            />
          </li>
          <li>
            <FilterDiv
              innerLeft={"Desc"}
              innerRight={"Asc"}
              actionLeft={sortScore}
              actionRight={sortScore}
              argLeft={-1}
              argRight={1}
              title={"Score"}
            />
          </li>
          <li>
            <DietsDiv />
          </li>
          <li>
            <ClearFilters/>
          </li>
        </ul>
      </Nav>
    </div>
  );
};

const Trigger = styled(Button)`
  position: absolute;
  top: 23.8%;
  right: 20%;

  span {
    font-weight: 700;
    font-size: 14px;
    margin: 10px;
  }
`;

const Nav = styled.nav`
  position: absolute;
  top: 31%;
  right: 13%;
  width: 300px;

  visibility: hidden;
  transform: translateY(200px);
  opacity: 0;
  transition: opacity 0.4s ease, transform 0.4s ease, visibility 0.4s;

  border: ${(props) => props.theme.glassBorder};
  background: rgba(255, 255, 255, 0.65);
  box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
  backdrop-filter: blur(20px);
  border-radius: 18px;

  .active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  };

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  };

  li {
    border-top: 1px solid grey;
    button{
      border: ${props => props.theme.darkBorder}
    }
    }
  
`;

export default Menu;
