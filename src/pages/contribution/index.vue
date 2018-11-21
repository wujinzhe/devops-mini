<template>
  <div>
    <h2>你还没有任何贡献</h2>
    <!-- <div class="userinfo" @click="bindViewTap">
      <img class="userinfo__avatar" :src="avatarUrl">
      <p class="userinfo__nickname">
        {{ nickName }}
      </p>
    </div> -->
    <!-- <button open-type="getUserInfo" lang="zh_CN" @click="onGotUserInfo">获取用户信息</button> -->
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
    created () {
    },
    onShow () {
      wx.setNavigationBarTitle({
        title: '我的贡献'
      })
    },
    methods: {
      onGotUserInfo () {
      }
    }
  }
</script>

<style lang="less" scoped>
  h2 {
    text-align: center;
    color: #999999;
    font-size: 28rpx;
  }

</style>