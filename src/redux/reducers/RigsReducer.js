import { RIGS_FETCH_FAIL, RIGS_FETCH_STARTED, RIGS_FETCH_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    rigs: null,
    isFetchingRigs: false,
    fetchErrorMessage: '',
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case RIGS_FETCH_STARTED:
            return {...state, isFetchingRigs: true}
        case RIGS_FETCH_SUCCESS:
            return {...state, rigs: action.payload, isFetchingRigs: false}
        case RIGS_FETCH_FAIL:
            return {...state, isFetchingRigs: false, fetchErrorMessage: action.payload}
        default:
            return state;
    }
};