import React from 'react'
import styled from 'styled-components'
import Button from "../../Styles/buttons";
import Input from "../../Styles/input";
import InputNum from "../Buttons/InputNum";
import LinkButton from "../Buttons/LinkButton";
import Head from "../../Styles/Head";

const FormContainer = ({handleSubmit,handleSubmissionChange, handleCheckboxChange , handleInstrucctions, addStep, removeStep,danger,submission,dietsLoaded, part}) => {
    return (
        <>
          <Head>
            <h1>Submit your own recipe!</h1>
          </Head>
          <form className="containerForm" onSubmit={handleSubmit}>
            <div className="buttonarea">
              <Button type="submit">Submit</Button>
              <LinkButton to="/home" inner="go home" />
            </div>
            <div className="infoInput">
              <div className="top">
                <Title
                  danger={danger && "red"}
                  placeholder={danger ? "A title is required" : "Title *"}
                  name="name"
                  value={submission.name}
                  onChange={handleSubmissionChange}
                />
                <div className="buttoninfo">
                  <label>healthScore</label>
                  <InputNum
                    change={handleSubmissionChange}
                    value={submission.healthScore}
                    name="healthScore"
                  />
                </div>
                <div className="buttoninfo">
                  <label>score</label>
                  <InputNum
                    change={handleSubmissionChange}
                    value={submission.score}
                    name="score"
                  />
                </div>
              </div>
              <div className="summarybox">
                <Summary
                  as="textarea"
                  danger={danger && "red"}
                  type="text"
                  placeholder={danger ? "A summary is required" : "Summary *"}
                  name="summary"
                  value={submission.summary}
                  onChange={handleSubmissionChange}
                />
              </div>
            </div>
            <div className="dietsInput">
              {dietsLoaded.map((e, index) => (
                <Block key={index}>
                  <input
                    id={index}
                    type="checkbox"
                    name={e.name}
                    value={e.name}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor={index}>{e.name}</label>
                </Block>
              ))}
            </div>
            <div className="instructionsInput">
              <h1 className="header">Instrucctions</h1>
              <div className="insertTitle">
                <Title
                  name="Title"
                  placeholder="insert a title!"
                  value={part[0]}
                  onChange={handleInstrucctions}
                />
              </div>

              <div className="insertSteps">
                {part.map(
                  (el, i) =>
                    i !== 0 &&
                    el.map((e, i) => (
                      <Input
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
              <div className="addStep">
                <Add type='button'onClick={addStep}>
                  Add Step
                </Add>
                <Add type='button' onClick={removeStep}>
                  Remove Step
                </Add>
              </div>
            </div>
          </form>
        </>
    )
}

export default FormContainer


const Add = styled(Button)`
  width: 8em;
  align-items: center;
  margin: 0px 10px 0px 10px;
`;

const Block = styled.div`
  padding: 12px;
  display: inline-block;
  border: ${(props) => props.theme.glassBorder};
  background: ${(props) => props.theme.glassWhite};
  position: relative;
  transition: box-shadow 0.2s ease;

  &:hover {
    box-shadow: ${(props) => props.theme.hoverShadow};
  }
  label {
    color: black;
    margin-right: 2em;
  }
`;

const Title = styled(Input).attrs((props) => ({
  type: "text",
}))`
  font-weight: 700;
  font-size: 27px;
  width: 24rem;
  margin-left: 13px;

  ::placeholder {
    font-size: 27px;
  }
`;

const Summary = styled(Input)`
  width: 670px;
  height: 175px;
  padding-bottom: 130px;
  font-family: "Helvetica Neue", serif;
  margin-bottom: 0;
  resize: none;
`;
