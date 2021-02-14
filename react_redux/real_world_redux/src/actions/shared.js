

import { getInitialData } from '../utils/api'

export const RECEIVE_DATA = "RECEIVE_DATA"

function receiveData(users, tweets) {
    return {
        type: RECEIVE_DATA,
        users,
        tweets,
    };
}

export function handleLoadData() {
    return (dispatch) => {
        getInitialData().then(({ users, tweets }) => dispatch(receiveData(users, tweets)))
    };
}
