<template>
  <div style="padding: 0 80rpx;">
    <div class="header">
      <div class="header-img">
        logo
      </div>
      <!-- <img src="" alt="" class="head-img"> -->
      <h1>我是标题</h1>
    </div>

    <div class="content">
      <h2>登录后开发者将获得以下权限</h2>
      <p><span style="font-size: 50rpx; vertical-align: middle;">·</span> 获得你的公开信息（昵称、头像等）</p>
    </div>

    <button type="primary" open-type="getUserInfo"@getuserinfo="getUserInfo">确认登录</button>
  </div>
</template>

<script>

export default {
  methods: {
    /** 获取用户信息（头像，昵称等） */
    getUserInfo () {
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
              wx.switchTab({
                url: '/pages/index/main'
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

<style lang="less" scope>
  page {
    background-color: #ffffff;
  }

  .header {
    text-align: center;
    padding-top: 120rpx;
    font-size: 40rpx;

    &-img {
      width: 150rpx;
      height: 150rpx;
      border: 1px solid #cccccc;
      margin: auto;
    }

    h1 {
      margin-top: 15rpx;
    }
  }

  .content {
    border-top: 1px solid #eeeeee;
    margin-top: 50rpx;
    margin-bottom: 80rpx;
    font-size: 30rpx;

    h2 {
      margin-top: 40rpx;
    }

    p {
      color: #999999;
      margin-top: 10rpx;
    }
  }


</style>
