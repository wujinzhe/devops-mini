<template>
  <div class="underline-cell">
    <div class="activity-cell">
      <img class="activity-cover" :src="imgUrl" alt="">
      <div class="activity-content">
        <h2>{{ title }}</h2>
        <p class="activity-content__desc">{{ desc }}</p>
        <div class="activity-content__info" style="margin-top: 11rpx;">
          <div class="activity-content__date">
            <i class="iconfont">&#xe614;</i>
            <span>{{ date }}</span>
          </div>

          <div class="activity-content__integral">
            <i class="iconfont">&#xe65e;</i>
            <span>{{ integral }}</span>
          </div>
          
          <div class="activity-content__person">
            <i class="iconfont">&#xe749;</i>
            <span>{{ person }}</span>
          </div>
        </div>
        <div class="activity-content__tag" v-if="state === 0">未开始</div>
        <div class="activity-content__tag go" v-if="state === 1">进行中</div>
        <div class="activity-content__tag end" v-if="state === 2">已结束</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'UnderlineCell',
    props: {
      imgUrl: {
        type: String,
        default: 'http://pic.qiantucdn.com/58pic/13/17/96/89R58PICwZJ_1024.jpg'
      },
      title: {
        type: String,
        default: '我是标题'
      },
      desc: {
        type: String,
        default: '我是描述'
      },
      person: {
        type: Number,
        default: 0
      },
      integral: {
        type: Number,
        default: 0
      },
      date: {
        type: String,
        default: '2018.11.11'
      },
      state: {
        type: Number,
        default: 0 // 0 未开始 1 进行中 2已结束
      }
    }
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

    &__desc {
      font-size: 26rpx;
      color: #999999;
      height: 74rpx;
    }

    &__info {
      display: flex;
      color: #999999;
      font-size: 24rpx;
      justify-content: space-between;
    }

    &__integral span, &__person span, &__date span {
      margin-left: 10rpx;
    }

    &__tag {
      position: absolute;
      top: 0rpx;
      right: 0rpx;
      padding: 4rpx 10rpx;
      background-color: #ffaa2b;
      font-size: 14rpx;
      color: white;
      border-radius: 5rpx;
    }

    &__tag.go {
      background-color: #4fce4f;
    }

     &__tag.end {
      background-color: #cccccc;
    }
  }
</style>