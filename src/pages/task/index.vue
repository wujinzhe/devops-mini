<template>
  <div class="task" @touchstart="touchstart" @touchend="touchend">
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
        <task-cell></task-cell>
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
        <task-cell 
        v-for="(item, index) in doingTaskList"
        :key="index"
        :status="item.status"
        :title="item.title"
        :desc="item.desc"
        :integral="item.integral"
        :endDate="item.endDate"></task-cell>
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
        pageSize: 6,
        noCurrentPage: 1, // 未领取列表的当前页数
        noTaskList: [],
        doingCurrentPage: 1, // 进行中列表的当前页数
        doingTaskList: [],
        finishCurrentPage: 1, // 已完成列表的当前页数
        finishTaskList: [],
        isDoingUpper: false, // 进行中下拉
        isDoingLower: false // 进行中上拉
      }
    },
    watch: {
      activeTabIndex (val) {
        console.log(val)
      }
    },
    async created () {
      this.doingTaskList = await this.getTaskList(0, 1)
      this.doingCurrentPage = 2
      // this.doingUpper()
      // console.log(this.doingTaskList)
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
      doingUpper () {
        if (!this.isDoingUpper) {
          this.isDoingUpper = true
          wx.vibrateShort()
          ;(async () => {
            this.doingTaskList = await this.getTaskList(0, 1)
            this.doingCurrentPage = 2
          })()
        }
      },
      /** 上拉加载 */
      doingLower () {
        if (!this.isDoingLower) {
          this.isDoingLower = true
          wx.vibrateShort()
          ;(async () => {
            let list = await this.getTaskList(0, this.doingCurrentPage)
            this.doingTaskList.push(...list)
            this.doingCurrentPage++
          })()
        }
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
      async getTaskList (status, currentPage) {
        const params = {
          status,
          openid: wx.getStorageSync('openid'),
          pageSize: this.pageSize,
          currentPage
        }
        return this.$Http.getTaskList(params).then(res => {
          console.log('res', res)
          return res.data
        })
      },
      touchstart () {
        console.log('start')
      },
      touchend () {
        this.isDoingUpper = false
        this.isDoingLower = false
      }
    }
  }
</script>

<style lang="less" scope>
  .scroll-view {
    height: calc(100vh - 44px);
  }
</style>


