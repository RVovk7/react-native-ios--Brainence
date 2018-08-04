const AUTH_BEGIN = 'AUTH_BEGIN';
const AUTH_ERROR = 'AUTH_ERROR';
const AUTH_SUCCESS = 'AUTH_SUCCESS';

const initialState = {
    data: [],
    error: null,
    auth: false
};
// reducer
export default function authReducer(state = initialState, action) {
    const {data} = action;
    switch (action.type) {
        case AUTH_SUCCESS:
            return {
                ...state,
                data,
                auth: true
            };

        case AUTH_ERROR:
            return {
                ...state,
                error: action.error,
                data: []
            };

        default:
            return state;
    }
}

// actions
export const authSuccess = data => ({type: AUTH_SUCCESS, data});
export const authError = error => ({type: AUTH_ERROR, error});

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export function authCheck(id) {
    return dispatch => {
        return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                json
                    ? dispatch(authSuccess(json))
                    : dispatch(authError('wrong id'))
            })
            .catch(error => dispatch(authError(error)));
    };
}
