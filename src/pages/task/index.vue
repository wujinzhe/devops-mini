<template>
  <div class="">
   <van-tabs @change="tabChange" color="#71d5f3" :animated="true">
    <van-tab title="未认领">
      <scroll-view
        class="scroll-view"
        scroll-y
        enable-back-to-top
        @scrolltoupper="noUpper" 
        @scrolltolower="noLower"
        @scroll="noScroll"
        :upper-threshold="-50"
        :lower-threshold="-50">
        <task-cell v-for=""></task-cell>
      </scroll-view>
    </van-tab>
    <van-tab title="进行中">
      <scroll-view
        class="scroll-view"
        scroll-y
        enable-back-to-top
        @scrolltoupper="doingUpper" 
        @scrolltolower="doingLower"
        @scroll="doingScroll"
        :upper-threshold="-50"
        :lower-threshold="-50">
        <task-cell :status="1"></task-cell>
        <task-cell :status="1"></task-cell>
        <task-cell :status="1"></task-cell>
        <task-cell :status="1"></task-cell>
        <task-cell :status="1"></task-cell>
        <task-cell :status="1"></task-cell>
        <task-cell :status="1"></task-cell>
        <task-cell :status="1"></task-cell>
        <task-cell :status="1"></task-cell>
        <task-cell :status="1"></task-cell>
        <task-cell :status="1"></task-cell>
        <task-cell :status="1"></task-cell>
      </scroll-view>
    </van-tab>
    <van-tab title="已完成">
      <scroll-view
        class="scroll-view"
        scroll-y
        enable-back-to-top
        @scrolltoupper="finishUpper" 
        @scrolltolower="finishLower"
        @scroll="finishScroll"
        :upper-threshold="-50"
        :lower-threshold="-50">
        <task-cell :status="2"></task-cell>
        <task-cell :status="2"></task-cell>
        <task-cell :status="2"></task-cell>
        <task-cell :status="2"></task-cell>
        <task-cell :status="2"></task-cell>
        <task-cell :status="2"></task-cell>
        <task-cell :status="2"></task-cell>
        <task-cell :status="2"></task-cell>
        <task-cell :status="2"></task-cell>
        <task-cell :status="2"></task-cell>
        <task-cell :status="2"></task-cell>
        <task-cell :status="2"></task-cell>
       </scroll-view>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
  import taskCell from '@/components/task-cell'

  export default {
    name: 'Task',
    components: {
      taskCell
    },
    data () {
      return {
        a: 0,
        pageSize: 10,
        noCurrentPage: 1, // 未领取列表的当前页数
        noTaskList: [],
        doingCurrentPage: 1, // 进行中列表的当前页数
        doingTaskList: [],
        finishCurrentPage: 1, // 已完成列表的当前页数
        finishTaskList: []
      }
    },
    watch: {
      activeTabIndex (val) {
        console.log(val)
      }
    },
    onShow: function () {
      wx.setNavigationBarTitle({
        title: '我的任务'
      })
    },
    methods: {
      tabChange (data) {
        console.log(data.target.index)
        switch (data.target.index) {
          case 0:
          case 1:
          case 2:
        }
      },
      /** 下拉刷新 */
      underlineUpper () {
        wx.vibrateShort()
        console.log('下拉')
        this.a++
        wx.showToast({
          title: this.a.toString(),
          icon: 'success',
          duration: 2000
        })
      },
      /** 上拉加载 */
      underlineLower () {
      // wx.showToast({
      //   title: '上拉',
      //   icon: 'success',
      //   duration: 2000
      // })
      },
      /** 监听滚动事件 */
      doingScroll (event) {
        console.log(event.target)
        // wx.showToast({
        //   title: JSON.stringify(event),
        //   icon: 'success',
        //   duration: 20000
        // })
      },
      /** 获取用户的任务列表 */
      getTaskList (status, currentPage) {
        const params = {
          status,
          openid: wx.getStorageSync('openid'),
          pageSize: this.pageSize,
          currentPage
        }
        this.$Http.getTaskList(params).then(res => {
          console.log(res)
        })
      }
    }
  }
</script>

<style lang="less" scope>
  .scroll-view {
    height: calc(100vh - 44px);
  }
</style>


