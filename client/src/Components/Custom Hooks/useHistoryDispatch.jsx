import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

const useHistoryDistpatch = () => {
 
    const dispatch = useDispatch();
    const history = useHistory()

    return [history, dispatch]
}


export default useHistoryDistpatch