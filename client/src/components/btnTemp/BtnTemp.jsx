import React from "react";
import useHistoryDistpatch from "../../hooks/useHistoryDispatch";

const BtnTemp = ({ action, arg, value }) => {
  const [history, dispatch] = useHistoryDistpatch();

  const handleClick = () => {
    if (action) {
      dispatch(action(arg));
      history.push("/home");
      window.scrollTo(0, 0);
    }
  };
  return <button onClick={handleClick}>{value}</button>
};

export default BtnTemp;
