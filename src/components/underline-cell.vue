<template>
  <div class="underline-cell">
    <div class="activity-cell">
      <img class="activity-cover" src="http://pic.qiantucdn.com/58pic/13/17/96/89R58PICwZJ_1024.jpg" alt="">
      <div class="activity-content">
        <h2>我是活动的标题标题标题啦啦啦</h2>
        <p class="activity-content__des">我是描述描述描述描述描述描述描述描述描述描述描述描述描述描述描述</p>
        <div style="margin-top: 11rpx;">
          <div class="activity-content__integral">
            <i class="iconfont">&#xe65e;</i>
            <span>120</span>
          </div>
          <div class="activity-content__person">
            <i class="iconfont">&#xe749;</i>
            <span>120</span>
          </div>
        </div>
        <div class="activity-content__tag">未开始</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UnderlineCell'
  }
</script>

<style lang="less" scoped>
  .underline-cell {
    background-color: #ffffff;
    padding-left: 30rpx;
  }

  .activity-cell {
    display: flex;
    border-bottom: 1px solid #eee;
    padding: 20rpx 30rpx 20rpx 0rpx;
  }

  .activity-cover {
    width: 220rpx;
    height: 160rpx;
    flex-shrink: 0;
  }

  .activity-content {
    flex-grow: 1;
    padding-left: 20rpx;
    box-sizing: border-box;
    position: relative;

    h2 {
      font-size: 30rpx;
      font-weight: 700;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      max-width: 350rpx;
    }

    &__des {
      font-size: 26rpx;
      color: #999999;
    }

    &__integral {
      color: #999999;
      font-size: 24rpx;
      float: left;
    }

    &__person {
      color: #999999;
      font-size: 24rpx;
      float: right;
    }

    &__integral span, &__person span {
      margin-left: 10rpx;
    }

    &__tag {
      position: absolute;
      top: 0rpx;
      right: 0rpx;
      padding: 4rpx 10rpx;
      background-color: #ff9800;
      font-size: 14rpx;
      color: white;
      border-radius: 5rpx;
    }
  }
</style>