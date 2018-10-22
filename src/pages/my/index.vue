<template>
  <div class="my">
    <div class="my__cell-group">
      <van-cell-group border>
        <van-cell title="我的订单" is-link/>
        <van-cell title="优惠券" is-link />
        <van-cell title="影院会员卡" is-link :border="false"/>
      </van-cell-group>
    </div>
    <div class="my__cell-group">
      <van-cell-group>
        <van-cell title="想看的电影" is-link />
        <van-cell title="看过的电影" is-link :border="false"/>
      </van-cell-group>
    </div>
   
  </div>
</template>

<script>
  export default {
    name: 'my',
    created () {
      console.log('我的 created')
    },
    mounted () {
      console.log('我的 mounted')
    },
    onLoad: function (options) {
      console.log('我的 onLoad', options)
    },
    onReady: function () {
      // 页面渲染完成
      console.log('我的 onReady 页面渲染完成')
    },
    onShow: function () {
      // 页面显示
      wx.setNavigationBarTitle({
        title: '我的'
      })
      console.log('我的 onShow 页面显示')
    },
    onHide: function () {
      // 页面隐藏
      console.log('我的 onHide 页面隐藏')
    },
    onUnload: function () {
      // 页面关闭
      console.log('我的 onUnload 页面关闭')
    }
  }
</script>

<style lang="less" scope>
  page {
    background-color: #f5f5f5;
  }
  
  .my {
    &__cell-group {
      margin-top: 20rpx;
    }
  }
</style>
