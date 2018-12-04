<template>
  <div class="my">
    <div class="my__info">
      <div class="my__info--blur" :style="infoStyle"></div>
      <div class="my__info__content">
        <img :src="userInfo.avatarUrl" class="my__info__avatar">
        <div>
          <p>昵称: {{userInfo.nickName}}</p>
          <p>等级: ⭐️️️⭐️️️️⭐️️️️⭐️️️️</p>
        </div>
        <div class="my__info__integral">
          <div class="integral__content" @click="toIntegralDetails">
            <p>我的积分</p>
            <p class="integral__content__score">10000</p>
          </div>
        </div>
      </div>
    </div>
    <div class="my__cell-group">
      <van-cell-group border>
        <!-- <van-cell title="我的贡献" is-link @click="toContribution"/> -->
        <van-cell title="我的任务" is-link @click="toTask"/>
        <van-cell title="个人资料" is-link @click="toInfo" :border="false"/>
      </van-cell-group>
    </div>
   
  </div>
</template>

<script>
  export default {
    name: 'my',
    data () {
      return {
        userInfo: {}
      }
    },
    computed: {
      infoStyle () {
        return `background: url(${this.userInfo.avatarUrl}) no-repeat center center;background-size: cover;`
      }
    },
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
        title: '个人中心'
      })
      this.userInfo = wx.getStorageSync('userInfo')
      console.log(this.userInfo)
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
          url: '/pages/info/main'
        })
      },
      /** 跳转到我的任务 */
      toTask () {
        wx.navigateTo({
          url: '/pages/task/main'
        })
      },
      /** 跳转到个人积分 */
      toIntegralDetails () {
        wx.navigateTo({
          url: '/pages/integral-details/main' // 跳转到个人积分
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
    padding-top: 2rpx;

    &__info {
      height: 300rpx;
      position: relative;

      &__avatar {
        width: 160rpx;
        height: 160rpx;
        border-radius: 80rpx;
        margin: 0 30rpx;
      }

      &--blur {
        width: 100%;
        height: 100%;
        filter: blur(50rpx);
        position: absolute;
        top: 0;
        left: 0;
      }

      &__content {
        position: relative;
        z-index: 10;
        color: #ffffff;
        display: flex;
        font-size: 30rpx;
        height: 100%;
        align-items: center;
      }

      &__integral {
        flex-grow: 1;
        padding: 40rpx 0 40rpx 40rpx;
        box-sizing: border-box;
      }

      .integral__content {
        padding: 30rpx;
        height: 100%;
        border-left: 1px solid rgba(255, 255, 255, 0.414);
        box-sizing: border-box;
        text-align: center;
      }

      .integral__content__score {
        font-size: 50rpx;
        color: #f7dd86;
        font-weight: 700;
      }
    }

    &__info::after {
      content: '';
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.173);
      position: absolute;
      top: 0;
      left: 0;
    }



    &__cell-group {
      margin-top: 20rpx;
    }


  }
</style>
