const GET_PHOTO_ERROR = 'GET_PHOTO_ERROR';
const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS';

const initialState = {
    data: [],
    error: null
};

export default function getPhotoReducer(state = initialState, action) {
    const {data} = action;
    switch (action.type) {
        case GET_PHOTO_SUCCESS:
            return {
                ...state,
                data
            };

        case GET_PHOTO_ERROR:
            return {
                ...state,
                error: action.error,
                data: []
            };

        default:
            return state;
    }
}

// used by all actions
export const getSuccess = data => ({type: GET_PHOTO_SUCCESS, data});

export const getError = error => ({type: GET_PHOTO_ERROR, error});

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export function getPhoto() {
    return dispatch => {
        return fetch(`https://jsonplaceholder.typicode.com/photos`)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(getSuccess(json))
            })
            .catch(error => dispatch(getError(error)));
    };
}
