import { RIGS_FETCH_SUCCESS, RIGS_FETCH_STARTED, RIGS_FETCH_FAIL } from './types';
import { getRigs } from '../../api';

export const rigsFetchSuccess = (rigs) => {
    return {
        type: RIGS_FETCH_SUCCESS,
        payload: rigs
    }
}

export const fetchRigs = () => {
    return (dispatch) => {
        dispatch({ type: RIGS_FETCH_STARTED })
        getRigs()
        
        .then(res => {
            console.log(res)
            dispatch(rigsFetchSuccess(res))
        })
        .catch(err => {
            dispatch({ type: RIGS_FETCH_FAIL, payload: err })
        })
    }
}