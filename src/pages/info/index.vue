<template>
  <div class="info">
    <h2>基本信息</h2>
    <van-cell-group>
      <van-field
        v-model="formData.name"
        clearable
        label="姓名"
        placeholder="请输入用户名"
        :readonly="!isEdit"
        @change="nameChange"
        required
      />

      <van-field
        v-model="formData.nickName"
        label="昵称"
        placeholder="昵称"
        border
        :readonly="!isEdit"
        @change="nickNameChange"
        required
      />
      <!-- <van-field
        v-model="formData.birthday"
        label="出生年月"
        placeholder="出生年月"
        border
        :readonly="!isEdit"
      /> -->
      <van-field
        v-model="formData.phone"
        label="联系电话"
        placeholder="联系电话"
        border
        :readonly="!isEdit"
        @change="phoneChange"
        required
      />
      <van-field
        v-model="sex"
        label="性别"
        placeholder="性别"
        border
        readonly
        @tap="sexShow"
        required
      />
      <van-field
        v-model="formData.city"
        label="所在城市"
        placeholder="所在城市"
        border
        :readonly="!isEdit"
        @change="cityChange"
        required
      />
    </van-cell-group>

    <h2>职业信息</h2>
    <van-cell-group>
      <van-field
        v-model="formData.job"
        label="职业"
        placeholder="职业"
        :border="false"
        :readonly="!isEdit"
         @change="jobChange"
         required
      />
    </van-cell-group>

    <div class="btn-group">
      <van-button type="primary" size="large" v-if="!isEdit" @click="edit">编辑</van-button>
      <van-button type="danger" size="large" v-else @click="save">保存</van-button>
    </div>

    <van-action-sheet
      :show="sexSheetShow"
      :actions="sexSheetAction"
      @select="sexSelect"
    />

    <!--<van-popup
      :show="datePopupShow"
      position="bottom">
      <van-datetime-picker
        type="date"
        :value="currentDate"
        @change="dateChange"
      />
    </van-popup>-->
  </div>
</template>

<script>
export default {
  name: 'Info',
  data () {
    return {
      isEdit: false, // 是否处于编辑状态
      sexSheetShow: false,
      sexSheetAction: [
        {
          name: '男',
          index: 0
        },
        {
          name: '女',
          index: 1
        }
      ],
      formData: {
        name: '',
        nickName: '',
        sex: '',
        // birthday: '',
        phone: '',
        job: '',
        city: ''
      },
      sex: '',
      datePopupShow: true,
      currentDate: new Date().getTime()
    }
  },
  onShow () {
    this.isEdit = false
    this.$Http.getUserInfo({
      openId: wx.getStorageSync('openid')
    }).then(res => {
      this.formData = res.data
    })
  },
  methods: {
    save () {
      if (!this.formData.name ||
        !this.formData.nickName ||
        !this.formData.phone ||
        !this.formData.job ||
        !this.formData.city ||
        this.formData.sex === ''
      ) {
        wx.showToast({
          title: '请填写完所有信息',
          icon: null
        })
        return
      }

      if (!/1[\d]{10}$/ig.test(this.formData.phone)) {
        wx.showToast({
          title: '请输入正确的手机号码',
          icon: null
        })
        return
      }

      console.log('请求的参数', this.formData)
      this.$Http.updateUserInfo(this.formData).then(res => {
        this.isEdit = false
        wx.showToast({
          title: '更新成功',
          icon: 'success'
        })
      })
    },
    edit () {
      this.isEdit = true
    },
    sexShow () {
      if (this.isEdit) {
        this.sexSheetShow = true
      }
    },
    /** 性别选择 */
    sexSelect (sex) {
      this.sexSheetShow = false
      this.sex = sex.target.name
      this.formData.sex = sex.target.index
    },
    nameChange (event) {
      this.formData.name = event.mp.detail
    },
    nickNameChange (event) {
      this.formData.nickName = event.mp.detail
    },
    phoneChange (event) {
      this.formData.phone = event.mp.detail
    },
    jobChange (event) {
      this.formData.job = event.mp.detail
    },
    cityChange (event) {
      this.formData.city = event.mp.detail
    },
    dateChange (event) {
      this.setData({
        currentDate: event.detail.value
      })
      // this.formData.birthday = event.mp.detail
    }
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
