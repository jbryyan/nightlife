import Request from 'superagent';
import { ROOT_URL } from '../action-types';
import { is_loading, is_going, user_login, user_error, add_activity } from '../index';

const userCancel = (item, key) => (dispatch, getState) => {
  //console.log('In cancel thunk', item);
  dispatch(is_loading(true));
  Request.delete(`${ROOT_URL}/api/rsvpCancel`)
  .set({ Authorization: localStorage.getItem('NightToken') })  
  .send(item)
  .then(res => {
    dispatch(is_loading(false));
    if(res.status === 200){
      if(!isNaN(key)){
        //dispatch(is_going({ going: false, add: -1, key: key, activities: res.body.activities }));
        dispatch(is_going({ going: false, add: -1, key: key }));
        dispatch(add_activity({ activities: res.body.activities }));
      }else{
        const { searchItems } = getState().items;
        if(searchItems) { 
          const searchKey = searchItems.findIndex(bar => bar.name === key);
          if(searchKey != -1){
            dispatch(is_going({ going: false, add: -1, key: searchKey }));
            dispatch(add_activity({ activities: res.body.activities }));
          }else{
            dispatch(add_activity({ activities: res.body.activities }));
          }
        }else{
          dispatch(add_activity({ activities: res.body.activities }));
        }
      }
    }
  })
  .catch(err => {
    dispatch(is_loading(false));
  });
  
}

export default userCancel;