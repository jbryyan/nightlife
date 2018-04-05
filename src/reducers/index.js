import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserReducer from './reducer-user';
import ItemsReducer from './reducer-items';

const rootReducer = combineReducers({
  form: formReducer,
  user: UserReducer,
  items: ItemsReducer
});

export default rootReducer;