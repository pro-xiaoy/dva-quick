
import request from '@/utils/request';

export async function login(payload) {
  return request({
    method: 'post',
    url: `/api/client/login`,
    data: payload,
  })
}
