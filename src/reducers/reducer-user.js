import { 
  AUTH_USER, LOGIN_USER, LOGOUT_USER, IS_LOADING,
  ACTIVE_SIDEBAR
} from '../actions/action-types';

const initialState = {
  username: null,
  loggedIn: false,
  loginPage: false,
  loading: false,
  sidebar: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      const { payload } = action;
      return {...state, 
        username: payload.username, 
        loggedIn: payload.loggedIn, 
        loginPage: payload.loginPage 
      };
    case AUTH_USER:
      return {...state, username: action.payload.username};
    case LOGOUT_USER:
      return initialState;
    case IS_LOADING:
      return {...state, loading: action.payload };
    case ACTIVE_SIDEBAR:
      return {...state, sidebar: action.payload };
    default: 
      return state;
  }
}