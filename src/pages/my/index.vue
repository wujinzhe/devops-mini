<template>
  <div class="my">
    <div class="my__cell-group">
      <van-cell-group border>
        <van-cell title="我的贡献" is-link @click="toContribution"/>
        <van-cell title="我的项目" is-link />
        <van-cell title="个人信息" is-link @click="toInfo" :border="false"/>
      </van-cell-group>
    </div>
    <div class="my__cell-group">
      <van-cell-group>
        <van-cell title="其他" is-link />
        <van-cell title="其他" is-link :border="false"/>
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
    },
    methods: {
      /** 跳转我的贡献 */
      toContribution () {
        console.log('111')
        wx.navigateTo({
          url: '/pages/contribution/main' // 实际路径要写全
        })
      },
      /** 跳转个人信息 */
      toInfo () {
        wx.navigateTo({
          url: '/pages/info/main' // 跳转个人信息
        })
      }
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
