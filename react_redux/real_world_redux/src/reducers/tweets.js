import { RECEIVE_DATA } from '../actions/shared'

export function tweets(state = [], action) {
    switch (action.type) {
        case RECEIVE_DATA:
            return action.tweets;
        default:
            return state;
    }
}