import React from 'react'
import useHistoryDistpatch from '../../Custom Hooks/useHistoryDispatch';
import Container from '../../Styles/buttons'


const Template = ({action,arg,inner}) => {
 
    const [history, dispatch] = useHistoryDistpatch()

    const handleClick = () => {
        if( action){
            dispatch(action(arg))
            history.push('/home')
            window.scrollTo(0, 0)
        }
    }
    return (
        <Container onClick={handleClick}>
            <h5>{inner}</h5>
        </Container>
    )
}

export default Template



