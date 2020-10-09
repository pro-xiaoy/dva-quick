import { routerRedux } from "dva/router";
import { login } from "@/services/login";
import { message as Toast } from "antd";
export default {
  namespace: "login",

  state: {
    loggedIn: false,
    message: "",
    user: {},
  },

  effects: {
    *login({ payload }, { call, put }) {
      console.log("payload+++", payload);
      const response = yield call(login, payload);
      const { userInfo, token } = response.data;
      console.log("res++++", response);
      sessionStorage.setItem("userInfo", JSON.stringify(userInfo));
      /* 登录成功保存一下token */
      localStorage.setItem("token", token);
      yield put(routerRedux.replace("/home"));
      yield put(routerRedux.replace("/home"));
      Toast.success("登陆成功");
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
