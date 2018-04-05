import Request from 'superagent';
import { ROOT_URL } from '../action-types';
import { user_login, user_logout } from '../index';

const userAuth = () => (dispatch) => {
  if(!localStorage.getItem('NightToken')) return;

  Request.get(`${ROOT_URL}/api/auth`)
  .set({ Authorization: localStorage.getItem('NightToken') })
  .then(res => {
    if(res.status === 200){
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
    console.log(err);
    dispatch(user_logout());
  })
}

export default userAuth;