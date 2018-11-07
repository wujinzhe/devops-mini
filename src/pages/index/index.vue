<template>
  <div>
    <van-tabs @change="tabChange" color="#71d5f3">
    <van-tab title="线下活动">
      <scroll-view
        class="scroll-view"
        scroll-y
        enable-back-to-top
        @scrolltoupper="underlineUpper"
        @scrolltolower="underlineLower"
        :upper-threshold="-50"
        :lower-threshold="-50">
        <underline-cell
          v-for="(item, index) in underlineList"
          :key="index"
          :imgUrl="item.imgUrl"
          :title="item.title"
          :desc="item.desc"
          :person="item.person"
          :integral="item.integral"
          :date="item.date"
          :state="item.state"
        ></underline-cell>
      </scroll-view>
    </van-tab>
    <van-tab title="精品课程">
      <scroll-view
        class="scroll-view"
        scroll-y
        enable-back-to-top
        @scrolltoupper="underlineUpper"
        @scrolltolower="underlineLower"
        :upper-threshold="-50"
        :lower-threshold="-50">
        <underline-cell
          v-for="(item, index) in underlineList"
          :key="index"
          :imgUrl="item.imgUrl"
          :title="item.title"
          :desc="item.desc"
          :person="item.person"
          :integral="item.integral"
          :date="item.date"
          :state="item.state"
        ></underline-cell>
      </scroll-view>
    </van-tab>
    <van-tab title="热门干货">
      <scroll-view
        class="scroll-view"
        scroll-y
        enable-back-to-top
        @scrolltoupper="underlineUpper"
        @scrolltolower="underlineLower"
        :upper-threshold="-50"
        :lower-threshold="-50">
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
        <article-cell></article-cell>
      </scroll-view>
    </van-tab>
    <van-tab title="推荐书籍">内容 4</van-tab>
  </van-tabs>
  </div>
</template>

<script>
import underlineCell from '@/components/underline-cell'
import articleCell from '@/components/article-cell'
const underlineData = [
  {
    title: '教你学Java',
    desc: '教你学Java',
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541611190532&di=5e44c2ae97dc8d54c28ba1886c4563a5&imgtype=0&src=http%3A%2F%2Fs3.sinaimg.cn%2Fmw690%2F006D0Zblzy7j68qTEc272%26690',
    date: '2018.11.12',
    integral: 200,
    person: 200,
    state: 1
  },
  {
    title: '前端基础入门',
    desc: '大家一起来学前端啦啦啦啦啦啦啦啦啦啦啦啦啦啦',
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542205736&di=af26e38d563632aa5f6861c4accd14b2&imgtype=jpg&er=1&src=http%3A%2F%2Fb.hiphotos.baidu.com%2Fzhidao%2Fpic%2Fitem%2Fd439b6003af33a8700745cebcd5c10385343b522.jpg',
    date: '2018.11.12',
    integral: 200,
    person: 200,
    state: 0
  },
  {
    title: '前端高级进阶',
    desc: '让你瞬间成为高级工程师，快上车吧',
    date: '2018.11.12',
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541611145174&di=00fb57444acc793b02dda04027ad6669&imgtype=0&src=http%3A%2F%2Fc.hiphotos.baidu.com%2Fexp%2Fw%3D500%2Fsign%3D352c23118dd6277fe912323818391f63%2F472309f790529822c0238e69ddca7bcb0a46d40c.jpg',
    integral: 200,
    person: 200,
    state: 1
  },
  {
    title: '教你如何进行敏捷开发',
    desc: '快速提高团队的开发与迭代效率，是你不错的选择哟',
    date: '2018.11.12',
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542205998&di=358bdb9af382ed99b7891a3825d120da&imgtype=jpg&er=1&src=http%3A%2F%2Fpic4.zhimg.com%2Fv2-287d4d6c3ea6ee6368a40a5524de1149_1200x500.jpg',
    integral: 200,
    person: 200,
    state: 2
  },
  {
    title: 'node入门',
    desc: '你想学习nodejs么，你想涉及后端领域么，快快来参加吧',
    date: '2018.11.13',
    integral: 200,
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1541611309603&di=a3297234d4d1e59706470b348bb4c81e&imgtype=0&src=http%3A%2F%2Foss.aliyuncs.com%2Fphotogallery%2Fphoto%2F1257842289342004%2F15086%2F6294a150-590f-4539-9cd5-c1bc5bd06936.jpg',
    person: 200,
    state: 0
  },
  {
    title: '人人都是产品经理',
    desc: '人人都是产品经理，你也可以成为优秀的产品经理',
    date: '2018.11.13',
    integral: 200,
    imgUrl: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3690959215,1034453353&fm=26&gp=0.jpg',
    person: 200,
    state: 1
  },
  {
    title: '培养优秀的产品思维',
    desc: '培养优秀的产品思维',
    date: '2018.11.14',
    integral: 200,
    imgUrl: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542206353&di=e8da4d7acd60285c6d4483f01050c6de&imgtype=jpg&er=1&src=http%3A%2F%2Fimg2.ctoutiao.com%2Fuploads%2F2015%2F10%2F04b8c_34e1c0d47077f7bc8ab2340f2abced58.jpg',
    person: 200,
    state: 0
  },
  {
    title: '设计是一门科学',
    desc: '设计师其实是科学家，你想听听其中的奥秘么，来吧',
    date: '2018.11.12',
    integral: 200,
    imgUrl: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=2402711398,1061333992&fm=26&gp=0.jpg',
    person: 200,
    state: 1
  }
]

export default {
  name: 'Home',
  components: {
    underlineCell,
    articleCell
  },
  data () {
    return {
      underlineList: []
    }
  },
  methods: {
    tabChange (tab) {
      console.log(tab)
    },
    /** 【线下活动】下拉刷新 */
    underlineUpper () {
      wx.vibrateShort()
      // wx.showToast({
      //   title: '下拉',
      //   icon: 'success',
      //   duration: 2000
      // })
    },
    /** 【线下活动】上拉加载 */
    underlineLower () {
      // wx.showToast({
      //   title: '上拉',
      //   icon: 'success',
      //   duration: 2000
      // })
    },
    upper () {
      wx.vibrateShort()
      // wx.showToast({
      //   title: '下拉',
      //   icon: 'success',
      //   duration: 2000
      // })
    },
    lower () {
      // wx.showToast({
      //   title: '上拉',
      //   icon: 'success',
      //   duration: 2000
      // })
    }
  },
  created () {
    this.underlineList = underlineData
  }
}
</script>

<style lang="less" scoped>
  .scroll-view-item {
    height: 100rpx;
    background-color: red;
    margin-top: 20rpx;
  }
  .scroll-view {
    height: calc(100vh - 44px);
  }
</style>
<style lang="less">
  .van-tabs__wrap {
    background-color: #ffffff;
  }
</style>
