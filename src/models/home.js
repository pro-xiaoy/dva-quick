import { getPageHomeIndex } from '@/services/home'
export default {
  namespace: 'home',

  state: {
    loggedIn: false,
    message: '',
    user: {}
  },

  effects: {
    *getPageHomeIndex({ payload }, { call, put }) {
      const response = yield call(getPageHomeIndex, payload)
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
