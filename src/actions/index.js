import { 
  ACTIVE_SIDEBAR
} from './action-types';

export const active_sidebar = (action) => {
  return {
    type: ACTIVE_SIDEBAR,
    payload: action
  };
};