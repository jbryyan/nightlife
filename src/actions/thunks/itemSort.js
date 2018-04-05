import { item_sort } from '../index';

const itemSort = (option) => (dispatch, getState) => {
  let { searchItems } = getState().items;
  
  if(!searchItems){
    return;
  }
  
  let items = [...searchItems];
  
  items.sort((a, b) => {
    switch (option) {
      case 'rating': 
        return b.rating - a.rating;
      case 'review':
        return b.review_count - a.review_count;
      case 'distance': 
        return a.distance - b.distance;
    }
  });
  dispatch(item_sort(items));
}

export default itemSort;