import Request from 'superagent';
import { ROOT_URL } from '../action-types';
import { is_loading, user_login, user_error } from '../index';

const userRegister = (username, pwd) => (dispatch) => {
  const user = { username, pwd };
  dispatch(is_loading(true));
  Request.post(`${ROOT_URL}/api/register`)
  .send(user)
  .then(res => {
    dispatch(is_loading(false));
    if(res.status === 200){
      localStorage.setItem('NightToken', res.header.authorization);
      dispatch(
        user_login({ 
          username: res.body.username, 
          loggedIn: true, 
          loginPage: true,
          redirect: '/search',
          error: null
        })
      );
    }
  })
  .catch(err => {
    dispatch(is_loading(false));
    dispatch(user_error(err.response.body.message));
  })
}

export default userRegister;