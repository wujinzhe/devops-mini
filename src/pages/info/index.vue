<template>
  <div class="info">
    <h2>基本信息</h2>
    <van-cell-group>
      <van-field
        v-model="name"
        clearable
        label="姓名"
        placeholder="请输入用户名"
        readonly
      />

      <van-field
        v-model="nick"
        label="昵称"
        placeholder="昵称"
        border
      />
      <van-field
        v-model="birthday"
        label="出生年月"
        placeholder="出生年月"
        border
      />
      <van-field
        v-model="phone"
        label="联系电话"
        placeholder="联系电话"
        border
      />
      <van-field
        v-model="sex"
        label="性别"
        placeholder="性别"
        border
      />
      <van-field
        v-model="city"
        label="所在城市"
        placeholder="所在城市"
        border
      />
    </van-cell-group>

    <h2>职业信息</h2>
    <van-cell-group>
      <van-field
        v-model="job"
        label="职业"
        placeholder="职业"
        :border="false"
      />
    </van-cell-group>

    <div class="btn-group">
      <van-button type="primary" size="large">编辑</van-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Info',
    data () {
      return {
        name: '奥巴马打地鼠',
        nick: '奥巴马打地鼠',
        sex: '男',
        city: '深圳',
        job: '工程师',
        phone: '12312341234',
        birthday: '1993-10-01'
      }
    },
    onShow: function () {
      // 页面显示
      wx.setNavigationBarTitle({
        title: '个人资料'
      })
      console.log('我的 onShow 页面显示')
    },
    methods: {
    }
  }
</script>

<style lang="less" scope>
  page {
    background-color: #f5f5f5;
  }

  .btn-group {
    position: absolute;
    width: 100%;
    bottom: 0;
  }

  h2 {
    color: #999999;
    font-weight: 400;
    font-size: 28rpx;
    padding: 10rpx;
    padding-top: 20rpx;
  }
</style>
