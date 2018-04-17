import { 
  ITEM_SEARCH,
  ITEM_SORT,
  IS_GOING,
  CANCEL_GOING
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
      let newState = {...state};
      newState.searchItems[action.payload.key].going = action.payload.going;
      newState.searchItems[action.payload.key].totalgoing += action.payload.add;
      return newState;
    case CANCEL_GOING:
      
      
      return state;
    default: 
      return state;
  }
}