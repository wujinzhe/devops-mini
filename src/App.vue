<script>
export default {
  created () {
    let vm = this
    wx.getSetting({
      success (res) {
        console.log('你的权限', res.authSetting)
        // let auth = JSON.parse(res.authSetting)
        if (!res.authSetting['scope.userInfo']) {
          // 调到授权页面
          wx.redirectTo({ url: '/pages/auth/main' })
        } else {
          const funcList = [vm.getUserInfo(), vm.getOpenId()]
          Promise.all(funcList).then(data => {
            // console.log(data)
            const params = {
              headUrl: data[0].avatarUrl,
              nickName: data[0].nickName,
              openid: data[1]
            }

            /* 暂时没有考虑到用户更换昵称和头像的情况，
            需要获取当前头像与昵称和数据库中的作对比，
            如果有差异则修改数据库 */

            // 如果根据openid查询不到用户，则表示该用户第一次进入，添加该用户信息
            ;(async () => {
              const info = await vm.$Http.getUserBaseInfo({openid: data[1]})
              !info.data && await vm.addUserBase(params)
            })()
          })
        }
      }
    })
  },
  methods: {
    /** 获取用户信息（头像，昵称等） */
    async getUserInfo () {
      return new Promise((resolve, reject) => {
        wx.getUserInfo({
          success: (res) => {
            wx.setStorageSync('userInfo', res.userInfo)
            console.log('获取用户信息', res.userInfo)
            resolve(res.userInfo)
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
