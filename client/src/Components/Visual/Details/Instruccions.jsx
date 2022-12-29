import React from "react";
import styled from "styled-components";
import Button from "../../Styles/buttons";
import PropTypes from 'prop-types';

const Instruccions = ({ array, action }) => {
  return (
    <Div>
      {array.map((el) =>
        el.map((el, index) =>
          index === 0 ? (
            <Container key={index * 32}>
              <h3>{el || "instructions"}</h3>
              <Button onClick={action}> Hide</Button>
            </Container>
          ) : (
            el.map(
              (el, index) =>
                el[1] !== "" && (
                  <Container2 key={index * 64}>
                    <h5>
                      {el[0]} {el[1]}
                    </h5>
                  </Container2>
                )
            )
          )
        )
      )}
    </Div>
  );
};

Instruccions.propTypes= {

  array: PropTypes.array.isRequired,
  action: PropTypes.func.isRequired,
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  min-width: 50em;
  margin-bottom: 1rem;
  align-items: center;
  span {
    font-size: 26px;
  }
`;

const Container2 = styled.div`
  border: ${(props) => props.theme.glassBorder};
  background: ${(props) => props.theme.glassTransparent};
  margin: 3px;
  width: 98vw;
`;

const Div = styled.div`
  align-items: center;
  font-size: 20px;
  justify-content: center;
`;

export default Instruccions;
