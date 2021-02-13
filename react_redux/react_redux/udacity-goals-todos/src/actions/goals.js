import API from 'goals-todos-api'

export const ADD_GOAL = "ADD_GOAL";
export const REMOVE_GOAL = "REMOVE_GOAL";


function addGoal(goal) {
    return {
        type: ADD_GOAL,
        goal,
    };
}

function removeGoal(id) {
    return {
        type: REMOVE_GOAL,
        id,
    };
}

export function handleRemoveGoal(goal) {
    return (dispatch) => {
        dispatch(removeGoal(goal.id));
        return API.deleteGoal(goal.id).catch(() =>
            dispatch(addGoal(goal))
        );
    };
}

export function handleAddGoal(name) {
    return (dispatch) => {
        return API.saveTodo(name)
            .then((goal) => {
                dispatch(addGoal(goal));
            })
            .catch(() => {
                alert("There was an error. Try again.");
            });
    };
}