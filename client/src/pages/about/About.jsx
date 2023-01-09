import React from "react";
import "./about.css";
import node from "../../assets/proj_node.jpg";
import react from "../../assets/proh_react.png";
import db from "../../assets/proj_postgre.png";

const About = () => {
  return (
    <div className="ff__about-container">
      <div className="ff__about-header">
        <span>A Brief Introduction</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          Necessitatibus itaque illo tenetur aliquid magnam eligendi dolores,
          cumque, dolor nihil sunt harum quas deserunt id. Similique tempore
          repellendus vel culpa sunt!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          pariatur esse perferendis nulla in saepe repudiandae velit iure
          doloribus quidem facilis dolorem aliquam, voluptatum numquam itaque
          quibusdam. Incidunt, reiciendis illum?
        </p>
      </div>
      {/* <div className="ff__about-designer">
        <img src={dev} alt="Luciano Schmarsow" />
      </div> */}
      <div className="ff__about-proyect">
        <div className="ff__about-proyect_article">
          <div>
            <h2>ReactJS + Redux</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          pariatur esse perferendis nulla in saepe repudiandae velit iure
          doloribus quidem facilis dolorem aliquam, voluptatum numquam itaque
          quibusdam. Incidunt, reiciendis illum?</p>
          </div>
          <img src={react} alt="Luciano Schmarsow" />{" "}
        </div>
        <div className="ff__about-proyect_article-div" />
        <div className="ff__about-proyect_article">
          <img src={node} alt="Luciano Schmarsow" />
          <div>
            <h2>NodeJS + ExpressJS</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          pariatur esse perferendis nulla in saepe repudiandae velit iure
          doloribus quidem facilis dolorem aliquam, voluptatum numquam itaque
          quibusdam. Incidunt, reiciendis illum?</p>
          </div>
        </div>
        <div className="ff__about-proyect_article-div" />
        <div className="ff__about-proyect_article">
          <div>
            <h2>Postgres SQL</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          pariatur esse perferendis nulla in saepe repudiandae velit iure
          doloribus quidem facilis dolorem aliquam, voluptatum numquam itaque
          quibusdam. Incidunt, reiciendis illum?</p>
          </div>
          <img src={db} alt="Luciano Schmarsow" />{" "}
        </div>
      </div>
    </div>
  );
};

export default About;
