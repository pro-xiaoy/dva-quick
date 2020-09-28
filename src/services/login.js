// client/login

import request from '@/utils/request'
import axios from 'axios'
export async function login(payload) {
  // return request({
  //   method: 'post',
  //   url: `/api/client/login`,
  //   data: payload,
  // })
  axios.post(`/api/client/login`,payload)
}