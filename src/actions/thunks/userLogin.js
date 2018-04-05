import Request from 'superagent';
import { ROOT_URL } from '../action-types';
import { user_login, user_error, is_loading } from '../index';

const userLogin = (user) => (dispatch) => {
  dispatch(is_loading(true));
  Request.post(`${ROOT_URL}/api/login`)
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
          redirect: '/search'
        })
      );
    }
  })
  .catch(err => {
    dispatch(is_loading(false));
    dispatch(user_error(err.response.body.message));
  })
}

export default userLogin;