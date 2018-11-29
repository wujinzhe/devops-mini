<template>
  <div>
    <van-button @click="getData">获取数据</van-button>
    <van-button type="primary" @click="login">登录</van-button>
    {{ data }}
  </div>
</template>

<script>

export default {
  name: 'Log',
  data () {
    return {
      data: ''
    }
  },
  methods: {
    getData () {
      // let vm = this
      console.log(getApp())
      console.log(this.$global)
    },
    login () {
      let vm = this
      wx.login({
        success (res) {
          if (res.code) {
            console.log(res.code)
            vm.$Http.getOpenId({code: res.code}).then(res => {
              console.log(res)
              wx.showToast({
                title: '成功了',
                icon: ''
              })
            })
          }
        }
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
