<template>
  <div class="container">
    <div class="logo">
      <div class="img-box">
        <img :src="logoUrl">
      </div>
    </div>
    <div class="sales-center">
      <div class="nav-list">
        <div class="nav-content" v-for="item in navList" :key="item.id" @click="navigateToBtn(item)">
          <div class="img-box">
            <img :src="item.imgUrl" mode="aspectFit">
          </div>
          <div class="text">
            <span>{{item.text}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import logo from '@/pages/images/logo.png'
import submitSN from '@/pages/images/tijiaosn.png'
import SNlist from '@/pages/images/snlist.png'
import userIntroduction from '@/pages/images/gerenxinxi.png'
import manual from '@/pages/images/caozuoshouce.png'
export default {
  data () {
    return {
      logoUrl: logo,
      navList: [
        {
          imgUrl: submitSN,
          text: '提交SN',
          pages: '/pages/submitSN/main',
          id: '00'
        },
        {
          imgUrl: SNlist,
          text: 'SN列表',
          pages: '/pages/SNlist/main',
          id: '01'
        },
        {
          imgUrl: userIntroduction,
          text: '个人信息',
          pages: '/pages/personalInfo/main',
          id: '02'
        },
        {
          imgUrl: manual,
          text: '操作手册',
          pages: '/pages/operatioManual/main',
          id: '03'
        }
      ]
    }
  },
  methods: {
    navigateToBtn (i) {
      console.log(i.pages)
      wx.navigateTo({
        url: i.pages
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.logo {
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 100rpx 0;
  .img-box {
    width: 200rpx;
    height: 200rpx;
    img {
      max-width: 100%;
      max-height: 100%;
    }
  }
}
.sales-center {
  .nav-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    .nav-content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 300rpx;
      height: 300rpx;
      box-sizing: border-box;
      border: 1px solid RGBA(47, 202, 244, 0.1);
      box-shadow: 0 0 27rpx RGBA(47, 202, 244, 0.1);
      margin: 10rpx;
      .img-box {
        display: flex;
        justify-content: center;
        width: 110rpx;
        height: 100rpx;
        img {
          display: block;
          max-height: 100%;
        }
      }
      .text {
        margin-top: 29rpx;
        span {
          font-size: 32rpx;
          color: #333;
        }
      }
    }
  }
}
</style>

<style>

</style>
