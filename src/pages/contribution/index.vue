<template>
  <div>
    我的贡献
    
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo-avatar" v-if="userInfo.avatarUrl" :src="userInfo.avatarUrl" background-size="cover" />
      <div class="userinfo-nickname">
        <card :text="userInfo.nickName"></card>
      </div>
    </div>
    <button open-type="getUserInfo" lang="zh_CN" @click="onGotUserInfo">获取用户信息</button>
  </div>
</template>

<script>
  export default {
    name: '',
    data () {
      return {
        nickName: '',
        avatarUrl: ''
      }
    },
    onLoad () {
      wx.getUserInfo({
        success: (res) => {
          console.log(res)

          this.nickName = res.userInfo.nickName
          this.avatarUrl = res.userInfo.avatarUrl
          // that.setData({
          //   [avatarUrl]: res.userInfo.avatarUrl,
          //   [nickName]: res.userInfo.nickName
          // })
        }
      })
    },
    onShow () {
      wx.setNavigationBarTitle({
        title: '我的贡献'
      })
    },
    methods: {
      onGotUserInfo () {
        wx.getUserInfo({
          success: (res) => {
            console.log(res)

            this.nickName = res.userInfo.nickName
            this.avatarUrl = res.userInfo.avatarUrl
          // that.setData({
          //   [avatarUrl]: res.userInfo.avatarUrl,
          //   [nickName]: res.userInfo.nickName
          // })
          }
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  page {
    background-color: #f5f5f5;
  }
</style>