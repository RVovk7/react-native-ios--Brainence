const GET_ALBUM_ERROR = 'GET_ALBUM_ERROR';
const GET_ALBUM_SUCCESS = 'GET_ALBUM_SUCCESS';

const initialState = {
    data: [],
    error: null
};

export default function getAlbumReducer(state = initialState, action) {
    const {data} = action;
    switch (action.type) {
        case GET_ALBUM_SUCCESS:
            return {
                ...state,
                data
            };

        case GET_ALBUM_ERROR:
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
export const getSuccess = data => ({type: GET_ALBUM_SUCCESS, data});

export const getError = error => ({type: GET_ALBUM_ERROR, error});

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}

export function getAlbums(id) {
    return dispatch => {
        return setTimeout(() => {
            fetch(`https://jsonplaceholder.typicode.com/albums?userId=${id}`)
                .then(handleErrors)
                .then(res => res.json())
                .then(json => {
                    dispatch(getSuccess(json))
                })
                .catch(error => dispatch(getError(error)));
        }, 500);

    };
}
