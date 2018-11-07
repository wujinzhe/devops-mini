<template>
  <div class="article-cell-wrap">
    <div class="article-cell">
      <img class="article-cover" :src="imgUrl" alt="">
      <div class="article-content">
        <h2>ESMAScript 带来的重大的特性带来的重大的特性带来的重大的特性</h2>
        <div class="zan-wrap">
          <div class="zan">
            <i class="iconfont">&#xe64f;</i>
            <span style="margin-left: 10rpx;">10000</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'articleCell',
    props: {
      imgUrl: {
        type: String,
        default: 'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2447683882,2644927629&fm=26&gp=0.jpg'
      }
    }
  }
</script>

<style lang="less" scoped>
  .article-cell-wrap {
    padding-left: 30rpx;
    background-color: #ffffff;
  }

  .article-cover {
    width: 150rpx;
    height: 100rpx;
    flex-shrink: 0;
  }

  .article-cell {
    padding: 20rpx 30rpx 20rpx 0rpx;
    display: flex;
    border-bottom: 1px solid #eeeeee;
  }

  .article-content {
    padding-left: 20rpx;
    flex-grow: 1;

    h2 {
      font-size: 27rpx;
      line-height: 30rpx;
      font-weight: 400;
      height: 60rpx;
    }

    .zan-wrap {
      text-align: right;
    }
    .zan {
      display: inline-block;
      margin-top: 10rpx;
      color: #999999;
      font-size: 20rpx;
      border: 1px solid #eeeeee;
      border-radius: 5rpx;

      i {
        padding: 0 5rpx;
        border-right: 1px solid #eeeeee;
      }

      span {
        padding: 0 5rpx;
        display: inline-block;
        margin: 0;
      }
    }
  }
</style>
