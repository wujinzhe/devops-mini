<template>
  <div>
    <button open-type="getUserInfo" lang="zh_CN" @getuserinfo="getUserInfo">获取用户信息</button>
  </div>
</template>

<script>

export default {
  methods: {
    /** 获取用户信息（头像，昵称等） */
    getUserInfo () {
      wx.navigateTo({
        url: '/pages/index/main'
      })
      return new Promise((resolve, reject) => {
        wx.getUserInfo({
          success: (res) => {
            wx.setStorageSync('userInfo', res.userInfo)
            const userInfo = res.userInfo
            console.log('获取用户信息', res.userInfo)
            // resolve(res.userInfo)
            ;(async () => {
              let openid = await this.getOpenId()
              let headUrl = userInfo.avatarUrl
              let nickName = userInfo.nickName

              const info = await this.$Http.getUserBaseInfo({openid: openid})
              !info.data && await this.addUserBase({
                openid,
                headUrl,
                nickName
              })
            })()
          },
          fail: (err) => {
            console.log('获取用户信息失败', err)
            reject(err)
          }
        })
      })
    },
    /** 获取用户openid */
    async getOpenId () {
      let vm = this
      return new Promise((resolve, reject) => {
        if (!wx.getStorageSync('openid')) {
          wx.login({
            success (res) {
              if (res.code) {
                vm.$Http.getOpenId({code: res.code}).then(res => {
                  wx.setStorageSync('sessionKey', res.data.session_key)
                  wx.setStorageSync('openid', res.data.openid)
                  resolve(res.data.openid)
                }).catch(err => {
                  console.log(err)
                  wx.showToast({
                    title: '获取openId失败',
                    icon: 'error'
                  })
                  reject(new Error('err'))
                })
              } else {
                wx.showToast({
                  title: '登录失败' + res.errMsg,
                  icon: 'error'
                })
                reject(new Error('err'))
              }
            },
            fail (err) {
              console.log(err)
              wx.showToast({
                title: '微信login接口调用失败' + err,
                icon: 'error'
              })
              reject(new Error('err'))
            }
          })
        } else {
          resolve(wx.getStorageSync('openid'))
        }
      })
    },
    /** 将用户的基础信息添加到数据库中 */
    addUserBase (data) {
      this.$Http.addUserBase(data).then(res => {
        console.log(res)
      }).catch(err => {
        console.log('将用户的基础信息添加到数据库中', err)
        wx.showToast({
          title: '信息初始化失败',
          icon: 'error'
        })
      })
    }
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
