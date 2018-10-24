<template>
  <div class="container">
    <div class="content">
      <div class="form-list">
        <!-- 姓名 -->
        <div class="list-center">
          <div class="title">
            <span>姓名</span>
          </div>
          <div class="input-box">
            <span>张微</span>
          </div>
        </div>
        <!-- SN码 -->
        <div class="list-center">
          <div class="title">
            <img :src="necessary" mode="aspectFit">
            <span>SN码</span>
          </div>
          <div class="input-box">
            <input type="text" placeholder="请输入13或者16位SN码" placeholder-class="input-placeholder-1">
          </div>
        </div>
        <!-- 机型 -->
        <div class="list-center gropdown" @click="gropdownBtnshop = !gropdownBtnshop">
          <div class="title">
            <img :src="necessary" mode="aspectFit">
            <span>机型</span>
          </div>
          <div class="input-box">
            <span>{{shopTitle}}</span>
            <img :src="dropDown" mode="aspectFit">
          </div>
          <div class="gropdown-son" :class="gropdownBtnshop?'maxgao':''">
            <div class="gropList" :class="item.choose?'active':''" v-for="(item,index) in shopList" :key="index" @click="gropListBtn(item)">
              <span>{{item.title}}</span>
            </div>
          </div>
        </div>
        <!-- 颜色 -->
        <div class="list-center gropdown" @click="gropdownBtncolor = !gropdownBtncolor">
          <div class="title">
            <img :src="necessary" mode="aspectFit">
            <span>颜色</span>
          </div>
          <div class="input-box">
            <span>{{colorTitle}}</span>
            <img :src="dropDown" mode="aspectFit">
          </div>
          <div class="gropdown-son" :class="gropdownBtncolor?'maxgao':''">
            <div class="gropList" :class="item.choose?'active':''" v-for="(item,index) in colorList" :key="index" @click="colorListBtn(item)">
              <span>{{item.title}}</span>
            </div>
          </div>
        </div>
        <!-- 发票 -->
        <div class="list-center camera">
          <div class="title">
            <img :src="necessary" mode="aspectFit">
            <span>销售小票</span>
          </div>
          <div class="input-box" @click="cameraBtn">
            <span class="input-placeholder-1">{{cameraaaaa}}</span>
            <img :src="camera" mode="aspectFit">
          </div>
        </div>
        <!-- 提交按钮 -->
        <div class="list-center submitBtn" @click="navto">
          <span>提交</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import xialapic from '@/pages/images/xiala.png'
import bitianpic from '@/pages/images/bitian.png'
import camera from '@/pages/images/xiangji.png'
export default {
  data () {
    return {
      necessary: bitianpic,
      dropDown: xialapic,
      camera: camera,
      gropdownBtnshop: false,
      gropdownBtncolor: false,
      cameraaaaa: '请提交销售小票',
      shopTitle: '公子小白1',
      colorTitle: '黑色',
      shopList: [
        {
          title: '公子小白1',
          choose: true
        },
        {
          title: '公子小白2',
          choose: false
        },
        {
          title: '公子小白3',
          choose: false
        }
      ],
      colorList: [
        {
          title: '黑色',
          choose: true
        },
        {
          title: '白色',
          choose: false
        },
        {
          title: '蓝色',
          choose: false
        }
      ]
    }
  },
  methods: {
    cameraBtn () {
      let that = this
      wx.chooseImage({
        count: 1, // 默认9
        sizeType: ['compressed'], // 可以指定是原图还是压缩图，默认二者都有
        sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
        success: function (res) {
          // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
          var tempFilePaths = res.tempFilePaths
          console.log(tempFilePaths)
          that.cameraaaaa = '已经提交'
        }
      })
    },
    gropListBtn (i) {
      this.shopTitle = i.title
      this.shopList.map((index, val) => {
        index.choose = false
      })
      i.choose = true
    },
    colorListBtn (i) {
      this.colorTitle = i.title
      this.colorList.map((index, val) => {
        index.choose = false
      })
      i.choose = true
    },
    navto () {
      wx.navigateTo({
        url: '/pages/submittedSuc/main'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  .form-list {
    margin-top: 20rpx;
    width: 100%;
    box-shadow: 0rpx -20rpx 20rpx RGBA(47, 202, 244, 0.1);
    padding: 0 20rpx;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    .list-center {
      box-sizing: border-box;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid RGBA(47, 202, 244, .2);
      height: 88rpx;
      .title {
        display: flex;
        align-items: center;
        img {
          max-width: 8rpx;
          max-height: 8rpx;
          display: block;
          margin-right: 10rpx;
        }
        span {
          color: #333;
          font-size: 32rpx;
        }
      }
      .input-box {
        span {
          font-size: 32rpx;
        }
        input {
          font-size: 32rpx;
          color: #333;
        }
      }
    }
    .gropdown {
      position: relative;
      .input-box {
        img {
          margin-left: 20rpx;
          width: 21rpx;
          height: 18rpx;
        }
      }
      .gropdown-son {
        z-index: 999;
        position: absolute;
        top: 89rpx;
        width: 710rpx;
        max-height: 0rpx;
        background: #fff;
        transition: all 0.4s;
        opacity: 0;
        overflow: hidden;
        left: -20rpx;
        margin: 0 20rpx 20rpx 20rpx;
        box-shadow: 0 10rpx 27rpx RGBA(0, 0, 0, 1);
        border-radius: 0px 0px 20rpx 20rpx;
        .gropList {
          background: #fff;
          width: 100%;
          height: 88rpx;
          border-bottom: 1px solid RGBA(47, 202, 244, 0.2);
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 0 36rpx 0 0;
          box-sizing: border-box;
          span {
            font-size: 32rpx;
            color: #333;
          }
        }
        .active {
          span {
            color: #2fcaf4;
          }
        }
      }
      .maxgao {
        opacity: 1;
        max-height: 400rpx;
        transition: all 0.4s;
      }
    }
    .camera {
      .input-box {
        img {
          margin-left: 20rpx;
          width: 28rpx;
          height: 25rpx;
        }
      }
    }
    .submitBtn {
      border-bottom: none;
      margin-top: 150rpx;
      width: 710rpx;
      background: #2fcaf4;
      height: 80rpx;
      border-radius: 6rpx;
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        font-size: 32rpx;
        color: #fff;
      }
    }
  }
}
</style>

<style>
.input-placeholder-1 {
  font-size: 32rpx;
  color: #dedede;
  text-align: right;
}
.camera camera {
  position: absolute;
  top: 0;
  width: 60%;
  height: 88rpx;
  right: 0;
  opacity: 0;
}
</style>

