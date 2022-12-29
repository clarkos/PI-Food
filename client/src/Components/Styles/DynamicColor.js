import styled from "styled-components";

const Score = styled.span`

// font-weight: 700;
background-color: ${props => props.color < 33 ? 'red' : props.color > 66 ? '#26B737' : '#FAFA37'};
font-size: ${props => props.size || '13px'};



`


export default Score