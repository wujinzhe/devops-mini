import request from './index'
const baseUrl = 'https://api.wroadw.com/'

export default {
  /** 获取用户openid */
  getOpenId: data => request.post(`${baseUrl}base/getOpenId`, data)
}
