
import request from '@/utils/request';
export async function getPageHomeIndex(payload) {
  return request({
    method: 'post',
    url: `/api/pageHomeIndex/client/getPageHomeIndex`,
    data: payload,
  })
}
