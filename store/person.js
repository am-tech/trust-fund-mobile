import api from '../api';

const LOGGING_IN = 'LOGGING_IN';
const LOGGED_IN = 'LOGGED_IN';

const initialState = {
  isLoading: false,
  person: {},
};

const loggingIn = () => {
  return {
    type: LOADING_CAMPAIGNS,
  };
};

const loggedIn = (person) => {
  return {
    type: LOGGED_IN,
    person,
  };
};

const logIn = (username, password) => {
  return (dispatch) => {
    dispatch(loggingIn());

    api.login(username, password).then((person) => {
      dispatch(loggedIn(person));
    });
  };
}

const ACTION_HANDLERS = {
  [LOGGING_IN]: (state, action) => {
    return {
      ...state,
      isLoading: true,
    };
  },
  [LOGGED_IN]: (state, action) => {
    return {
      ...state,
      isLoading: false,
      person: action.person,
    };
  },
};

export default function reducer (state = initialState, action = {}) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action): state;
}
