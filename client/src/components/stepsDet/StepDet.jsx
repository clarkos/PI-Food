import React from "react";
import "./stepDet.css"

const StepsDet = ({ array, action }) => {
  return (
    <div className="ff__recipeDet-steps_container">
      {array.map((el) =>
        el.map((el, index) =>
          index === 0 ? (
            <div  className="ff__recipeDet-steps_title" key={index * 32}>
              <p>{el || "How to made it"}</p>
              <button onClick={action}>Hide</button>
            </div>
          ) : (
            el.map((el, index) =>
                el[1] !== "" && (
                  <div className="ff__recipeDet-steps_steps" key={index * 64}>
                    <ul>
                      <li><strong>{el[0]}.-</strong>&nbsp;&nbsp;&nbsp;{el[1]}</li>
                    </ul>
                  </div>
                )
            )
          )
        )
      )}
    </div>
  );
};

export default StepsDet;