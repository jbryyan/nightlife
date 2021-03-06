import { 
  USER_AUTH, USER_LOGIN, USER_LOGOUT, IS_LOADING,
  ACTIVE_SIDEBAR, USER_ERROR, IS_GOING, ADD_ACTIVITY
} from '../actions/action-types';

const initialState = {
  username: null,
  loggedIn: false,
  loginPage: false,
  loading: false,
  sidebar: false,
  redirect: null,
  error: null,
  activities: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN:
      const { payload } = action;
      return {...state, 
        username: payload.username, 
        loggedIn: payload.loggedIn, 
        loginPage: payload.loginPage,
        redirect: payload.redirect,
        activities: payload.activities
      };
    case USER_AUTH:
      return {...state, username: action.payload.username};
    case USER_LOGOUT:
      return initialState;
    case IS_LOADING:
      return {...state, loading: action.payload };
    case ADD_ACTIVITY:
      return {...state, activities: action.payload.activities };
    case ACTIVE_SIDEBAR:
      return {...state, sidebar: action.payload };
    case USER_ERROR:
      return {...state, error: action.payload };
    default: 
      return state;
  }
}