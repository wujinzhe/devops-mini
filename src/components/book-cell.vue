<template>
  <div class="book-cell-wrap">
    <div class="book-cell">
      <img class="book-cover" :src="imgUrl" alt="">
      <div class="book-content">
        <h2>敏捷开发的艺术</h2>
        <p class="desc">敏捷开发的艺术内容描述或者内容简介啦啦啦啦</p>
        <p>作者: Shore</p>
        <p>出版社: 机械工业出版社</p>
        <p>出版时间: 2009年09月</p>
        <div class="integral">
          <i class="iconfont">&#xe65e;</i>
          <span style="margin-left: 10rpx;">{{ integral }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'BookCell',
    props: {
      imgUrl: {
        type: String,
        default: 'http://img3.jarhu.com/thirdimg/bf08257/7111268041445870.gif'
      },
      integral: {
        type: Number,
        default: 200
      }
    }
  }
</script>

<style lang="less" scoped>
  .book-cell-wrap {
    padding-left: 30rpx;
    background-color: #ffffff;
  }

  .book-cover {
    width: 150rpx;
    height: 200rpx;
    flex-shrink: 0;
  }

  .book-cell {
    padding: 20rpx 30rpx 20rpx 0rpx;
    display: flex;
    border-bottom: 1px solid #eeeeee;
  }

  .book-content {
    padding-left: 20rpx;
    flex-grow: 1;
    position: relative;

    h2 {
      font-size: 30rpx;
      line-height: 42rpx;
      font-weight: 400;
      color: #282828;
    }

    .desc {
      height: 38rpx;
    }

    p {
      font-size: 25rpx;
      line-height: 38rpx;
      color: #333333;
    }

    .integral {
      color: #999999;
      position: absolute;
      font-size: 20rpx;
      bottom: 0;
      right: 0;
    }
  }
</style>
