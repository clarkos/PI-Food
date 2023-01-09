import React, { useRef } from "react";
import useHandleClick from "../../hooks/useHandleClick";
import { useSelector } from "react-redux";
import { sortName, sortScore } from "../../redux/actions";
import { BtnTemp, ClearFilters, DietsFilter } from "..";
import "./modal.css";

const Diets = () => {
  const dietsLoaded = useSelector((state) => state.dietsLoaded);
  return (
    <div>
      {dietsLoaded.map((e) => (
        <DietsFilter key={e.ID} diet={e.name} />
      ))}
    </div>
  );
};

const Filter = ({
  innerLeft,
  innerRight,
  actionLeft,
  actionRight,
  argLeft,
  argRight,
  title,
}) => {
  return (
    <div>
      <BtnTemp value={innerLeft} action={actionLeft} arg={argLeft} />
      <h1>{title}</h1>
      <BtnTemp value={innerRight} action={actionRight} arg={argRight} />
    </div>
  );
};

const Modal = () => {
  const reference = useRef(null);
  const [bool, setBool] = useHandleClick(reference, false);
  const recipes = useSelector((state) => state.recipesLoaded);
  const onClick = () => setBool(!bool);

  return (
    <div className="menu-container">
      {recipes && <button onClick={onClick}>Filter</button>}
      <div ref={reference} className={`menu ${bool && "active"}`}>
        <ul>
          <h3>Results: {recipes.length}</h3>
          <li>
            <Filter 
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
            <Filter
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
            <Diets />
          </li>
          <li>
            <ClearFilters />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Modal;