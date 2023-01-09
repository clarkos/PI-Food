import React from "react";
// import { Link } from "react-router-dom";
import "./newRecipe.css";

const NewRecipe = ({
  handleSubmit,
  handleSubmissionChange,
  handleCheckboxChange,
  handleInstrucctions,
  addStep,
  removeStep,
  danger,
  submission,
  dietsLoaded,
  part,
}) => {
  return (
    <div className="ff__newRecipe-main_container">
      <div className="ff__newRecipe-header">
        <h1>Submit your own recipe!</h1>
      </div>
      <form className="ff__newRecipe-form_container" onSubmit={handleSubmit}>
        <div className="ff__newRecipe-form_recipe-info">
          <div className="ff__newRecipe-form-recipe_mainInfo">
            <input
              className="ff__newRecipe-form-recipe_mainInfo-title"
              placeholder={
                danger ? "A title is required" : "Name your recipe *"
              }
              name="name"
              id="name"
              value={submission.name}
              onChange={handleSubmissionChange}
            />
            <div className="ff__newRecipe-form-recipe_mainInfo-scores">
              <div className="ff__newRecipe-form-recipe_scores">
                <label htmlFor="score">Users Score</label>
                <input
                  onChange={handleSubmissionChange}
                  value={submission.score}
                  name="score"
                  id="score"
                />
              </div>
              <div className="ff__newRecipe-form-recipe_scores">
                <label htmlFor="healthScore">Health Score</label>
                <input
                  onChange={handleSubmissionChange}
                  value={submission.healthScore}
                  name="healthScore"
                  id="healthScore"
                />
              </div>
            </div>
          </div>

          <div className="ff__newRecipe-form-recipe_summary">
            <label htmlFor="summary">
              Can you tell us something about this recipe?
            </label>
            <textarea
              // danger={danger && "red"}
              type="text"
              placeholder={danger ? "A summary is required" : "Summary *"}
              name="summary"
              id="summary"
              rows="15"
              value={submission.summary}
              onChange={handleSubmissionChange}
            />
          </div>
        </div>

        <div className="ff__newRecipe-form_diets">
          <p>Select in which diet type it's alowed</p>
          <div className="ff__newRecipe-form_diets-container">
            {dietsLoaded.map((e, index) => (
              <div key={index} className="ff__newRecipe-form_diets-group">
                <label htmlFor={index}>{e.name}</label>
                <input
                  id={index}
                  type="checkbox"
                  name={e.name}
                  value={e.name}
                  onChange={handleCheckboxChange}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="ff__newRecipe-form_steps">
          <h3>Now the funny part... Can you tell us how to prepare it?</h3>
          <p>Place some fancy name, just for this part...</p>
          <div className="ff__create-steps_title-insert">
            <input
              name="Title"
              placeholder="Name the whole procedure as you want"
              value={part[0]}
              onChange={handleInstrucctions}
            />
          </div>

          <div className="ff__newRecipe-form_steps-insert">
            <p>
              ... and here is where you describe each step we need to set it
              ready...
            </p>
            <div className="ff__newRecipe-form_steps-gen">
              <div className="ff__newRecipe-form_steps-inserted">
                {part.map(
                  (el, i) =>
                    i !== 0 &&
                    el.map((e, i) => (
                      <input
                        key={i}
                        placeholder={`step  ${i + 1}`}
                        type="text"
                        id={i}
                        name={`step ${i}`}
                        value={e[1]}
                        onChange={handleInstrucctions}
                      />
                    ))
                )}
              </div>
              <div className="ff__newRecipe-form_steps-buttons">
                <button type="button" onClick={addStep}>
                  +
                </button>
                <button type="button" onClick={removeStep}>
                  -
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="ff__newRecipe-form_submit">
          <button type="submit" id="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewRecipe;
