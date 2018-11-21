<template>
  <div class="">
   <van-tabs @change="tabChange" color="#71d5f3">
    <van-tab title="未认领">
      <scroll-view
        class="scroll-view"
        scroll-y
        enable-back-to-top
        @scrolltoupper="underlineUpper"
        @scrolltolower="underlineLower"
        :upper-threshold="-50"
        :lower-threshold="-50">
        <task-cell></task-cell>
        <task-cell></task-cell>
        <task-cell></task-cell>
        <task-cell></task-cell>
        <task-cell></task-cell>
        <task-cell></task-cell>
        <task-cell></task-cell>
        <task-cell></task-cell>
      </scroll-view>
    </van-tab>
    <van-tab title="进行中">
      <scroll-view
        class="scroll-view"
        scroll-y
        enable-back-to-top
        @scrolltoupper="underlineUpper"
        @scrolltolower="underlineLower"
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
        @scrolltoupper="underlineUpper"
        @scrolltolower="underlineLower"
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

      }
    },
    onShow: function () {
      wx.setNavigationBarTitle({
        title: '我的任务'
      })
    },
    methods: {
      tabChange () {
      }
    }
  }
</script>

<style lang="less" scope>
  .scroll-view {
    height: calc(100vh - 44px);
  }
</style>


