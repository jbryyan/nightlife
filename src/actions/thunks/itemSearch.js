import Request from 'superagent';
import { item_search, is_loading } from '../index';
import { ROOT_URL } from '../action-types';

const itemSearch = (item, option) => dispatch => {
  dispatch(is_loading(true));
  console.log('In thunk');
  Request.get(`${ROOT_URL}/api/yelp`)
  .set({ 'Authorization': localStorage.getItem('NightToken') })
  .query({ search: item })
  .query({ sort: option })
  .then(res => {
    dispatch(is_loading(false));
    if(res.body.success){
      console.log(res.body);
      let items = res.body.data.sort((a, b) => {
        return b.rating - a.rating;
      });
      console.log(items);
      dispatch(item_search(items));
    }
  })
  .catch(err => {
    console.log(err);
  })
  
}

export default itemSearch;