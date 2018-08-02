const AUTH_BEGIN = 'AUTH_BEGIN';
const AUTH_ERROR = 'AUTH_ERROR';
const AUTH_SUCCESS = 'AUTH_SUCCESS';

const initialState = {
  data: [],
  loading: false,
  error: null,
  auth: false,
};

export default function authReducer(state = initialState, action) {
  const {
    data,
  } = action;
  switch (action.type) {
    case AUTH_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
        data: [],
      };

    case AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: data,
        auth: true,
      };

    case AUTH_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
        data: [],
      };

    default:
      return state;
  }
}

// used by all actions
export const fetchBegin = () => ({
  type: AUTH_BEGIN,
});

export const fetchSuccess = data => ({
  type: AUTH_SUCCESS,
  data,
});

export const fetchError = error => ({
  type: AUTH_ERROR,
  error,
});

function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}


export function authCheck(id) {
    return dispatch => {
      dispatch(fetchBegin());
      return fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
     json ? dispatch(fetchSuccess(json)) : dispatch(fetchError('wrong id'))
        })
        .catch(error => dispatch(fetchError(error)));
    };
  }
