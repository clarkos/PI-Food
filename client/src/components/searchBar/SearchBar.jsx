import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./searchBar.css";
import {
  getRecipes,
  getTypes,
  setLoading,
  setPageRef,
  setReference,
} from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [input, setInput] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  let regexValidName = /^[a-zA-Z]{1,}\D\S$/g;

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(`valor del input antes de verificar: "${input}"`); //#############################
    // console.log(`prueba regexValidName: ${regexValidName.test(input)}`); //#############################

    if (input.length <= 2 && regexValidName.test(input)) {
      alert(
        "We can search for all if you leave blank the SearchBox, otherwise, you must provide a valid term. That is 'Just ONE word', there is no numbers allowed or blankspaces"
      );
      setInput("");
      return null;
    } else if (regexValidName.test(input)) {
      // console.log("nombre valido");
      let searchVal = "";
      searchVal = `?name=${input}`;

      // console.log("NAME: ", searchVal); //#############################

      dispatch(setReference(input));
      dispatch(getRecipes(searchVal));
    } else {
      // console.log("buscando todas las recetas"); //#############################

      dispatch(setReference("all Recipes"));
      dispatch(getRecipes(input));
    }

    dispatch(setLoading());
    dispatch(setPageRef(0));
    dispatch(getTypes());
    setInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search for recipes"
          name="input"
          id="formInput"
          onChange={handleInput}
          value={input}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
