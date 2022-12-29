import React from "react";
import { useSelector } from "react-redux";
import DietsFilter from '../Filters/DietsFilter';


const DietsDiv = () => {
  const dietsLoaded = useSelector((state) => state.dietsLoaded);

  return (
    <>
      {dietsLoaded.map((e) => (
        <DietsFilter key={e.ID} diet={e.name} />
      ))}
    </>
  );
};

export default DietsDiv;
