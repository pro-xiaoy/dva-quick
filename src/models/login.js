import { routerRedux, router } from 'dva/router';
import { login } from '@/services/login'
export default {
  namespace: 'login',

  state: {
    loggedIn: false,
    message: '',
    user: {}
  },

  effects: {
    *login({ payload }, { call, put }) {
      console.log('payload+++', payload)
      const response = yield call(login, payload)
      const {userInfo, token, state} = response.data
      console.log('res++++', response )
      sessionStorage.setItem('userInfo', JSON.stringify(userInfo));
      /* 登录成功保存一下token */
      localStorage.setItem('token', token);
      yield put(routerRedux.replace("/home"));
      yield put(routerRedux.replace("/home"));
      console.log('111++++')
    },
    *logout(_, { put }) { }
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  }
};
