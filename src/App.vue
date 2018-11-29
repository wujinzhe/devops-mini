<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
    this.getUserInfo() // 获取头像等信息

    this.getOpenId()
  },
  methods: {
    /** 获取用户信息（头像，昵称等） */
    getUserInfo () {
      if (!wx.getStorageSync('userInfo')) {
        wx.getUserInfo({
          success: (res) => {
            wx.setStorageSync('userInfo', res.userInfo)
          }
        })
      }
    },
    /** 获取用户openid */
    getOpenId () {
      let vm = this
      if (!wx.getStorageSync('openid')) {
        wx.login({
          success (res) {
            if (res.code) {
              vm.$Http.getOpenId({code: res.code}).then(res => {
                wx.setStorageSync('sessionKey', res.data.session_key)
                wx.setStorageSync('openid', res.data.openid)
              }).catch(err => {
                console.log(err)
                wx.showToast({
                  title: '获取openId失败',
                  icon: 'error'
                })
              })
            } else {
              wx.showToast({
                title: '登录失败' + res.errMsg,
                icon: 'error'
              })
            }
          },
          fail (err) {
            console.log(err)
            wx.showToast({
              title: '登录失败' + err,
              icon: 'error'
            })
          }
        })
      }
    }
  }
}
</script>

<style lang="less">
  @import './theme/common.less';

  .container {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 200rpx 0;
    box-sizing: border-box;
  }
  /* this rule will be remove */
  * {
    transition: width 2s;
    -moz-transition: width 2s;
    -webkit-transition: width 2s;
    -o-transition: width 2s;
  }

  page {
    background-color: #f5f5f5;
    height: 100%;
    color: #282828;
  }
</style>
