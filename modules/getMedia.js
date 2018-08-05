import {url , handleErrors } from './config';

const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS';
const GET_ALBUM_SUCCESS = 'GET_ALBUM_SUCCESS';
const GET_ERROR = 'GET_PHOTO_ERROR';

const initialState = {
    albums: [],
    photos: [],
    error: null
};

// reducer
export default function getMediaReducer(state = initialState, action) {
    const {albums, photos} = action;

    switch (action.type) {

        case GET_PHOTO_SUCCESS:
        return {
            ...state,
            photos
        };

        case GET_ALBUM_SUCCESS:
            return {
                ...state,
                albums
            };
      

        case GET_ERROR:
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
export const getPhotoSuccess = photos => ({type: GET_PHOTO_SUCCESS, photos});
export const getAlbumSuccess = albums => ({type: GET_ALBUM_SUCCESS, albums});
export const getError = error => ({type: GET_ERROR, error});


 ///  fetch photo first then albums !important
export function getMedia(id) {
    return dispatch => {
        return fetch(`${url}/photos`)
            .then(handleErrors)
            .then(res => res.json())
            .then(json => {
                dispatch(getPhotoSuccess(json))
            })
            .then(() => getAlbums(id))
            .then(json => {
                dispatch(getAlbumSuccess(json))
            })
            .catch(error => dispatch(getError(error)));
    };
}

function getAlbums(id) {
    return fetch(`${url}/albums?userId=${id}`)
        .then(handleErrors)
        .then(res => res.json())
        .catch(error => dispatch(getError(error)));
}
