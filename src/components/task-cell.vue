<template>
  <div class="task-cell-wrap">
    <div class="task-cell">
      <div class="task-cell__title">
        <h2>任务标题</h2>
        <span>未认领</span>
      </div>
      <div class="task-cell__desc">
       我是很多很多描述是很多很多描述是很多很多描述是很多很多描述是很多很多描述是很多很多描述是很多很多描述是很多很多描述是很多很多描述
      </div>
      <div class="task-cell__footer">
        <div class="task-cell__footer__info">
          <div>
            <i></i>
            <span></span>
          </div>
          <div>
            <i></i>
            <span></span>
          </div>
        </div>
        <div class="task-cell__footer__btn">
          
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'taskCell',
    props: {
      imgUrl: {
        type: String,
        default: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2447683882,2644927629&fm=26&gp=0.jpg'
      }
    }
  }
</script>

<style lang="less" scoped>
  .task-cell-wrap {
    padding-left: 30rpx;
    background-color: #ffffff;
    color: #282828;
  }

  .task-cell {
    padding: 20rpx 0 20rpx 0rpx;
    // border-bottom: 1px solid #eeeeee;
  }

  .task-cell__title {
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #eeeeee;
    padding-bottom: 10rpx;

    h2 {
      font-size: 30rpx;
    }

    span {
      height: 20rpx;
      color: #ffffff;
      padding: 5rpx 5rpx;
      line-height: 1;
      font-size: 15rpx;
      background-color: #ff9800;
      margin-right: 30rpx;
    }
  }

  .task-cell__desc {
    padding-top: 10rpx;
    font-size: 28rpx;
    line-height: 30rpx;
    padding-right: 30rpx;
  }

  .task-cell__footer {

  }
</style>
