import { Action } from './../../helpers/action';

const LOGIN = 'auth/LOGIN';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAIL = 'auth/LOGIN_FAIL';

interface AuthActions extends Action {

}

const initialstate  = {

};

export default (state = initialstate, action: AuthActions) => {
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

// request using the requestFactory to control all the flow of the request.
export const login5 = (user: string, password: string) => async (makeRequest, dispatch, getState) => {
  dispatch({ type: LOGIN });

  const { result, error } = await makeRequest({
    method: 'POST',
    url: `/account/login`,
    data: { user, password },
  });

  const authStore = getState().auth;
  console.log({
    state: getState(),
    auth: authStore,
    result,
    error,
  });

  if (error) {
    dispatch({ type: LOGIN_FAIL, error });
    return;
  }

  dispatch({ type: LOGIN_SUCCESS, result });
};
