<template>
  <div>
    <div class="userinfo" @click="bindViewTap">
      <img class="userinfo__avatar" :src="avatarUrl">
      <p class="userinfo__nickname">
        {{ nickName }}
      </p>
    </div>
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
  page {
    background-color: #f5f5f5;
  }
  .userinfo {
    background-color: #71d5f3;

    &__avatar {
      width: 100rpx;
      height: 100rpx;
      margin: auto;
      display: block;
      border-radius: 50rpx;
      border: 1px solid #999999;
    }

    &__nickname {
      font-size: 30rpx;
      color: #999999;
      text-align: center;
    }
  }
</style>