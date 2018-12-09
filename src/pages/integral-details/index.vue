<template>
  <div class="">
     <scroll-view
        class="scroll-view"
        scroll-y
        enable-back-to-top
        @scrolltolower="lower"
        :lower-threshold="0">
        <div class="loading" v-if="loading">
          <img src="/static/image/loading.gif" alt="">
        </div>
        <div class="no-data" v-else-if="!detailList">
          暂无积分详情
        </div> 
        <template v-else>
          <van-cell
          v-for="(item, key) in detailList"
          :title="item.content"
          :label="item.date"
          :key="key"
          :value="item.integral" />
        </template>
      </scroll-view>
  </div>
</template>

<script>
  export default {
    name: 'IngegralDetails',
    data () {
      return {
        detailList: null,
        currentPage: 1,
        pageSize: 13,
        loading: true
      }
    },
    computed: {
      // cellStyle: {
      //   color: ''
      // }
    },
    onShow: function () {
      (async () => {
        this.loading = true
        this.detailList = await this.getIntegralList(1)
        console.log(this.detailList)
      })()
    },
    methods: {
      getIntegralList (currentPage) {
        return this.$Http.getIntegralList({
          openId: wx.getStorageSync('openid'),
          currentPage: currentPage,
          pageSize: this.pageSize
        }).then(res => {
          console.log('res', res)
          // this.detailList = res.data.length === 0 ? null : res.data
          res.data.forEach(item => {
            if (item.integral > 0) {
              item.integral = `+${item.integral}`
            }
          })
          this.loading = false
          return res.data.length === 0 ? null : res.data
        })
      },
      lower () {
        (async () => {
          this.detailList = this.detailList.concat(await this.getIntegralList(this.currentPage))
          this.currentPage++
        })()
      },
      formate (val) {
        console.log(typeof val)
        return '+100'
        // return Number(val) > 0 ? `+${val}` : val
      }
    }
  }
</script>

<style lang="less" scope>
  .scroll-view {
    height: 100vh;
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
