import { 
  ITEM_SEARCH,
  ITEM_SORT,
  IS_GOING
} from '../actions/action-types';

const initialState = {
  searchItems: null
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ITEM_SEARCH: 
      return {...state, searchItems: action.payload };
    case ITEM_SORT:
      return {...state, searchItems: action.payload };
    case IS_GOING:
      console.log(action.payload);
      const key = action.payload.key;
      const going = action.payload.going;
      const add = action.payload.add;
      let newState = {...state};
      newState.searchItems[key].going = going;
      return newState;
    default: 
      return state;
  }
}