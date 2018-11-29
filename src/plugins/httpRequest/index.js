/**
 * 封装微信小程序的request方法
 * @param {String} method 请求的方法
 * @param {String} url 请求的地址
 * @param {Object} data 请求的数据
 * @param {Ojbect} config 其他配置
 */
function request (method, url, data, config = {}) {
  return new Promise((resolve, reject) => {
    wx.request({
      method: method.toUpperCase(),
      url,
      data,
      ...config,
      success: (res) => {
        if (res.data.returnCode === 0) {
          resolve(res.data)
        } else {
          reject(res.data.errmsg)
        }
      },
      fail: (err) => {
        reject(err)
      }
    })
  }).catch(err => {
    wx.showToast(err)
    Promise.reject(new Error(err))
  })
}

let httpRequest = {}
let methodList = ['post', 'get', 'delete', 'put', 'HEAD', 'delete']
methodList.forEach(method => {
  httpRequest[method] = (url, data, config = {}) => request(method, url, data, config)
})

export default httpRequest
