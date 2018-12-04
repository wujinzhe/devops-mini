import request from './index'
const baseUrl = 'https://api.wroadw.com'

export default {
  /** 【基础】获取用户openid */
  getOpenId: data => request.post(`${baseUrl}/base/getOpenId`, data),

  /** 【用户】添加用户信息，并且初始化任务给用户，只有在第一次进入时候生效 */
  addUserBase: data => request.post(`${baseUrl}/user/addUserBase`, data),

  /** 【用户】根据openid获取用户的信息 */
  getUserBaseInfo: data => request.get(`${baseUrl}/user/getUserBaseInfo`, data),

  /** 【任务】获取用户的任务 */
  getTaskList: data => request.get(`${baseUrl}/task/getTaskList`, data)
}
