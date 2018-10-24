<template>
  <div class="container">
    <div class="content">
      <div class="top-nav">
        <div class="nav-list">
          <div class="text" v-for="(item,index) in navList" :key="index" :class="item.active?'active':''" @click="tabBtn(item)">
            <span>{{item.titleText}}</span>
          </div>
        </div>
      </div>
      <div class="bill-center" v-if="billList.length !== 0">
        <div class="bill-list" v-for="(item,index) in billList" :key="index" v-if="item.bindingVisible">
          <div class="left-list">
            <div class="title">
              <span>{{item.numbering}}</span>
            </div>
            <div class="submission-time">
              <div class="title-time">
                <span>提交时间：</span>
              </div>
              <div class="time">
                <div class="period">
                  <span>{{item.submissionTime}}</span>
                </div>
                <div class="clock">
                  <span>{{item.submissionHour}}</span>
                </div>
              </div>
            </div>
            <div class="submission-time">
              <div class="title-time">
                <span>审核时间：</span>
              </div>
              <div class="time">
                <div class="period">
                  <span>{{item.reviewTime}}</span>
                </div>
                <div class="clock">
                  <span>{{item.reviewHour}}</span>
                </div>
              </div>
            </div>
            <div class="approval-tatus" :class="item.statusText == '已核验'?'':item.statusText == '待核验'?'with-verification':'did-not-pass'">
              <span>{{item.statusText}}</span>
            </div>
          </div>
          <div class="right-content">
            <div class="img-box" @click="picZoomBtn(item)">
              <img :src="item.billpic" mode="aspectFit">
            </div>
          </div>
        </div>
      </div>
      <div class="bill-content" v-else>
        <div class="img-box">
          <img :src="airPic" mode="aspectFit">
        </div>
        <div class="text">
          <span>您还没有提交SN哦~</span>
        </div>
        <div class="return-top" @click="navigateToBtn">
          <span>返回</span>
        </div>
      </div>
    </div>
    <div class="pib-zoom">
      <div class="img-box">
        <img :src="picZoom" mode="aspectFit">
      </div>
      <div class="shut-down">
        
      </div>
    </div>
  </div>
</template>

<script>
// import bill from '@/pages/images/piaoju.png'
import air from '@/pages/images/wu.png'
export default {
  data () {
    return {
      airPic: air,
      picZoom: '',
      navList: [
        {
          titleText: '全部',
          active: true
        },
        {
          titleText: '已核验',
          active: false
        },
        {
          titleText: '待核验',
          active: false
        },
        {
          titleText: '未通过',
          active: false
        }
      ],
      billList: [
        // {
        //   numbering: 'SN:123456789',
        //   submissionTime: '2018-08-02',
        //   submissionHour: '10：30',
        //   reviewTime: '2018-08-02',
        //   reviewHour: '10：30',
        //   statusText: '已核验',
        //   bindingVisible: true,
        //   billpic: bill
        // },
        // {
        //   numbering: 'SN:123456789',
        //   submissionTime: '2018-08-02',
        //   submissionHour: '10：30',
        //   reviewTime: '',
        //   bindingVisible: true,
        //   reviewHour: '',
        //   statusText: '待核验',
        //   billpic: bill
        // },
        // {
        //   numbering: 'SN:123456789',
        //   submissionTime: '2018-08-02',
        //   submissionHour: '10：30',
        //   reviewTime: '',
        //   reviewHour: '',
        //   bindingVisible: true,
        //   statusText: '待核验',
        //   billpic: bill
        // },
        // {
        //   numbering: 'SN:123456789',
        //   submissionTime: '2018-08-02',
        //   submissionHour: '10：30',
        //   reviewTime: '2018-08-02',
        //   reviewHour: '10：30',
        //   bindingVisible: true,
        //   statusText: '已核验',
        //   billpic: bill
        // },
        // {
        //   numbering: 'SN:123456789',
        //   submissionTime: '2018-08-02',
        //   submissionHour: '10：30',
        //   reviewTime: '2018-08-02',
        //   bindingVisible: true,
        //   reviewHour: '10：30',
        //   statusText: '未通过',
        //   billpic: bill
        // }
      ]
    }
  },
  methods: {
    tabBtn (i) {
      this.navList.map(index => {
        index.active = false
      })
      i.active = true
      this.billList.map(index => {
        index.bindingVisible = false
        if (index.statusText === i.titleText) {
          index.bindingVisible = true
        } else if (i.titleText === '全部') {
          index.bindingVisible = true
        }
      })
    },
    navigateToBtn () {
      wx.navigateTo({
        url: '/pages/homepage/main'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  .top-nav {
    width: 100%;
    position: fixed;
    height: 80rpx;
    top: 0;
    left: 0;
    background: #fff;
    .nav-list {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      .text {
        height: 100%;
        box-sizing: border-box;
        border-bottom: 4rpx solid #fff;
        display: flex;
        align-items: center;
        span {
          font-size: 32rpx;
          color: #333;
        }
      }
      .active {
        border-bottom: 4rpx solid #43cff5;
        span {
          color: #43cff5;
        }
      }
    }
  }
  .bill-center {
    width: 100%;
    padding: 0 20rpx;
    box-sizing: border-box;
    margin: 100rpx 0;
    .bill-list {
      margin-top: 20rpx;
      width: 100%;
      display: flex;
      justify-content: space-between;
      box-shadow: 0 0rpx 10rpx RGBA(67, 207, 245, 0.4);
      border-top: 8rpx solid #43cff5;
      border-radius: 6rpx;
      padding: 30rpx 20rpx;
      box-sizing: border-box;
      .left-list {
        display: block;
        flex-direction: column;
        justify-content: space-between;
        .title {
          span {
            display: block;
            font-weight: bold;
            font-size: 28rpx;
          }
        }
        .submission-time {
          margin-top: 20rpx;
          display: flex;
          span {
            display: block;
            font-size: 24rpx;
            color: #666;
          }
          .time {
            display: flex;
            .period {
              margin-right: 30rpx;
            }
          }
        }
        .approval-tatus {
          margin-top: 20rpx;
          width: 160rpx;
          height: 60rpx;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #43cff5;
          border-radius: 6rpx;
          span {
            display: block;
            font-size: 28rpx;
            color: #fff;
          }
        }
        .did-not-pass {
          background: #999;
        }
        .with-verification {
          background: #f57143;
        }
      }
      .right-content {
        .img-box {
          width: 220rpx;
          height: 220rpx;
          img {
            display: block;
            max-width: 100%;
            max-height: 100%;
          }
        }
      }
    }
  }
  .bill-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    .img-box {
      margin-top: 210rpx;
      width: 400rpx;
      height: 277rpx;
      img {
        max-width: 100%;
        max-height: 100%;
      }
    }
    .text {
      margin-top: 50rpx;
      span {
        font-size: 28rpx;
        color: #333;
      }
    }
    .return-top {
      margin: 150rpx;
      width: 710rpx;
      border-radius: 6rpx;
      background: #43cff5;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 88rpx;
      span {
        font-size: 32rpx;
        color: #fff;
      }
    }
  }
}
</style>

<style>
</style>

