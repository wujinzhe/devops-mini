<template>
  <div>
    <van-tabs @change="tabChange" color="#71d5f3">
    <van-tab title="线下活动">
      <scroll-view
        class="scroll-view"
        scroll-y
        enable-back-to-top
        @scrolltoupper="underlineUpper"
        @scrolltolower="underlineLower"
        :upper-threshold="-50"
        :lower-threshold="-50">
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
        <underline-cell></underline-cell>
      </scroll-view>
    </van-tab>
    <van-tab title="精品课程">
      <scroll-view
        class="scroll-view"
        scroll-y
        enable-back-to-top
        @scrolltoupper="upper"
        @scrolltolower="lower"
        :upper-threshold="-50"
        :lower-threshold="-50">
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
        <div class="scroll-view-item">1</div>
      </scroll-view>
    </van-tab>
    <van-tab title="干货分享">内容 3</van-tab>
    <van-tab title="推荐书籍">内容 4</van-tab>
  </van-tabs>
  </div>
</template>

<script>
import underlineCell from '@/components/underline-cell'

export default {
  name: 'Home',
  components: {
    underlineCell
  },
  data () {
    return {
    }
  },

  methods: {
    tabChange (tab) {
      console.log(tab)
    },
    /** 【线下活动】下拉刷新 */
    underlineUpper () {
      wx.vibrateShort()
      wx.showToast({
        title: '下拉',
        icon: 'success',
        duration: 2000
      })
    },
    /** 【线下活动】上拉加载 */
    underlineLower () {
      wx.showToast({
        title: '上拉',
        icon: 'success',
        duration: 2000
      })
    },
    upper () {
      wx.vibrateShort()
      wx.showToast({
        title: '下拉',
        icon: 'success',
        duration: 2000
      })
    },
    onPullDownRefresh: function () {
      wx.vibrateShort()
      // wx.showNavigationBarLoading() // 在标题栏中显示加载

      // 模拟加载
      setTimeout(function () {
      // complete
        // wx.hideNavigationBarLoading() // 完成停止加载
        wx.stopPullDownRefresh() // 停止下拉刷新
      }, 1500)
    },
    lower () {
      wx.showToast({
        title: '上拉',
        icon: 'success',
        duration: 2000
      })
    }
  },

  created () {
  }
}
</script>

<style lang="less" scoped>
  .scroll-view-item {
    height: 100rpx;
    background-color: red;
    margin-top: 20rpx;
  }
  .scroll-view {
    height: calc(100vh - 44px);
  }
</style>
<style lang="less">
  .van-tabs__wrap {
    background-color: #ffffff;
  }
</style>
