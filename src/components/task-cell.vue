<template>
  <div class="task-cell-wrap">
    <div class="task-cell">
      <div class="task-cell__title">
        <h2>{{ title }}</h2>
        <span>{{ titleTag }}</span>
      </div>
      <div class="task-cell__desc">
       {{ desc }}
      </div>
      <div class="task-cell__footer">
        <div class="task-cell__footer__info">
          <div>
            <i class="iconfont">&#xe65e;</i>
            <span>{{ integral }}</span>
          </div>
          <div>
            <i class="iconfont">&#xe614;</i>
            <span>{{ formate }}</span>
          </div>
        </div>
        <div class="task-cell__footer__btn">
          <a href="" v-if="status === 0" @click="doTask">认领</a>
          <a href="" v-else-if="status === 2 && isReceive === 0" @click="getIntegral">领取积分</a>
          <!-- <a href="" @click="showDetail">详情</a> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'taskCell',
    props: {
      title: {
        type: String,
        default: '新手任务'
      },
      endDate: {
        type: [String, Object],
        default: '-'
      },
      status: {
        type: Number,
        default: 0
      },
      desc: {
        type: String,
        default: '我是新手任务我怕谁'
      },
      integral: {
        type: Number,
        default: 200
      },
      isReceive: {
        type: Number,
        default: 0
      },
      id: {
        type: Number
      }
    },
    computed: {
      titleTag () {
        if (this.status === 0) {
          return '未认领'
        } else if (this.status === 1) {
          return '未完成'
        } else if (this.status === 2) {
          return '已完成'
        }
      },
      formate () {
        // console.log(this.endDate)
        // console.log(typeof this.endDate)
        return this.endDate || '-'
      }
    },
    methods: {
      doTask () {
        // console.log('toTask')
        this.$emit('doTask')
      },
      showDetail () {
        this.$emit('showDetail', {
          title: this.title,
          desc: this.desc
        })
      },
      getIntegral () {
        this.$emit('getIntegral')
      }
    }
  }
</script>

<style lang="less" scoped>
  .task-cell-wrap {
    background-color: #ffffff;
    color: #282828;
  }

  .task-cell {
    padding: 20rpx 0rpx 20rpx 30rpx;
    border-bottom: 1rpx solid #eeeeee;
  }

  .task-cell__title {
    display: flex;
    justify-content: space-between;
    padding-bottom: 10rpx;

    h2 {
      font-size: 30rpx;
    }

    span {
      color: #999999;
      padding: 5rpx 10rpx;
      font-size: 18rpx;
      margin-right: 30rpx;
    }
  }

  .task-cell__desc {
    padding-top: 10rpx;
    font-size: 28rpx;
    line-height: 30rpx;
    padding-right: 30rpx;
    width: 100%;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  .task-cell__footer {
    margin-top: 40rpx;
    display:flex;
    justify-content:space-between;
    padding-right:30rpx;
    align-items: flex-end;

    &__info {
      font-size: 26rpx;
      color: #999999;

      & > div {
        display: inline-block;
        margin-right: 30rpx;
        vertical-align: bottom;
      }

      span {
        margin-left:10rpx;
      }
    }

    &__btn {
      a {
        background-color: #ff9683;
        padding: 7rpx 30rpx;
        color: white;
        font-size: 22rpx;
        display: inline-block;
        margin-left: 20rpx;
        border-radius: 4rpx;
      }
    }
  }
</style>
