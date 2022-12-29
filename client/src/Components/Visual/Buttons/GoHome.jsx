import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import Button from '../../Styles/buttons'



const GoHome = ({top}) => {
    return (
            <Link to='/home'>
        <Home top={top}> Go Home</Home>
            </Link>
    )
}

export default GoHome


const Home = styled(Button)`

position: absolute;
top: ${props => props.top || '4%'};
right: 7%;


`;