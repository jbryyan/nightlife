import Request from 'superagent';
import { ROOT_URL } from '../action-types';
import { is_loading, is_going, user_login, user_error, add_activity } from '../index';

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
      console.log(res.body);
      dispatch(is_going({ going: true, add: 1, key: key }));
      dispatch(add_activity({ activities: res.body.activities }));
    }
  })
  .catch(err => {
    console.log(err);
    dispatch(is_loading(false));
  });
  
}

export default userRegister;