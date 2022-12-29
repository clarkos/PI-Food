import React from "react";
import Head from "../Styles/Head";

import LinkButton from './Buttons/LinkButton'

const Errorhandler = () => {
  return (
    <Head>
      <h1>Sorry, we couldn't find the page you were looking for :(</h1>
      <LinkButton to='/home' inner={'go back'}/>


    </Head>
  );
};

export default Errorhandler;
