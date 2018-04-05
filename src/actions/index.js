import { 
  ACTIVE_SIDEBAR,
  ITEM_SEARCH,
  ITEM_SORT,
  IS_LOADING,
  IS_GOING,
  USER_LOGIN,
  USER_LOGOUT,
  USER_REGISTER,
  USER_ERROR
} from './action-types';

export const active_sidebar = (action) => {
  return {
    type: ACTIVE_SIDEBAR,
    payload: action
  };
};

export const item_search = (action) => {
  return {
    type: ITEM_SEARCH,
    payload: action
  };
};

export const is_loading = (action) => {
  return {
    type: IS_LOADING,
    payload: action
  };
};

export const is_going = (action) => {
  return {
    type: IS_GOING,
    payload: action
  };
};

export const item_sort = (action) => {
  return {
    type: ITEM_SORT,
    payload: action
  };
};

export const user_login = (action) => {
  return {
    type: USER_LOGIN,
    payload: action
  };
};

export const user_logout = () => {
  localStorage.removeItem('NightToken');
  return {
    type: USER_LOGOUT,
  }
}

export const user_register = (action) => {
  return {
    type: USER_REGISTER,
    payload: action
  };
};

export const user_error = (action) => {
  return {
    type: USER_ERROR,
    payload: action
  };
};