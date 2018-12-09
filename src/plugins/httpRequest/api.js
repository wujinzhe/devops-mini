import request from './index'
const baseUrl = 'https://api.wroadw.com'

export default {
  /** 【基础】获取用户openid */
  getOpenId: data => request.post(`${baseUrl}/base/getOpenId`, data),

  /** 【用户】添加用户信息，并且初始化任务给用户，只有在第一次进入时候生效 */
  addUserBase: data => request.post(`${baseUrl}/user/addUserBase`, data),

  /** 【用户】根据openid获取用户的微信的信息 */
  getUserBaseInfo: data => request.get(`${baseUrl}/user/getUserBaseInfo`, data),

  /** 【用户】根据openid获取用户的信息 */
  getUserInfo: data => request.get(`${baseUrl}/user/getUserInfo`, data),

  /** 【用户】更新用户的信息 */
  updateUserInfo: data => request.post(`${baseUrl}/user/updateUserInfo`, data),

  /** 【用户】获取用户dev信息 */
  getUserDevopsInfo: data => request.get(`${baseUrl}/user/getUserDevopsInfo`, data),

  /** 【任务】获取用户的任务 */
  getTaskList: data => request.get(`${baseUrl}/task/getTaskList`, data),

  /** 【任务】认领 */
  claimTask: data => request.post(`${baseUrl}/task/claimTask`, data),

  /** 【任务】领取积分 */
  receiveIntegral: data => request.post(`${baseUrl}/task/receiveIntegral`, data),

  /** 【积分】添加积分明细信息 */
  addIntegral: data => request.post(`${baseUrl}/integral/addIntegral`, data),

  /** 【积分】获取积分明细列表 */
  getIntegralList: data => request.get(`${baseUrl}/integral/getIntegralList`, data)
}
