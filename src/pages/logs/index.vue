<template>
  <div>
    <van-button @click="getData">获取数据</van-button>
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
      let vm = this
      wx.request({
        url: 'https://api.wroadw.com/',
        method: 'get',
        success (res) {
          console.log(res)
          vm.data = res.data
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
