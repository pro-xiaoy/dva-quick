// import { routerRedux } from 'dva';
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
      console.log('res++++', response )
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
