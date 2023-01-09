import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTypes } from "../redux/actions";

function useDiets() {
  const dispatch = useDispatch();
  const dietsLoaded = useSelector((state) => state.dietsLoaded);

  useEffect(() => {
    dispatch(getTypes());
  }, [dispatch]);
  return dietsLoaded;
}

export default useDiets;