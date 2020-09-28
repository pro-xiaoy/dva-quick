import axios from 'axios'
import { message } from 'antd'
import { merge } from 'lodash'

// axiosSetting.js
// request拦截器
axios.interceptors.request.use(
  config => {
    // Do something before request is sent
    const token = localStorage.getItem('token')
    const obj = { ...config }
    if (token) {
      obj.headers.token = token
    } else {
    }
    if (config.method === 'get' && obj.url) {
      obj.url += obj.url.indexOf('?') > 0 ? `&number=${Math.random()}` : `?number=${Math.random()}`
    }
    return obj
  },
  error => {
    // Do something with request error
    Promise.reject(error)
  },
)
// respone拦截器
axios.interceptors.response.use(
  response => {
    const { token } = response.headers
    if (token) {
      localStorage.setItem('token', token)
    }
    if (response.data.code === 666) {
      // message.warning('身份认证过期，跳转到登录页！')
    }
    /**
     * 可以通过response自定义code来标示请求状态，当code返回如下情况为权限有问题，登出并返回到登录页
     * 如通过xmlhttprequest 状态码标识 逻辑可写在下面error中
     */
    return response
  },
  error => {
    if (error === undefined) {
      message.warning('服务请求超时！')
    }
   
    return Promise.reject(error)
  },
)

const request = async _options => {
  // 默认GET方法
  const method = _options.method || 'GET'
  const options = merge(
    { ..._options },
    {
      method,
    },
  )
  return axios(options)
}

/**
* 封装get请求
* @param { String } url 请求路径
* @param { Object } 请求参数
*  params GET请求参数
*/
const get = (url, params, _options) => request({ ..._options, params, url })
/**
 * 封装post请求
 * @param { Object } 请求参数
 *  data POST请求请求参数，对象形式
 */
const post = (url, data, _options) => request({ ..._options, data, url }, 'POST')

export { get, post }
export default request
