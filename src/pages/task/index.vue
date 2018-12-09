<template>
  <div class="task" @touchend="touchend">
   <van-tabs @change="tabChange" color="#71d5f3" :animated="true">
    <!-- <van-tab title="未认领">
      <scroll-view
        id="noScroll"
        class="scroll-view"
        scroll-y
        enable-back-to-top
        @scrolltoupper="noUpper" 
        @scrolltolower="noLower"
        :upper-threshold="-50"
        :lower-threshold="0">
        <div class="loading" v-if="noLoading">
          <img src="/static/image/loading.gif" alt="">
        </div>
        <div class="no-data" v-else-if="!noTaskList">
          暂时没有未认领的任务
        </div> 
        <div v-else id="noTaskList">
          <task-cell 
            v-for="(item, index) in noTaskList"
            :key="index"
            :id="item.id"
            :status="item.status"
            :title="item.title"
            :desc="item.desc"
            :integral="item.integral"
            :endDate="item.endDate"
            @doTask="doTask(item.taskId)">
          </task-cell>
        </div>
      </scroll-view>
    </van-tab> -->
    <van-tab title="未完成">
      <scroll-view
        class="scroll-view"
        scroll-y
        enable-back-to-top
        @scrolltoupper="doingUpper" 
        @scrolltolower="doingLower"
        :upper-threshold="-50"
        :lower-threshold="0">
        <div class="loading" v-if="doingLoading">
          <img src="/static/image/loading.gif" alt="">
        </div>
        <div class="no-data" v-else-if="!doingTaskList">
          暂时没有未完成的任务
        </div> 
        <template v-else>
          <task-cell
            v-for="(item, index) in doingTaskList"
            :key="index"
            :id="item.id"
            :status="item.status"
            :title="item.title"
            :desc="item.desc"
            :integral="item.integral"
            :endDate="item.endDate">
          </task-cell>
        </template>
      </scroll-view>
    </van-tab>
    <van-tab title="已完成">
      <scroll-view
        class="scroll-view"
        scroll-y
        enable-back-to-top
        @scrolltoupper="finishUpper" 
        @scrolltolower="finishLower"
        :upper-threshold="-50"
        :lower-threshold="0">
         <div class="loading" v-if="finishLoading">
          <img src="/static/image/loading.gif" alt="">
        </div>
        <div class="no-data" v-else-if="!finishTaskList">
          暂时没有已完成的任务
        </div>
        <template v-else>
          <task-cell 
            v-for="(item, index) in finishTaskList"
            :key="index"
            :id="item.id"
            :isReceive="item.isReceive"
            :status="item.status"
            :title="item.title"
            :desc="item.desc"
            :integral="item.integral"
            :endDate="item.endDate"
            @getIntegral="getIntegral(item)">
          </task-cell>
        </template>
       </scroll-view>
      </van-tab>
    </van-tabs>
    <!-- <van-dialog
    :title="dialogTitle"
    :message="dialogDesc"
    overlay="false"
    :show="dialogShow"></van-dialog> -->
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
      noCurrentPage: 2, // 未领取列表的当前页数
      noTaskList: null,
      noLoading: true,
      doingCurrentPage: 2, // 进行中列表的当前页数
      doingTaskList: null,
      doingLoading: true,
      finishCurrentPage: 2, // 已完成列表的当前页数
      finishTaskList: null,
      finishLoading: true,
      isDoingUpper: false, // 进行中下拉
      isNoUpper: false, // 未领取下拉
      isFinishUpper: false, // 已完成下拉
      dialogTitle: '',
      dialogShow: false,
      dialogDesc: ''
    }
  },
  async onShow () {
    await this.initDoingTaskList()
  },
  methods: {
    tabChange (data) {
      switch (data.target.index) {
        // case 0:
        //   this.initNoTaskList()
        //   break
        case 0:
          this.initDoingTaskList()
          break
        case 1:
          this.initFinishTaskList()
          break
      }
    },
    async initNoTaskList () {
      this.noTaskList = await this.getTaskList(0, 1)
      this.noLoading = false
    },
    async initDoingTaskList () {
      this.doingTaskList = await this.getTaskList(1, 1)
      this.doingLoading = false
    },
    async initFinishTaskList () {
      this.finishTaskList = await this.getTaskList(2, 1)
      this.finishLoading = false
    },
    /** 下拉刷新 */
    noUpper () {
      if (!this.isNoUpper) {
        this.isNoUpper = true
        wx.vibrateShort()
        ;(async () => {
          this.noTaskList = await this.getTaskList(0, 1)
          this.noCurrentPage = 2
          wx.showToast({
            title: '刷新成功',
            icon: 'success',
            duration: 1000
          })
        })()
      }
    },
    /** 上拉加载 */
    async noLower () {
      let list = await this.getTaskList(0, this.noCurrentPage)
      this.noTaskList.push(...list)
      this.noCurrentPage++
    },
    /** 下拉刷新 */
    doingUpper () {
      if (!this.isDoingUpper) {
        this.isDoingUpper = true
        wx.vibrateShort()
        ;(async () => {
          this.doingTaskList = await this.getTaskList(1, 1)
          this.doingCurrentPage = 2
          wx.showToast({
            title: '刷新成功',
            icon: 'success',
            duration: 1000
          })
        })()
      }
    },
    /** 上拉加载 */
    async doingLower () {
      let list = await this.getTaskList(1, this.doingCurrentPage)
      this.doingTaskList.push(...list)
      this.doingCurrentPage++
    },
    /** 下拉刷新 */
    finishUpper () {
      if (!this.isFinishUpper) {
        this.isFinishUpper = true
        wx.vibrateShort()
        ;(async () => {
          this.finishTaskList = await this.getTaskList(1, 1)
          this.finishCurrentPage = 2
          wx.showToast({
            title: '刷新成功',
            icon: 'success',
            duration: 1000
          })
        })()
      }
    },
    /** 上拉加载 */
    async finishLower () {
      let list = await this.getTaskList(1, this.finishCurrentPage)
      this.finishTaskList.push(...list)
      this.finishCurrentPage++
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
        return res.data.length === 0 ? null : res.data
      })
    },
    touchend () {
      this.isDoingUpper = false
      this.isNoUpper = false
      this.isFinishUpper = false
      // let noScrollHeight = document.querySelector('#noScroll').clientHeight
      // let noTaskListHeight = this.$refs.noTaskList.$el.clientHeight
      // console.log(noScrollHeight)
    },
    /** 查看详情 */
    showDetail (item) {
      this.dialogShow = true
      this.dialogTitle = item.title
      this.dialogDesc = item.desc
      console.log(item)
    },
    /** 领取积分 */
    getIntegral (item) {
      this.$Http.receiveIntegral({
        openid: wx.getStorageSync('openid'),
        taskId: item.taskId,
        integral: item.integral
      }).then(res => {
        item.isReceive = 1
        wx.showToast({
          title: '积分领取成功',
          icon: 'success',
          duration: 1000
        })
      })

      this.$Http.addIntegral({
        openId: wx.getStorageSync('openid'),
        integral: item.integral,
        content: item.title
      }).then(res => {})
    },
    /** 领取任务 */
    doTask (taskId) {
      this.$Http.claimTask({
        openid: wx.getStorageSync('openid'),
        taskId
      }).then(res => {
        this.noTaskList.forEach((item, index) => {
          if (item.taskId === taskId) {
            this.noTaskList.splice(index, 1)
            wx.showToast({
              title: '认领成功',
              icon: 'success',
              duration: 1000
            })
          }
        })
      })
    }
  }
}
</script>

<style lang="less" scope>
  .scroll-view {
    height: calc(100vh - 44px);
  }

  .no-data {
    text-align: center;
    padding-top: 30px;
    color: #999999;
    font-size: 28rpx;
  }

  .loading img {
    width: 50px;
    height: 50px;
    margin: auto;
    display: block;
    padding-top: 100px;
  }
</style>


