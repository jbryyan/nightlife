import Request from 'superagent';
import { ROOT_URL } from '../action-types';
import { is_loading, is_going, user_login, user_error } from '../index';

const userRegister = (item, key) => (dispatch) => {
  console.log('In rsvp thunk', item);
  dispatch(is_loading(true));
  Request.put(`${ROOT_URL}/api/rsvp`)
  .set({ Authorization: localStorage.getItem('NightToken') })  
  .send(item)
  .then(res => {
    dispatch(is_loading(false));
    if(res.status === 200){
      console.log('Success');
      dispatch(is_going({ going: true, add: 1, key: key }));
    }
  })
  .catch(err => {
    dispatch(is_loading(false));
    console.log(err);
  });
  
}

export default userRegister;