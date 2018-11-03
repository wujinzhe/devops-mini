<template>
  <div class="">
    <van-cell
      v-for="(item, key) in detailList"
      :title="item.title"
      :label="item.time"
      :key="item.key"
      :value="item.value" />
  </div>
</template>

<script>
  export default {
    name: 'IngegralDetails',
    data () {
      return {
        detailList: [
          {
            title: '分享干货',
            value: '+1000',
            time: '2018-01-10'
          },
          {
            title: '完善个人资料',
            value: '+10',
            time: '2018-02-20'
          },
          {
            title: '购买课程',
            value: '-3000',
            time: '2018-10-10'
          },
          {
            title: '线下活动',
            value: '-2000',
            time: '2018-05-10'
          },
          {
            title: '分享干货',
            value: '+1000',
            time: '2018-01-10'
          },
          {
            title: '完善个人资料',
            value: '+10',
            time: '2018-02-20'
          },
          {
            title: '购买课程',
            value: '-3000',
            time: '2018-10-10'
          },
          {
            title: '线下活动',
            value: '-2000',
            time: '2018-05-10'
          },
          {
            title: '分享干货',
            value: '+1000',
            time: '2018-01-10'
          },
          {
            title: '完善个人资料',
            value: '+10',
            time: '2018-02-20'
          },
          {
            title: '购买课程',
            value: '-3000',
            time: '2018-10-10'
          },
          {
            title: '线下活动',
            value: '-2000',
            time: '2018-05-10'
          },
          {
            title: '分享干货',
            value: '+1000',
            time: '2018-01-10'
          },
          {
            title: '完善个人资料',
            value: '+10',
            time: '2018-02-20'
          },
          {
            title: '购买课程',
            value: '-3000',
            time: '2018-10-10'
          },
          {
            title: '线下活动',
            value: '-2000',
            time: '2018-05-10'
          },
          {
            title: '分享干货',
            value: '+1000',
            time: '2018-01-10'
          },
          {
            title: '完善个人资料',
            value: '+10',
            time: '2018-02-20'
          },
          {
            title: '购买课程',
            value: '-3000',
            time: '2018-10-10'
          },
          {
            title: '线下活动',
            value: '-2000',
            time: '2018-05-10'
          }
        ]
      }
    },
    computed: {
      // cellStyle: {
      //   color: ''
      // }
    },
    onShow: function () {
      wx.setNavigationBarTitle({
        title: '积分明细'
      })
    },
    methods: {
    }
  }
</script>

<style lang="less" scope>
</style>
