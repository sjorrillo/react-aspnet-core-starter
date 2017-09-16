import { Action } from './../../helpers/action';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth/LOGIN_FAIL';

interface AuthActions extends Action {

}

const initialstate  = {

};

export default (state = initialstate, action: AuthActions) => {
  console.log('result...');
  console.log(action);
  switch (action.type) {
    case LOGIN:
      return state;
    case LOGIN_SUCCESS:
      return state;
    case LOGIN_FAIL:
      return state;
    default:
      return state;
  }
};

export const login = (user: string, password: string) => ({
  types: [LOGIN, LOGIN_SUCCESS, LOGIN_FAIL],
  promise: client => client.post('/account/login', { data: { user, password } }),
});
