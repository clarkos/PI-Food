import React from "react";
import s from "styled-components";
import LinkButton from "../Buttons/LinkButton";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import CardContainer from "./Card/CardContainer";
import StartSearching from "./StartSearching";
import Loading from "./Loading";
import Head from "../../Styles/Head";

export const Home = () => {
  const reference = useSelector((state) => state.reference);
  const recipesUnfiltered = useSelector((state) => state.recipesUnfiltered);
  const loading = useSelector((state) => state.loading);

  let title =
    reference === ""
      ? "Find"
      : reference.charAt(0).toUpperCase() + reference.slice(1);

  return (
    <Container>
      <Head>
        <h1>{title} Recipes</h1>
      </Head>
      <Div>
        <LinkButton to="/makeRecipe" inner={"make your own"} />
      </Div>
      <SearchBar />
      {recipesUnfiltered.length === 0 && reference === "" && !loading && (
        <StartSearching />
      )}
      {loading ? <Loading /> : <CardContainer />}
    </Container>
  );
};

let Container = s.div`
display:table;
width:100%;
overflow-y: scroll;
height: 100vh;
min-height: 45em;
`;

let Div = s.div`
position: absolute;
top: 24%;
left: 20%;
`;
